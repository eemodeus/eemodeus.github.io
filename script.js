/* ═══════════════════════════════════════════════════
   МОДЕУС — MAIN SCRIPT (MONOCHROME & GOTHIC EDITION)
   Themes | Dark Ambient Web Audio | Lenis Smooth Scroll | Liquid Glass
   ═══════════════════════════════════════════════════ */

(function () {
    'use strict';

    // ── ASCII FLEUR-DE-LIS (from ascii-art.txt) ──
    const FLEUR_ASCII = [
    "                                                 *",
    "                                               .%%%=",
    "                                              =##%%%%",
    "                                             =#####%%%",
    "                                            .##*####%%%",
    "                                            %#**#####%%=",
    "                                            #+=+*#####%%",
    "                                  .#%%%%%%%#.+==*##**##+%%%%%%%%%.",
    "                                 =%##########%+-+#*++##########%%%%",
    "                                .#***###*######+=*++##******+++*##%#",
    "                         :=-=.  +#-+**#%: .+%#**=*+**++*%   :%#*+*#%",
    "                        +-----+  %+**+        #***+***#       =#+*%.",
    "                       +-:::--=+  +##+        +*######%        #+%",
    "                      =--::::---*             *######%#",
    "                      +-:.::-::-=             %%%%###%#",
    "              +======**:...::::-*+====##**:   %##*#####.    -%%",
    "            ==-::::::--=+:.:::--:::::-==##%%%##*#+*##+###%%%%#%",
    "           =-:.::-=++=-::*.:::::-+#=+#+*+*###*++=+***###*+=+*%=",
    "           .-:::+      ------*-=       ==%%%%%%=-+#++*#=%@%@*####+",
    "             =-:.      .::::-::-       :+%--:  .+*#*+#:    ***++###",
    "                       .-:::----        *---=+   ##*#.     **-+++**%",
    "                        --=-=+-+     .+=:.:--:--    .     .*+===+***",
    "                ::==  .=:::.:-:-=*+*+-*:..:::::-:          **:+++***",
    "                 =:...:::=..::=---:--*:...::::::*     .##***+*++***+****#",
    "                   =###+--..::-#*+**. =. ..::..:=.*++#-++*##+**=**++****##",
    "                         ---==------===#: .::.:==-:::+++*##..++**+#   -+*+",
    "                       ##: +-:..::----::=:.:.:*::::---:++.-* #+***#:",
    "                      #*##%=:..:=#   .+=:::-:+.:-     :=-:-+ %****#",
    "                     ##+*####=-.-.      =+###%*#       :=##*-%+*=*=%##*",
    "                    ##+=+*###.*+.       #++==++*          ##+**++*#*##%",
    "                   %##=-=*####          --==-===         =  - .#*#*",
    "                   ##*=--*#***+  -=     =-*:--:-.    --*.     .",
    "                   ##*=--+**++# -::=*+--:.-.::=.:-==-:+=       :",
    "          +%%%%#%# ##*=-=+**=+*%#####%#%%+..:.:++==--+:         :",
    "        *###*++++*####+-=+*+***+==+**#####%::.:-                :",
    "       *##*=---=-==+*##+=#+**=-+*####*##*++*-:=.:.    .         -  .=:.:=.",
    "       %#*+=#%%%%%%#+##*+*+*-*%%:  -%%##*++:=        =         ..:         -",
    "       %##+#%       %##**#**%%       -#%#**.           -.      -            :",
    "        %%##-        %%###%%#*        %%%%-      .---.  .-    -  ..   :     .",
    "          %%=       .%%%%###%:          #+*#           - .:  =              .",
    "                    -+=+*#####         *=-=*=. :        : +  = .         ::",
    "                     *#**##*#*      ##%===+-+#:        . .=  =  .",
    "            +=#.    *+**=+*#=#%-. =##+#*==+==+*- .      . +  + -      =",
    "            =#=+***+=**=-+*++**####++#%+=+=++-*#.  :   -  -   +  -:.-",
    "             #%##*###%*=-*#+=#######%%*=-++===**+        :     =       :",
    "              .:%%%%=:#**##++#:...  =*++=+===+=*:::%#*#+#-     - :-..-.",
    "             =:.::--  *######%******#+*+++++=++++++***++**#=",
    "            =. .::..-  :####%==+++++++**+=++=++====++++=+**=#+",
    "           =:. .::...:  -#*++=++*#**++++*++=+*++++**+***++++*",
    "           -.. ::::..:  *#++***%.  :##*++*++*++++     .***+**",
    "    :=+=.  =:...:::..- :*====+=       **+*+**+*-        ***#:",
    " =--:.:::---=::.::::-::....::::--     +++++++++*        +*#",
    "=-.....::::::*-.:::*..:----:::..::     **+*****:",
    "=-::-=+-::=--:+:::=.-=+    *--::::    -#****###%",
    "+---=       -===-==-=       -:--+      +*++=++=*      +* ...",
    "  =--       -:::---:-        =*=++   -+-=+==++++*=.:**+%....=",
    "            ::..:::.:         =*-+++++++*==+=**++===+*#= ....=",
    "             ::-.:+:.      : . +++=#****+=+++=***#*%*#*=..:.:=",
    "     ..-    :....:-::-. .::.*++=:--=-  -**+++**-  -:-----:::-=::--=.",
    "     =:. ...:-=..:.+--:::::+++-:.::-=.  *#****#  :.-=+=---:-:--+==:-",
    "      .=----==:.::.:++===+. +=:.:::-==   .#**=   +-=    +*+#+    .-+",
    "             .-:--:-        ==::::::==                  +=+*#      .",
    "               ---=         +=--:---==              =   +-:*=   .:",
    "                      .#::--:+=----=:.::--*         =---:-..-:==-=",
    "                      =:.====:-=--=::====::*          ::.-:-* :.",
    "                      ==-=:  :=====--  .+--=             .-=",
    "                        --   :=..::-=   ..",
    "                              =.:::=.",
    "                          -:  +=-:++  -#",
    "                          =:-:=+::++.::=",
    "                           ++*+=::-+:++",
    "                               .*+="
    ];

    // ── DOM REFS ──
    const preloader        = document.getElementById('preloader');
    const asciiArtEl       = document.getElementById('ascii-art');
    const customCursor     = document.getElementById('custom-cursor');
    const mainContent      = document.getElementById('main-content');
    const siteHeader       = document.getElementById('site-header');
    const sectionsWrapper  = document.getElementById('sections-wrapper');
    const sections         = document.querySelectorAll('.section');
    const bottomNav        = document.getElementById('bottom-nav');
    const navBtns          = document.querySelectorAll('.nav-btn');
    const logoContainer    = document.getElementById('logoContainer');
    const siteControls     = document.querySelector('.site-controls');

    function updateAppHeight() {
        const vh = window.innerHeight;
        document.documentElement.style.setProperty('--app-height', vh + 'px');
    }

    // ═══════════════════════════════════════════════
    // 1. CS2 CROSSHAIR CURSOR (ULTRA-SMOOTH rAF)
    // ═══════════════════════════════════════════════

    let mouseX = -100;
    let mouseY = -100;
    let cursorRafPending = false;

    function renderCursor() {
        if (customCursor) {
            customCursor.style.transform = 'translate3d(' + (mouseX - 3) + 'px, ' + (mouseY - 2) + 'px, 0)';
        }
        cursorRafPending = false;
    }

    function initCustomCursor() {
        if (!customCursor) return;
        if (window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
            return;
        }
        customCursor.classList.add('active');

        window.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!cursorRafPending) {
                cursorRafPending = true;
                requestAnimationFrame(renderCursor);
            }
        }, { passive: true });

        window.addEventListener('mousedown', function () {
            customCursor.classList.add('recoil');
            setTimeout(function () {
                customCursor.classList.remove('recoil');
            }, 90);
        });
    }

    // ═══════════════════════════════════════════════
    // 2. PRELOADER & CINEMATIC EMERGENCE FROM DARKNESS
    // ═══════════════════════════════════════════════

    function initPreloader() {
        if (asciiArtEl) {
            asciiArtEl.textContent = FLEUR_ASCII.join('\n');
        }

        // Breathing cycle, then dissolve into pure darkness and smoothly emerge the main content
        setTimeout(function () {
            if (preloader) preloader.classList.add('fade-out');

            setTimeout(function () {
                if (preloader) preloader.style.display = 'none';
            }, 1200);

            showMainContent();
        }, 2200);
    }

    function showMainContent() {
        if (mainContent) {
            mainContent.classList.remove('hidden');
            mainContent.classList.add('visible');
        }
        if (siteHeader) {
            siteHeader.classList.remove('hidden');
            siteHeader.classList.add('visible');
        }
        if (siteControls) {
            siteControls.classList.remove('hidden');
            siteControls.classList.add('visible');
        }
    }

    // ═══════════════════════════════════════════════
    // 3. DARK AMBIENT AUDIO ENGINE (WEB AUDIO API)
    // ═══════════════════════════════════════════════

    class DarkAmbientEngine {
        constructor() {
            this.ctx = null;
            this.masterGain = null;
            this.isPlaying = false;
            this.nodes = [];
        }

        initContext() {
            if (this.ctx) return;
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            this.ctx = new AudioCtx();

            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
            this.masterGain.connect(this.ctx.destination);
        }

        start() {
            this.initContext();
            if (!this.ctx) return;
            if (this.ctx.state === 'suspended') {
                this.ctx.resume();
            }

            if (this.isPlaying) return;
            this.isPlaying = true;

            const t = this.ctx.currentTime;

            // Low cathedral drone: A1 (55Hz) and E2 (82.4Hz) with slow detuning
            const osc1 = this.ctx.createOscillator();
            osc1.type = 'sine';
            osc1.frequency.setValueAtTime(55, t);

            const osc2 = this.ctx.createOscillator();
            osc2.type = 'triangle';
            osc2.frequency.setValueAtTime(82.4, t);

            // Sub octave bass: A0 (27.5Hz)
            const sub = this.ctx.createOscillator();
            sub.type = 'sine';
            sub.frequency.setValueAtTime(27.5, t);

            // Biquad lowpass filter with slow resonant sweep
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(320, t);
            filter.Q.setValueAtTime(2.5, t);

            // LFO modulating the filter cutoff frequency (0.06 Hz)
            const lfo = this.ctx.createOscillator();
            lfo.frequency.setValueAtTime(0.06, t);
            const lfoGain = this.ctx.createGain();
            lfoGain.gain.setValueAtTime(140, t);
            lfo.connect(lfoGain);
            lfoGain.connect(filter.frequency);

            // Tape hiss / cathedral wind air simulation (noise buffer)
            const bufferSize = this.ctx.sampleRate * 2;
            const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const output = noiseBuffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                output[i] = (Math.random() * 2 - 1) * 0.015;
            }
            const noise = this.ctx.createBufferSource();
            noise.buffer = noiseBuffer;
            noise.loop = true;

            const noiseFilter = this.ctx.createBiquadFilter();
            noiseFilter.type = 'bandpass';
            noiseFilter.frequency.setValueAtTime(650, t);
            noiseFilter.Q.setValueAtTime(1.8, t);

            const noiseGain = this.ctx.createGain();
            noiseGain.gain.setValueAtTime(0.22, t);
            noise.connect(noiseFilter);
            noiseFilter.connect(noiseGain);
            noiseGain.connect(this.masterGain);

            // Connect oscillators to filter and master gain
            const droneGain = this.ctx.createGain();
            droneGain.gain.setValueAtTime(0.38, t);

            osc1.connect(filter);
            osc2.connect(filter);
            sub.connect(filter);
            filter.connect(droneGain);
            droneGain.connect(this.masterGain);

            // Start generators
            osc1.start(t);
            osc2.start(t);
            sub.start(t);
            lfo.start(t);
            noise.start(t);

            this.nodes = [osc1, osc2, sub, lfo, noise];

            // Smooth fade-in over 1.6s
            this.masterGain.gain.cancelScheduledValues(t);
            this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, t);
            this.masterGain.gain.linearRampToValueAtTime(0.45, t + 1.6);
        }

        stop() {
            if (!this.isPlaying || !this.ctx) return;
            const t = this.ctx.currentTime;

            // Smooth fade-out over 1.2s
            this.masterGain.gain.cancelScheduledValues(t);
            this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, t);
            this.masterGain.gain.linearRampToValueAtTime(0.0001, t + 1.2);

            setTimeout(() => {
                this.nodes.forEach(n => {
                    try { n.stop(); n.disconnect(); } catch (e) {}
                });
                this.nodes = [];
                this.isPlaying = false;
            }, 1250);
        }

        toggle() {
            if (this.isPlaying) {
                this.stop();
                return false;
            } else {
                this.start();
                return true;
            }
        }
    }

    function initAmbientSound() {
        const ambientBtn = document.getElementById('ambientToggleBtn');
        const iconOn     = document.getElementById('ambientIconOn');
        const iconOff    = document.getElementById('ambientIconOff');

        const ambientEngine = new DarkAmbientEngine();

        function updateUI(playing) {
            if (playing) {
                if (ambientBtn) {
                    ambientBtn.classList.add('playing');
                    ambientBtn.title = "Выключить фоновый эмбиент";
                }
                if (iconOn) iconOn.classList.remove('hidden');
                if (iconOff) iconOff.classList.add('hidden');
            } else {
                if (ambientBtn) {
                    ambientBtn.classList.remove('playing');
                    ambientBtn.title = "Включить фоновый эмбиент";
                }
                if (iconOn) iconOn.classList.add('hidden');
                if (iconOff) iconOff.classList.remove('hidden');
            }
        }

        if (ambientBtn) {
            ambientBtn.addEventListener('click', function () {
                const isPlaying = ambientEngine.toggle();
                updateUI(isPlaying);
            });
        }
    }

    // ═══════════════════════════════════════════════
    // 4. THEME TOGGLE (DARK / LIGHT INVERSION)
    // ═══════════════════════════════════════════════

    function initThemeToggle() {
        const themeBtn  = document.getElementById('themeToggleBtn');
        const moonIcon  = document.getElementById('themeMoonIcon');
        const sunIcon   = document.getElementById('themeSunIcon');

        function applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            try {
                localStorage.setItem('modeus_theme', theme);
            } catch (e) {}

            if (theme === 'light') {
                if (moonIcon) moonIcon.classList.add('hidden');
                if (sunIcon) sunIcon.classList.remove('hidden');
                if (themeBtn) themeBtn.title = "Переключить на ночную тему";
            } else {
                if (moonIcon) moonIcon.classList.remove('hidden');
                if (sunIcon) sunIcon.classList.add('hidden');
                if (themeBtn) themeBtn.title = "Переключить на дневную тему";
            }
        }

        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        applyTheme(currentTheme);

        if (themeBtn) {
            themeBtn.addEventListener('click', function () {
                const nowTheme = document.documentElement.getAttribute('data-theme') || 'dark';
                const nextTheme = nowTheme === 'dark' ? 'light' : 'dark';
                applyTheme(nextTheme);
            });
        }
    }

    // ═══════════════════════════════════════════════
    // 5. LENIS SMOOTH SCROLL & ANCHOR NAVIGATION
    // ═══════════════════════════════════════════════

    let lenis = null;

    function getHeaderOffset() {
        const headerEl = document.getElementById('site-header');
        const h = headerEl ? headerEl.offsetHeight : 60;
        return h + 16;
    }

    function initLenis() {
        if (typeof Lenis === 'undefined') return;

        try {
            lenis = new Lenis({
                duration: 1.15,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical',
                gestureDirection: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1.0,
                touchMultiplier: 1.2,
                syncTouch: false,
                autoRaf: false
            });

            function lenisRaf(time) {
                if (lenis) {
                    lenis.raf(time);
                }
                requestAnimationFrame(lenisRaf);
            }
            requestAnimationFrame(lenisRaf);
        } catch (e) {
            console.warn('Lenis initialization skipped:', e);
        }
    }

    function initAnchorNavigation() {
        navBtns.forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                const href = btn.getAttribute('href');
                if (!href || !href.startsWith('#')) return;

                e.preventDefault();
                const targetSec = document.querySelector(href);
                if (!targetSec) return;

                if (lenis) {
                    lenis.scrollTo(targetSec, {
                        offset: 0,
                        duration: 1.2,
                        immediate: false
                    });
                } else {
                    targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }

                history.replaceState(null, '', href);
            });
        });

        // IntersectionObserver for bottom nav active button state
        const sectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
                    const id = entry.target.id;
                    const secIndex = entry.target.getAttribute('data-index');

                    navBtns.forEach(function (btn) {
                        const href = btn.getAttribute('href');
                        if (href === '#' + id) {
                            btn.classList.add('active');
                        } else {
                            btn.classList.remove('active');
                        }
                    });

                    sections.forEach(function (sec) {
                        sec.classList.remove('active');
                    });
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: [0.2, 0.45, 0.7]
        });

        sections.forEach(function (sec) {
            sectionObserver.observe(sec);
        });
    }

    // ═══════════════════════════════════════════════
    // 6. LIQUID GLASS CARDS (MOUSE TRACKING & GLOW)
    // ═══════════════════════════════════════════════

    function initLiquidGlassCards() {
        const linkCards = document.querySelectorAll('.link-card');
        linkCards.forEach(function (card) {
            card.addEventListener('mousemove', function (e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', x + 'px');
                card.style.setProperty('--mouse-y', y + 'px');
            }, { passive: true });
        });
    }

    // ═══════════════════════════════════════════════
    // 7. VIDEO BACKGROUND CONTROLLER
    // ═══════════════════════════════════════════════

    function initVideoBg() {
        const video = document.getElementById('bgVideo');
        if (!video) return;

        video.muted = true;
        video.defaultMuted = true;
        video.loop = true;

        // Guaranteed loop across all browser engines
        video.addEventListener('ended', function () {
            video.currentTime = 0;
            video.play().catch(function () {});
        });

        const tryPlay = function () {
            const promise = video.play();
            if (promise !== undefined) {
                promise.catch(function () {
                    const playOnUserGesture = function () {
                        video.play().catch(function () {});
                        window.removeEventListener('touchstart', playOnUserGesture);
                        window.removeEventListener('click', playOnUserGesture);
                    };
                    window.addEventListener('touchstart', playOnUserGesture, { once: true, passive: true });
                    window.addEventListener('click', playOnUserGesture, { once: true, passive: true });
                });
            }
        };

        tryPlay();
    }

    // ═══════════════════════════════════════════════
    // 8. INITIALIZATION
    // ═══════════════════════════════════════════════

    function init() {
        updateAppHeight();
        window.addEventListener('resize', updateAppHeight);

        // Custom Gothic Cursor
        initCustomCursor();

        // Video Background
        initVideoBg();

        // Theme Inversion (Dark / Light)
        initThemeToggle();

        // Dark Ambient Web Audio Engine
        initAmbientSound();

        // Lenis Smooth Scroll & Navigation
        initLenis();
        initAnchorNavigation();

        // Liquid Glass Cards Mouse Light Ripple
        initLiquidGlassCards();

        // Start preloader with glowing breathing cycle -> smooth emergence
        initPreloader();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
