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

    let startAmbientAfterPreloader = null;

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
    let cursorVisible = false;

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

        window.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!cursorVisible) {
                cursorVisible = true;
                // Position immediately at exact mouse coordinates on first movement
                customCursor.style.transform = 'translate3d(' + (mouseX - 3) + 'px, ' + (mouseY - 2) + 'px, 0)';
                customCursor.classList.add('active');
            }

            if (!cursorRafPending) {
                cursorRafPending = true;
                requestAnimationFrame(renderCursor);
            }
        }, { passive: true });

        document.addEventListener('mouseenter', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            customCursor.style.transform = 'translate3d(' + (mouseX - 3) + 'px, ' + (mouseY - 2) + 'px, 0)';
            customCursor.classList.add('active');
            cursorVisible = true;
        }, { passive: true });

        document.addEventListener('mouseleave', function () {
            customCursor.classList.remove('active');
            cursorVisible = false;
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

        let entered = false;
        const autoEnterTimer = setTimeout(function () { enterSite(); }, 6500);

        function enterSite() {
            clearTimeout(autoEnterTimer);
            if (entered) return;
            entered = true;

            if (preloader) {
                preloader.classList.add('fade-out');
                setTimeout(function () {
                    preloader.style.display = 'none';
                }, 1200);
            }

            showMainContent();
        }

        if (preloader) {
            preloader.addEventListener('click', enterSite);
        }

        window.addEventListener('keydown', function (e) {
            if (!entered && (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar')) {
                enterSite();
            }
        });
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

        // Trigger ambient sound loop immediately after preloader completes & main content appears
        if (typeof startAmbientAfterPreloader === 'function') {
            startAmbientAfterPreloader();
        }
    }

    // ═══════════════════════════════════════════════
    // 3. CINEMATIC FILM GRAIN (POWERED BY GRAINY.JS)
    // ═══════════════════════════════════════════════

    function initGrainyNoise() {
        const grainEl = document.getElementById('film-grain-overlay');
        if (grainEl && typeof window.grainy === 'function') {
            window.grainy(grainEl, {
                intensity: 0.95,
                size: 160,
                opacity: 0.38,
                monochrome: true,
                animate: true,
                grainChaos: 0.45,
                grainSpeed: 16
            });
        }
    }

    // ═══════════════════════════════════════════════
    // 4. LISTEN ACCORDION DROPDOWN (MUSIC PLATFORMS)
    // ═══════════════════════════════════════════════

    function initListenDropdown() {
        const toggleBtn = document.getElementById('listenToggleBtn');
        const collapseEl = document.getElementById('musicCollapse');
        if (!toggleBtn || !collapseEl) return;

        toggleBtn.addEventListener('click', function () {
            const isOpen = collapseEl.classList.toggle('is-open');
            toggleBtn.classList.toggle('is-open', isOpen);
            toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            collapseEl.setAttribute('aria-hidden', isOpen ? 'false' : 'true');

            // Allow smooth scroll to recalculate height
            if (lenis && typeof lenis.resize === 'function') {
                setTimeout(function () {
                    lenis.resize();
                }, 350);
            }
        });
    }

    // ═══════════════════════════════════════════════
    // 4. THEME TOGGLE (DARK / LIGHT INVERSION)
    // ═══════════════════════════════════════════════

    function initThemeToggle() {
        const themeBtn  = document.getElementById('themeToggleBtn');
        const moonIcon  = document.getElementById('themeMoonIcon');
        const sunIcon   = document.getElementById('themeSunIcon');
        let transitionTimer = null;

        function applyTheme(theme, animate = false) {
            if (animate) {
                document.documentElement.classList.add('theme-transitioning');
            }
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

            if (animate) {
                clearTimeout(transitionTimer);
                transitionTimer = setTimeout(function () {
                    document.documentElement.classList.remove('theme-transitioning');
                }, 600);
            }
        }

        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        applyTheme(currentTheme, false);

        if (themeBtn) {
            themeBtn.addEventListener('click', function () {
                const nowTheme = document.documentElement.getAttribute('data-theme') || 'dark';
                const nextTheme = nowTheme === 'dark' ? 'light' : 'dark';
                applyTheme(nextTheme, true);
            });
        }
    }

    // ═══════════════════════════════════════════════
    // 4.5 AUDIO ENGINE (AMBIENT, HOVER & CLICK SFX)
    // ═══════════════════════════════════════════════

    function initAudioEngine() {
        const ambientToggleBtn = document.getElementById('ambientToggleBtn');
        const ambientOnIcon    = document.getElementById('ambientOnIcon');
        const ambientMuteIcon  = document.getElementById('ambientMuteIcon');

        // 1. Ambient Audio Loop (sounds/amb1.wav, permanent 30% volume)
        const ambientAudio = new Audio('sounds/amb1.mp3');
        ambientAudio.loop = true;
        ambientAudio.volume = 0.3;

        let isAmbientMuted = false;
        let preloaderDone = false;

        startAmbientAfterPreloader = function () {
            preloaderDone = true;
            getAudioContext();
            if (!isAmbientMuted && ambientAudio.paused) {
                ambientAudio.volume = 0;
                ambientAudio.play().then(() => {
                    // Smooth cinematic fade-in to 0.3 over 1.2s
                    const targetVolume = 0.3;
                    const steps = 24;
                    const volumeStep = targetVolume / steps;
                    let currentStep = 0;
                    const fadeTimer = setInterval(() => {
                        if (isAmbientMuted) {
                            clearInterval(fadeTimer);
                            return;
                        }
                        currentStep++;
                        ambientAudio.volume = Math.min(targetVolume, ambientAudio.volume + volumeStep);
                        if (currentStep >= steps) {
                            ambientAudio.volume = targetVolume;
                            clearInterval(fadeTimer);
                        }
                    }, 50);

                    window.removeEventListener('pointerdown', unlockAudioOnInteraction);
                    window.removeEventListener('keydown', unlockAudioOnInteraction);
                }).catch(() => {
                    // Browser autoplay policy holds playback until user interaction
                });
            }
        };

        // 2. Web Audio API for instantaneous 0ms latency SFX (navod.mp3, click.ogg)
        let audioCtx = null;
        let navBuffer = null;
        let clickBuffer = null;

        function getAudioContext() {
            if (!audioCtx) {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                if (AudioContextClass) {
                    audioCtx = new AudioContextClass();
                }
            }
            if (audioCtx && audioCtx.state === 'suspended') {
                audioCtx.resume().catch(() => {});
            }
            return audioCtx;
        }

        async function loadBuffer(url) {
            try {
                const res = await fetch(url);
                const arrayBuf = await res.arrayBuffer();
                const ctx = getAudioContext();
                if (ctx) {
                    return await ctx.decodeAudioData(arrayBuf);
                }
            } catch (e) {}
            return null;
        }

        function playSfx(buffer, volume = 0.4) {
            if (isAmbientMuted) return;
            try {
                const ctx = getAudioContext();
                if (!ctx || !buffer) return;
                const source = ctx.createBufferSource();
                source.buffer = buffer;
                const gain = ctx.createGain();
                gain.gain.value = volume;
                source.connect(gain);
                gain.connect(ctx.destination);
                source.start(0);
            } catch (e) {}
        }

        // Preload sound buffers
        loadBuffer('sounds/navod.mp3').then(buf => { navBuffer = buf; });
        loadBuffer('sounds/click.ogg').then(buf => { clickBuffer = buf; });

        // User gesture unlocks audio context & plays ambient if preloader finished
        function unlockAudioOnInteraction() {
            getAudioContext();
            if (preloaderDone && !isAmbientMuted && ambientAudio.paused) {
                ambientAudio.play().then(() => {
                    window.removeEventListener('pointerdown', unlockAudioOnInteraction);
                    window.removeEventListener('keydown', unlockAudioOnInteraction);
                }).catch(() => {});
            }
        }

        window.addEventListener('pointerdown', unlockAudioOnInteraction, { passive: true });
        window.addEventListener('touchstart', unlockAudioOnInteraction, { passive: true });
        window.addEventListener('keydown', unlockAudioOnInteraction, { passive: true });

        // 3. Ambient Mute/Unmute Toggle Button
        if (ambientToggleBtn) {
            ambientToggleBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                isAmbientMuted = !isAmbientMuted;

                if (isAmbientMuted) {
                    ambientAudio.pause();
                    if (ambientOnIcon) ambientOnIcon.classList.add('hidden');
                    if (ambientMuteIcon) ambientMuteIcon.classList.remove('hidden');
                    ambientToggleBtn.title = "Включить фоновый эмбиент";
                } else {
                    ambientAudio.play().catch(() => {});
                    if (ambientOnIcon) ambientOnIcon.classList.remove('hidden');
                    if (ambientMuteIcon) ambientMuteIcon.classList.add('hidden');
                    ambientToggleBtn.title = "Выключить фоновый эмбиент";
                }
            });
        }

        // 4. Hover Sound (navod.mp3) on all buttons, links and interactive components
        // Prevent multiple triggers when cursor moves across internal children of the same button
        const INTERACTIVE_SELECTOR = 'button, a, .control-btn, .nav-btn, .link-card, .logo-interactive-container, .preloader-enter-btn';
        let lastSoundTime = 0;

        document.addEventListener('mouseover', function (e) {
            const targetBtn = e.target.closest(INTERACTIVE_SELECTOR);
            if (!targetBtn) return;

            const fromBtn = e.relatedTarget ? e.relatedTarget.closest(INTERACTIVE_SELECTOR) : null;
            if (fromBtn === targetBtn) {
                // Moving between children of the same interactive element -> do not replay
                return;
            }

            const now = performance.now();
            if (now - lastSoundTime < 35) return; // Debounce rapid consecutive border hits
            lastSoundTime = now;

            if (navBuffer) {
                playSfx(navBuffer, 0.35);
            }
        }, { passive: true });

        // 5. Global Click Sound (click.ogg) on every mouse click
        document.addEventListener('pointerdown', function () {
            if (clickBuffer) {
                playSfx(clickBuffer, 0.45);
            }
        }, { passive: true });
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
    // 6. LIQUID GLASS CARDS (PHYSICAL 3D TILT & SPECULAR SHEEN)
    // ═══════════════════════════════════════════════

    function initLiquidGlassCards() {
        const linkCards = document.querySelectorAll('.link-card');
        if (!linkCards.length) return;

        linkCards.forEach(function (card) {
            let rafId = null;

            card.addEventListener('mousemove', function (e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', x + 'px');
                card.style.setProperty('--mouse-y', y + 'px');

                const isMouse = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
                if (isMouse) {
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -5.0;
                    const rotateY = ((x - centerX) / centerX) * 5.0;

                    if (rafId) cancelAnimationFrame(rafId);
                    rafId = requestAnimationFrame(function () {
                        card.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(0, -4px, 12px)`;
                    });
                }
            }, { passive: true });

            card.addEventListener('mouseleave', function () {
                if (rafId) cancelAnimationFrame(rafId);
                card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)';
            });
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
    // 8. EASTER EGG (TRIPLE CLICK ON LOGO -> пасхалко.png)
    // ═══════════════════════════════════════════════

    function initEasterEgg() {
        const logoContainer = document.getElementById('logoContainer');
        const easterEggImg  = document.getElementById('easterEggImg');
        const artistLogo    = document.getElementById('artistLogo');
        if (!logoContainer || !easterEggImg) return;

        let clickCount = 0;
        let clickTimer = null;

        logoContainer.addEventListener('click', (e) => {
            if (e.target === easterEggImg) {
                easterEggImg.classList.remove('is-visible');
                return;
            }

            clickCount++;
            clearTimeout(clickTimer);

            if (artistLogo) {
                artistLogo.style.transform = 'translateZ(0) scale(0.97)';
                setTimeout(() => {
                    artistLogo.style.transform = '';
                }, 150);
            }

            if (clickCount >= 3) {
                easterEggImg.classList.toggle('is-visible');
                clickCount = 0;
            } else {
                clickTimer = setTimeout(() => {
                    clickCount = 0;
                }, 1200);
            }
        });

        easterEggImg.addEventListener('click', (e) => {
            e.stopPropagation();
            easterEggImg.classList.remove('is-visible');
        });
    }

    // ═══════════════════════════════════════════════
    // 9. DECRYPT TEXT EFFECT (BIO CIPHER REVEAL)
    // ═══════════════════════════════════════════════

    function initBioDecryptEffect() {
        const aboutTextEl = document.getElementById('aboutText');
        if (!aboutTextEl) return;

        const originalText = 'здарова, меня зовут макс морозов, более известен как модеус. родился я 11 октября 2003 года. начал заниматься музыкой под этим никнеймом в 2021 году. изначально мой творческий путь начинался с амплуа дизайнера под ником angelicheavens. большую часть своего творческого пути провел в объединении "threehearts", ливнул 4 июня 2025 года.';

        // Proportional character sets matching word metrics to prevent line wrapping jumps
        const UPPER_GLYPHS = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩABCDEFGHJKLMNOPQRSTUVWXYZ';
        const LOWER_GLYPHS = 'абвгдежзиклмнопрстуфхцчшщabcdefghijkmnopqrstuvwxyz0123456789';
        const DIGIT_GLYPHS = '0123456789#%*+-';

        function getScrambleChar(targetChar) {
            if (targetChar === ' ') return ' ';
            if (/[.,—()«»\-:"']/.test(targetChar)) return targetChar;
            if (/[А-ЯA-Z]/.test(targetChar)) {
                return UPPER_GLYPHS[Math.floor(Math.random() * UPPER_GLYPHS.length)];
            }
            if (/[0-9]/.test(targetChar)) {
                return DIGIT_GLYPHS[Math.floor(Math.random() * DIGIT_GLYPHS.length)];
            }
            return LOWER_GLYPHS[Math.floor(Math.random() * LOWER_GLYPHS.length)];
        }

        let isRunning = false;
        let animFrame = null;
        let hasRunOnce = false;

        function runDecrypt() {
            if (isRunning) {
                cancelAnimationFrame(animFrame);
            }
            isRunning = true;

            // Lock exact height of the text block so nothing can shift or jump
            const currentHeight = aboutTextEl.offsetHeight;
            if (currentHeight > 0) {
                aboutTextEl.style.minHeight = currentHeight + 'px';
            }

            const totalChars = originalText.length;
            let iteration = 0;
            const speed = 2.2;

            function update() {
                let output = '';
                let completeCount = 0;

                for (let i = 0; i < totalChars; i++) {
                    const char = originalText[i];
                    if (char === ' ') {
                        output += ' ';
                        completeCount++;
                        continue;
                    }

                    const revealThreshold = (i * 0.42) + 6;
                    const scrambleStart = i * 0.42;

                    if (iteration >= revealThreshold) {
                        output += char;
                        completeCount++;
                    } else if (iteration >= scrambleStart) {
                        output += getScrambleChar(char);
                    } else {
                        output += getScrambleChar(char);
                    }
                }

                aboutTextEl.textContent = output;

                if (completeCount >= totalChars) {
                    aboutTextEl.textContent = originalText;
                    isRunning = false;
                } else {
                    iteration += speed;
                    animFrame = requestAnimationFrame(update);
                }
            }

            animFrame = requestAnimationFrame(update);
        }

        function triggerOnce() {
            if (hasRunOnce) return;
            hasRunOnce = true;
            runDecrypt();
        }

        // 1. Trigger when Section 2 (Bio) comes into view (one time only)
        const bioSection = document.getElementById('section-about');
        if (bioSection && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasRunOnce) {
                        triggerOnce();
                        observer.disconnect();
                    }
                });
            }, { threshold: 0.25 });
            observer.observe(bioSection);
        }

        // 2. Trigger on Bio navigation button click (one time only)
        const bioNavBtn = document.querySelector('.nav-btn[data-target="1"]');
        if (bioNavBtn) {
            bioNavBtn.addEventListener('click', () => {
                if (!hasRunOnce) {
                    setTimeout(triggerOnce, 250);
                }
            });
        }
    }

    // ═══════════════════════════════════════════════
    // 10. INITIALIZATION
    // ═══════════════════════════════════════════════

    function init() {
        updateAppHeight();
        window.addEventListener('resize', updateAppHeight);

        // Film Grain via Grainy.js
        initGrainyNoise();

        // Custom Gothic Cursor
        initCustomCursor();

        // Video Background
        initVideoBg();

        // Theme Inversion (Dark / Light)
        initThemeToggle();

        // Audio Engine (Ambient loop 30%, Hover navod.mp3, Click click.ogg)
        initAudioEngine();

        // Listen Accordion Dropdown
        initListenDropdown();

        // Easter Egg (Triple click on logo -> пасхалко.png)
        initEasterEgg();

        // Bio Decrypt Text Effect
        initBioDecryptEffect();

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
