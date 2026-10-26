/*!
 * Grainy.js — Canvas-based Film Grain & Noise Generator
 * Adds procedural animated or static film grain texture to DOM elements.
 * Compatible with Element.prototype.grainy, window.grainy, and window.grained.
 */
(function (window, document) {
    'use strict';

    var defaults = {
        intensity: 0.95,
        size: 160,
        opacity: 0.38,
        monochrome: true,
        color: null,
        backgroundColor: 'transparent',
        animate: true,
        grainChaos: 0.45,
        grainSpeed: 16
    };

    function hexToRgb(hex) {
        var clean = hex.replace('#', '');
        if (clean.length === 3) {
            clean = clean.split('').map(function (c) { return c + c; }).join('');
        }
        var num = parseInt(clean, 16);
        return {
            r: (num >> 16) & 255,
            g: (num >> 8) & 255,
            b: num & 255
        };
    }

    function generateNoiseDataUrl(options) {
        var canvas = document.createElement('canvas');
        canvas.width = options.size;
        canvas.height = options.size;
        var ctx = canvas.getContext('2d');
        if (!ctx) return '';

        var imgData = ctx.createImageData(canvas.width, canvas.height);
        var totalPixels = canvas.width * canvas.height;
        var numPixels = Math.round(options.intensity * totalPixels);
        var maxAlpha = Math.min(255, Math.max(0, Math.round(255 * options.opacity)));
        var customColor = options.color ? hexToRgb(options.color) : null;

        // Populate with noise
        var data = imgData.data;
        while (numPixels--) {
            var x = Math.floor(Math.random() * canvas.width);
            var y = Math.floor(Math.random() * canvas.height);
            var idx = (x + y * canvas.width) * 4;

            if (customColor) {
                data[idx]     = customColor.r;
                data[idx + 1] = customColor.g;
                data[idx + 2] = customColor.b;
            } else if (options.monochrome) {
                var gray = Math.floor(Math.random() * 255);
                data[idx]     = gray;
                data[idx + 1] = gray;
                data[idx + 2] = gray;
            } else {
                data[idx]     = Math.floor(Math.random() * 255);
                data[idx + 1] = Math.floor(Math.random() * 255);
                data[idx + 2] = Math.floor(Math.random() * 255);
            }
            data[idx + 3] = Math.floor(Math.random() * maxAlpha);
        }

        ctx.putImageData(imgData, 0, 0);
        return canvas.toDataURL('image/png');
    }

    function ensureAnimationStyles() {
        if (document.getElementById('grainy-keyframes')) return;
        var style = document.createElement('style');
        style.id = 'grainy-keyframes';
        style.textContent = [
            '@keyframes grainyAnimation {',
            '  0%   { transform: translate(0, 0); }',
            '  10%  { transform: translate(-3%, -2%); }',
            '  20%  { transform: translate(2%, 3%); }',
            '  30%  { transform: translate(-2%, 2%); }',
            '  40%  { transform: translate(3%, -1%); }',
            '  50%  { transform: translate(-1%, -3%); }',
            '  60%  { transform: translate(2%, 1%); }',
            '  70%  { transform: translate(-3%, 2%); }',
            '  80%  { transform: translate(1%, -2%); }',
            '  90%  { transform: translate(-2%, -1%); }',
            '  100% { transform: translate(0, 0); }',
            '}'
        ].join('\n');
        (document.head || document.documentElement).appendChild(style);
    }

    function applyGrain(el, opts) {
        if (!el) return null;
        var options = Object.assign({}, defaults, opts);
        var dataUri = generateNoiseDataUrl(options);

        // Ensure container can house grain layer properly
        var computedPos = window.getComputedStyle(el).position;
        if (computedPos === 'static') {
            el.style.position = 'relative';
        }
        el.style.overflow = 'hidden';

        // Check if an existing grain layer already exists
        var grainLayer = el.querySelector(':scope > .grainy-layer');
        if (!grainLayer) {
            grainLayer = document.createElement('div');
            grainLayer.className = 'grainy-layer';
            grainLayer.setAttribute('aria-hidden', 'true');
            el.insertBefore(grainLayer, el.firstChild);
        }

        grainLayer.style.position = 'absolute';
        grainLayer.style.pointerEvents = 'none';
        grainLayer.style.backgroundImage = 'url(' + dataUri + ')';
        grainLayer.style.backgroundRepeat = 'repeat';
        grainLayer.style.backgroundSize = options.size + 'px ' + options.size + 'px';
        grainLayer.style.zIndex = '1';

        if (options.animate) {
            ensureAnimationStyles();
            grainLayer.style.top = '-10%';
            grainLayer.style.left = '-10%';
            grainLayer.style.width = '120%';
            grainLayer.style.height = '120%';
            grainLayer.style.animation = 'grainyAnimation ' + options.grainChaos + 's steps(' + options.grainSpeed + ') infinite';
        } else {
            grainLayer.style.top = '0';
            grainLayer.style.left = '0';
            grainLayer.style.width = '100%';
            grainLayer.style.height = '100%';
            grainLayer.style.animation = 'none';
        }

        return grainLayer;
    }

    // Element prototype integration
    Element.prototype.grainy = function (opts) {
        return applyGrain(this, opts);
    };

    // Global utility functions
    window.grainy = function (target, opts) {
        var el = typeof target === 'string' ? document.querySelector(target) : target;
        return applyGrain(el, opts);
    };

    // Grained.js alias compatibility
    window.grained = function (target, opts) {
        var el = typeof target === 'string' ? document.querySelector(target) : target;
        return applyGrain(el, opts);
    };

})(window, document);
