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

        const originalText = 'здарова, меня зовут макс морозов, более извествен как модеус. родился я 11 октября 2003 года. начал заниматься музыкой под этим никнеймом в 2021 году. изначально мой творческий путь начинался с амплуа дизайнера под ником angelicheavens. большую часть своего творческого пути провел в объединении "threehearts", ливнул 4 июня 2025 года.';

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
