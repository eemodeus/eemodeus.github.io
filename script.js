(function () {
    'use strict';

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

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
    let isPreloaderActive = true;
    let triggerAboutBioDecrypt = null;
    let currentActiveSectionId = 'section-hi';
    let lastWindowWidth = window.innerWidth;

    function updateAppHeight() {
        const curWidth = window.innerWidth;
        if (Math.abs(curWidth - lastWindowWidth) > 50 || !document.documentElement.style.getPropertyValue('--app-height')) {
            lastWindowWidth = curWidth;
            const vh = window.innerHeight;
            document.documentElement.style.setProperty('--app-height', vh + 'px');
        }
    }

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

            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
            }

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
            preloader.addEventListener('touchstart', enterSite, { passive: true });
        }

        window.addEventListener('keydown', function (e) {
            if (!entered && (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar')) {
                enterSite();
            }
        });
    }

    function showMainContent() {
        isPreloaderActive = false;

        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        }

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

        currentActiveSectionId = 'section-hi';
        navBtns.forEach(function (btn) {
            if (btn.getAttribute('href') === '#section-hi') {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        sections.forEach(function (sec) {
            if (sec.id === 'section-hi') {
                sec.classList.add('active');
            } else {
                sec.classList.remove('active');
            }
        });

        if (window.location.hash && window.location.hash !== '#section-hi') {
            history.replaceState(null, '', window.location.pathname + window.location.search);
        }

        if (typeof startAmbientAfterPreloader === 'function') {
            startAmbientAfterPreloader();
        }
    }

    function initGrainyNoise() {
        const grainEl = document.getElementById('film-grain-overlay');
        if (grainEl && typeof window.grainy === 'function') {
            const isTouch = window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches;
            window.grainy(grainEl, {
                intensity: 0.95,
                size: 160,
                opacity: 0.38,
                monochrome: true,
                animate: !isTouch,
                grainChaos: 0.45,
                grainSpeed: 16
            });
        }
    }

    function initListenDropdown() {
        const toggleBtn = document.getElementById('listenToggleBtn');
        const collapseEl = document.getElementById('musicCollapse');
        const badgeEl = document.getElementById('listenBadge');
        if (!toggleBtn || !collapseEl) return;

        toggleBtn.addEventListener('click', function () {
            const isOpen = collapseEl.classList.toggle('is-open');
            toggleBtn.classList.toggle('is-open', isOpen);
            toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            collapseEl.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
            if (badgeEl) {
                badgeEl.textContent = isOpen ? '[-] CLOSE' : '[+] EXPAND';
            }

            if (lenis && typeof lenis.resize === 'function') {
                setTimeout(function () {
                    lenis.resize();
                }, 350);
            }
        });
    }

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
                if (moonIcon) moonIcon.classList.remove('hidden');
                if (sunIcon) sunIcon.classList.add('hidden');
                if (themeBtn) themeBtn.title = "Переключить на ночную тему";
            } else {
                if (moonIcon) moonIcon.classList.add('hidden');
                if (sunIcon) sunIcon.classList.remove('hidden');
                if (themeBtn) themeBtn.title = "Переключить на дневную тему";
            }
            const metaTheme = document.querySelector('meta[name="theme-color"]');
            if (metaTheme) {
                metaTheme.setAttribute('content', theme === 'light' ? '#f5f5f8' : '#030305');
            }

            if (animate) {
                clearTimeout(transitionTimer);
                transitionTimer = setTimeout(function () {
                    document.documentElement.classList.remove('theme-transitioning');
                }, 600);
            }
        }

        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        applyTheme(currentTheme, false);

        if (themeBtn) {
            themeBtn.addEventListener('click', function () {
                const nowTheme = document.documentElement.getAttribute('data-theme') || 'dark';
                const nextTheme = nowTheme === 'dark' ? 'light' : 'dark';
                applyTheme(nextTheme, true);
            });
        }
    }

    function initAudioEngine() {
        const ambientToggleBtn = document.getElementById('ambientToggleBtn');
        const ambientOnIcon    = document.getElementById('ambientOnIcon');
        const ambientMuteIcon  = document.getElementById('ambientMuteIcon');

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

                });
            }
        };

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

        loadBuffer('sounds/navod.mp3').then(buf => { navBuffer = buf; });
        loadBuffer('sounds/click.ogg').then(buf => { clickBuffer = buf; });

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

        const INTERACTIVE_SELECTOR = 'button, a, .control-btn, .nav-btn, .link-card, .link-item, .logo-interactive-container, .preloader-enter-btn';
        let lastSoundTime = 0;

        document.addEventListener('mouseover', function (e) {
            if (window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
            const targetBtn = e.target.closest(INTERACTIVE_SELECTOR);
            if (!targetBtn) return;

            const fromBtn = e.relatedTarget ? e.relatedTarget.closest(INTERACTIVE_SELECTOR) : null;
            if (fromBtn === targetBtn) {

                return;
            }

            const now = performance.now();
            if (now - lastSoundTime < 35) return;
            lastSoundTime = now;

            if (navBuffer) {
                playSfx(navBuffer, 0.35);
            }
        }, { passive: true });

        document.addEventListener('pointerdown', function () {
            if (clickBuffer) {
                playSfx(clickBuffer, 0.45);
            }
        }, { passive: true });
    }

    let lenis = null;

    function getHeaderOffset() {
        const headerEl = document.getElementById('site-header');
        const h = headerEl ? headerEl.offsetHeight : 60;
        return h + 16;
    }

    function initLenis() {
        if (typeof Lenis === 'undefined') return;
        if (window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
            return;
        }

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
        let isUserScrolling = false;
        let scrollStopTimer = null;
        let pendingBioDecrypt = false;

        window.addEventListener('scroll', function () {
            isUserScrolling = true;
            clearTimeout(scrollStopTimer);
            scrollStopTimer = setTimeout(function () {
                isUserScrolling = false;
                if (pendingBioDecrypt) {
                    pendingBioDecrypt = false;
                    if (typeof triggerAboutBioDecrypt === 'function') {
                        triggerAboutBioDecrypt();
                    }
                }
            }, 140);
        }, { passive: true });

        navBtns.forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                const href = btn.getAttribute('href');
                if (!href || !href.startsWith('#')) return;

                e.preventDefault();
                const targetSec = document.querySelector(href);
                if (!targetSec) return;

                pendingBioDecrypt = false;
                if (href !== '#section-about' && typeof completeBioTextImmediately === 'function') {
                    completeBioTextImmediately();
                }
                if (href === '#section-about' && typeof triggerAboutBioDecrypt === 'function') {
                    setTimeout(function () {
                        triggerAboutBioDecrypt(true);
                    }, 220);
                }

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

                    if (currentActiveSectionId !== id) {
                        if (currentActiveSectionId === 'section-about' && typeof completeBioTextImmediately === 'function') {
                            completeBioTextImmediately();
                        }
                        currentActiveSectionId = id;
                        if (!isPreloaderActive && id === 'section-about' && typeof triggerAboutBioDecrypt === 'function') {
                            if (isUserScrolling) {
                                pendingBioDecrypt = true;
                            } else {
                                triggerAboutBioDecrypt();
                            }
                        } else {
                            pendingBioDecrypt = false;
                        }
                    }
                }
            });
        }, {
            threshold: [0.2, 0.45, 0.7]
        });

        sections.forEach(function (sec) {
            sectionObserver.observe(sec);
        });
    }

    function initLiquidGlassCards() {
        const linkCards = document.querySelectorAll('.link-card');
        if (!linkCards.length) return;

        linkCards.forEach(function (card) {
            let rafId = null;

            card.addEventListener('mousemove', function (e) {
                const isMouse = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
                if (!isMouse) return;

                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', x + 'px');
                card.style.setProperty('--mouse-y', y + 'px');

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5.0;
                const rotateY = ((x - centerX) / centerX) * 5.0;

                if (rafId) cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(function () {
                    card.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(0, -4px, 12px)`;
                });
            }, { passive: true });

            card.addEventListener('mouseleave', function () {
                if (rafId) cancelAnimationFrame(rafId);
                card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)';
            });
        });
    }

    function initVideoBg() {
        const video = document.getElementById('bgVideo');
        if (!video) return;

        video.muted = true;
        video.defaultMuted = true;
        video.loop = true;

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

    const HACKER_GLYPHS = '01#%&*+=-_~/?\\|<>[]{}XYZΔΩ';
    let bioTypewriterTimer = null;
    let isBioTyping = false;
    let bioHasPlayed = false;
    let bioRawText = '';

    function completeBioTextImmediately() {
        if (!isBioTyping) return;
        if (bioTypewriterTimer) {
            clearInterval(bioTypewriterTimer);
            bioTypewriterTimer = null;
        }
        isBioTyping = false;
        const aboutTextEl = document.getElementById('aboutText');
        if (aboutTextEl && bioRawText) {
            aboutTextEl.innerHTML = bioRawText + '<span class="bio-cursor" style="opacity: 0.35;"></span>';
        }
    }

    triggerAboutBioDecrypt = function (force) {
        if (bioHasPlayed) return;
        if (isPreloaderActive && !force) return;
        const aboutTextEl = document.getElementById('aboutText');
        if (!aboutTextEl) return;

        bioHasPlayed = true;

        if (!bioRawText) {
            bioRawText = aboutTextEl.textContent.trim().replace(/\s+/g, ' ');
        }
        if (!bioRawText) return;

        if (bioTypewriterTimer) {
            clearInterval(bioTypewriterTimer);
            bioTypewriterTimer = null;
        }

        if (!aboutTextEl.style.minHeight) {
            const currentH = Math.ceil(aboutTextEl.getBoundingClientRect().height);
            if (currentH > 0) {
                aboutTextEl.style.minHeight = currentH + 'px';
            }
        }

        const total = bioRawText.length;
        let pos = 0;
        isBioTyping = true;

        bioTypewriterTimer = setInterval(function () {
            const step = (pos > 30 && Math.random() > 0.45) ? 2 : 1;
            pos = Math.min(total, pos + step);

            const currentText = bioRawText.slice(0, pos);
            let glyphHtml = '';
            if (pos < total) {
                const randomGlyph = HACKER_GLYPHS[Math.floor(Math.random() * HACKER_GLYPHS.length)];
                glyphHtml = '<span class="bio-glyph">' + randomGlyph + '</span>';
            }

            aboutTextEl.innerHTML = currentText + glyphHtml + '<span class="bio-cursor"></span>';

            if (pos >= total) {
                clearInterval(bioTypewriterTimer);
                bioTypewriterTimer = null;
                isBioTyping = false;

                setTimeout(function () {
                    const cur = aboutTextEl.querySelector('.bio-cursor');
                    if (cur) cur.style.opacity = '0.35';
                }, 2500);
            }
        }, 15);
    };

    function initBioDecryptEffect() {
        const aboutTextEl = document.getElementById('aboutText');
        if (aboutTextEl) {
            bioRawText = aboutTextEl.textContent.trim().replace(/\s+/g, ' ');
            const currentH = Math.ceil(aboutTextEl.getBoundingClientRect().height);
            if (currentH > 0) {
                aboutTextEl.style.minHeight = currentH + 'px';
            }
        }

        let lastBioWidth = window.innerWidth;
        let resizeTimer = null;
        window.addEventListener('resize', function () {
            if (Math.abs(window.innerWidth - lastBioWidth) < 20) return;
            lastBioWidth = window.innerWidth;
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                if (!isBioTyping && aboutTextEl) {
                    aboutTextEl.style.minHeight = '';
                    const h = Math.ceil(aboutTextEl.getBoundingClientRect().height);
                    if (h > 0) aboutTextEl.style.minHeight = h + 'px';
                }
            }, 150);
        });

        window.addEventListener('orientationchange', function () {
            setTimeout(function () {
                if (!isBioTyping && aboutTextEl) {
                    aboutTextEl.style.minHeight = '';
                    const h = Math.ceil(aboutTextEl.getBoundingClientRect().height);
                    if (h > 0) aboutTextEl.style.minHeight = h + 'px';
                }
            }, 200);
        });
    }

    function init() {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        updateAppHeight();
        window.addEventListener('resize', updateAppHeight);

        initGrainyNoise();

        initCustomCursor();

        initVideoBg();

        initThemeToggle();

        initAudioEngine();

        initListenDropdown();

        initEasterEgg();

        initBioDecryptEffect();

        initLenis();
        initAnchorNavigation();

        initLiquidGlassCards();

        initPreloader();
    }

    window.addEventListener('load', function () {
        if (isPreloaderActive) {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
