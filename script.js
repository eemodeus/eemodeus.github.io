/* ═══════════════════════════════════════════════════
   МОДЕУС — MAIN SCRIPT (MONOCHROME & SILVER EDITION)
   Breathing ASCII Preloader + CS2 Crosshair + Radial Noise Logo
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
    const aboutTitle       = document.getElementById('aboutTitle');
    const aboutText        = document.getElementById('aboutText');

    const ABOUT_BIO_TEXT   = "Морозов Максим Алексеевич (родился 11 октября 2003 года в Томске) — российский исполнитель и дизайнер, бывший участник творческого объединения threehearts.";
    const ABOUT_TITLE_TEXT = "BIO";

    let currentSection = 0;
    let isScrolling    = false;
    let touchStartX    = 0;
    let touchStartY    = 0;
    let touchTargetEl  = null;
    let isSeeking      = false;
    let isDraggingVol  = false;

    function updateAppHeight() {
        const vh = window.innerHeight;
        document.documentElement.style.setProperty('--app-height', vh + 'px');
    }

    // ═══════════════════════════════════════════════
    // 1. CS2 CROSSHAIR CURSOR (ULTRA-SMOOTH rAF & GPU)
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
        // Don't initialize custom cursor on touch devices
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
            }, 100);
        });
    }

    // ═══════════════════════════════════════════════
    // 2. PRELOADER (BREATHING ASCII GLOW)
    // ═══════════════════════════════════════════════

    function initPreloader() {
        if (asciiArtEl) {
            asciiArtEl.textContent = FLEUR_ASCII.join('\n');
        }

        // Smooth breathing glow cycle, then fade out and show content
        setTimeout(function () {
            if (preloader) preloader.classList.add('fade-out');

            setTimeout(function () {
                if (preloader) preloader.style.display = 'none';
                showMainContent();
            }, 800);
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
        } else if (bottomNav) {
            bottomNav.classList.remove('hidden');
            bottomNav.classList.add('visible');
        }
    }

    // ═══════════════════════════════════════════════
    // 4. LENIS SMOOTH SCROLL & ANCHOR NAVIGATION
    // ═══════════════════════════════════════════════

    let lenis = null;

    function getHeaderOffset() {
        const headerEl = document.getElementById('site-header');
        const h = headerEl ? headerEl.offsetHeight : 64;
        return h + 12; // breathing room under fixed header
    }

    function initLenis() {
        if (typeof Lenis === 'undefined') return;

        try {
            lenis = new Lenis({
                duration: 1.15,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential velvet glide
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
        } catch (err) {
            console.warn('Lenis init error:', err);
            lenis = null;
        }
    }

    function scrollToTarget(targetSelector, idx) {
        // Navigation is fixed at the bottom, so section scrolls to top (y = 0)
        const offset = 0;

        if (lenis) {
            lenis.scrollTo(targetSelector, {
                offset: offset,
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
        } else {
            const targetEl = document.querySelector(targetSelector);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        }

        if (typeof idx === 'number' && !isNaN(idx)) {
            updateActiveSection(idx);
        }
    }

    function updateActiveSection(index) {
        if (index < 0 || index >= sections.length || index === currentSection) return;
        currentSection = index;

        sections.forEach(function (sec, idx) {
            sec.classList.toggle('active', idx === currentSection);
        });

        navBtns.forEach(function (btn, idx) {
            btn.classList.toggle('active', idx === currentSection);
        });

        if (currentSection === 1) {
            triggerAboutBioDecrypt();
        }
    }

    function goToSection(index) {
        if (index < 0 || index >= sections.length) return;
        const target = sections[index];
        if (target) {
            scrollToTarget('#' + target.id, index);
        }
    }

    function initSmoothScroll() {
        // Initialize Lenis Smooth Scroll engine
        initLenis();

        // Track visible section with IntersectionObserver
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        const idx = parseInt(entry.target.dataset.index, 10);
                        if (!isNaN(idx)) {
                            updateActiveSection(idx);
                        }
                    }
                });
            }, {
                root: null,
                rootMargin: '-25% 0px -25% 0px',
                threshold: 0.15
            });

            sections.forEach(function (sec) {
                observer.observe(sec);
            });
        }

        // Smooth scroll on clicking anchor links in navigation
        navBtns.forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                const href = btn.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const idx = parseInt(btn.dataset.target, 10);
                    scrollToTarget(href, idx);

                    if (history.pushState) {
                        history.pushState(null, null, href);
                    }
                }
            });
        });

        // Check if page was opened with an anchor hash in URL
        if (window.location.hash) {
            const hash = window.location.hash;
            setTimeout(function () {
                scrollToTarget(hash);
            }, 700);
        }
    }

    function onKeyDown(e) {
        switch (e.key) {
            case 'Home':
                e.preventDefault();
                goToSection(0);
                break;
            case 'End':
                e.preventDefault();
                goToSection(sections.length - 1);
                break;
        }
    }

    // ═══════════════════════════════════════════════
    // 5. DECRYPT TEXT EFFECT (ABOUT ME BIO - ANCHORED SLOTS)
    // ═══════════════════════════════════════════════

    const DECRYPT_GLYPHS = '01#%&*+=-_~/?\\|<>[]{}XYZ⚜†§µ';
    let cancelBioDecrypt = null;
    let bioSlotsInitialized = false;
    let bioSlotData = [];

    function setupBioSlots() {
        if (!aboutText) return;

        // Wrap each word in .d-word to strictly prevent breaking words in half
        const words = ABOUT_BIO_TEXT.split(' ');
        aboutText.innerHTML = words.map(function (word) {
            const slots = word.split('').map(function (ch) {
                return '<span class="d-slot d-revealed">' + ch + '</span>';
            }).join('');
            return '<span class="d-word">' + slots + '</span>';
        }).join('<span class="d-slot d-space"> </span>');

        // Measure widths safely: only apply min-width if positive, never 0px
        const spans = aboutText.querySelectorAll('.d-slot');
        bioSlotData = [];
        let allValid = true;

        spans.forEach(function (span) {
            const ch = span.textContent;
            const isSpace = span.classList.contains('d-space');
            const rect = span.getBoundingClientRect();
            const w = Math.ceil(rect.width * 100) / 100;
            if (w > 0) {
                span.style.minWidth = w + 'px';
            } else {
                allValid = false;
            }
            span.dataset.char = ch;

            bioSlotData.push({
                el: span,
                char: ch,
                isSpace: isSpace
            });
        });

        bioSlotsInitialized = (allValid && spans.length > 0);
    }

    function triggerAboutBioDecrypt() {
        if (!aboutText) return;
        if (cancelBioDecrypt) {
            cancelBioDecrypt();
            cancelBioDecrypt = null;
        }

        if (!bioSlotsInitialized || bioSlotData.length === 0) {
            setupBioSlots();
        }

        const totalSlots = bioSlotData.length;
        const duration = 1600; // ms
        const delay = 320;    // ms
        const startTime = performance.now() + delay;
        let animId = null;

        // Set all non-space characters to glitched initially
        bioSlotData.forEach(function (item) {
            if (!item.isSpace) {
                item.el.textContent = DECRYPT_GLYPHS[Math.floor(Math.random() * DECRYPT_GLYPHS.length)];
                item.el.className = 'd-slot d-glitch';
            }
        });

        function update(now) {
            if (now < startTime) {
                bioSlotData.forEach(function (item) {
                    if (!item.isSpace) {
                        item.el.textContent = DECRYPT_GLYPHS[Math.floor(Math.random() * DECRYPT_GLYPHS.length)];
                    }
                });
                animId = requestAnimationFrame(update);
                return;
            }

            const elapsed = now - startTime;
            const progress = Math.min(Math.max(elapsed / duration, 0), 1);
            // Ease out quad
            const eased = 1 - Math.pow(1 - progress, 2);
            const revealedCount = Math.floor(eased * totalSlots);

            for (let i = 0; i < totalSlots; i++) {
                const item = bioSlotData[i];
                if (item.isSpace) continue;

                if (i < revealedCount) {
                    if (item.el.textContent !== item.char) {
                        item.el.textContent = item.char;
                        item.el.className = 'd-slot d-revealed';
                    }
                } else {
                    item.el.textContent = DECRYPT_GLYPHS[Math.floor(Math.random() * DECRYPT_GLYPHS.length)];
                    item.el.className = 'd-slot d-glitch';
                }
            }

            if (progress < 1) {
                animId = requestAnimationFrame(update);
            } else {
                bioSlotData.forEach(function (item) {
                    item.el.textContent = item.char;
                    item.el.className = 'd-slot d-revealed';
                });
                animId = null;
            }
        }

        animId = requestAnimationFrame(update);
        cancelBioDecrypt = function () {
            if (animId) cancelAnimationFrame(animId);
            bioSlotData.forEach(function (item) {
                item.el.textContent = item.char;
                item.el.className = 'd-slot d-revealed';
            });
        };
    }

    // ═══════════════════════════════════════════════
    // 6. LIQUID GLASS MOUSE TRACKING
    // ═══════════════════════════════════════════════

    function initLiquidGlassCards() {
        const cards = document.querySelectorAll('.link-card');
        cards.forEach(function (card) {
            card.addEventListener('mousemove', function (e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', x + 'px');
                card.style.setProperty('--mouse-y', y + 'px');
            });
        });
    }

    // ═══════════════════════════════════════════════
    // 7. GOTHIC SILVER AUDIO PLAYER ENGINE
    // ═══════════════════════════════════════════════

    const TRACKS = [
        {
            title: "requiem",
            feat: "takecare04",
            fullHeaderTitle: "requiem (takecare04)",
            subtitle: "М О Д Е У С",
            url: "https://soundcloud.com/emodeus/requiem",
            date: "02.08.2026",
            badge: "SOUNDCLOUD",
            durationStr: "1:47",
            durationMs: 107248,
            artwork: "https://i1.sndcdn.com/artworks-86BNqkZ0BhxCHXBG-MC9KfQ-large.jpg"
        },
        {
            title: "паршивый номер",
            feat: "takuori, daybytheday",
            fullHeaderTitle: "паршивый номер",
            subtitle: "T A K U O R I",
            url: "https://soundcloud.com/emodeus/parshiviynomer",
            date: "18.06.2026",
            badge: "SOUNDCLOUD",
            durationStr: "1:38",
            durationMs: 98123,
            artwork: "https://i1.sndcdn.com/artworks-7BvsFStUyd5vjzSs-yZSWEQ-large.png"
        },
        {
            title: "lips",
            feat: "forzen, foreless",
            fullHeaderTitle: "lips (forzen, foreless)",
            subtitle: "F O R Z E N",
            url: "https://soundcloud.com/emodeus/lips-forzen-foreless",
            date: "27.07.2025",
            badge: "SOUNDCLOUD",
            durationStr: "1:36",
            durationMs: 96046,
            artwork: "https://i1.sndcdn.com/artworks-JGdbljXcdit1Lk9x-atOlEQ-large.png"
        },
        {
            title: "armour",
            feat: "foreless",
            fullHeaderTitle: "armour (foreless)",
            subtitle: "F O R E L E S S",
            url: "https://soundcloud.com/emodeus/armour-foreless",
            date: "02.07.2025",
            badge: "SOUNDCLOUD",
            durationStr: "2:16",
            durationMs: 136661,
            artwork: "https://i1.sndcdn.com/artworks-tX9vUTyfpbs0tIis-xkCpzQ-large.png"
        }
    ];

    let scWidget = null;
    let currentTrackIdx = 0;
    let isAudioPlaying = false;
    isSeeking = false;
    let currentVolume = 80;
    try {
        const savedVol = localStorage.getItem('modeus_player_volume');
        if (savedVol !== null) {
            currentVolume = parseInt(savedVol, 10);
        }
    } catch (e) {}
    let isMuted = false;
    let prevVolume = currentVolume || 80;
    let currentDurationMs = 107248;
    let trackJustLoaded = false;
    let isBaroqueMode = false;
    let customAudioEl = null;

    // DOM Elements
    const playerWrapper       = document.getElementById('playerWrapper');
    const playerCoverImg      = document.getElementById('playerCoverImg');
    const playerTrackDate     = document.getElementById('playerTrackDate');
    const playerTrackTitle    = document.getElementById('playerTrackTitle');
    const playerArtistSubtitle= document.getElementById('playerArtistSubtitle');
    const playerBadge         = document.getElementById('playerBadge');
    const playerEq            = document.getElementById('playerEq');
    const eqBars              = [
        document.getElementById('eqBar0'),
        document.getElementById('eqBar1'),
        document.getElementById('eqBar2'),
        document.getElementById('eqBar3')
    ];
    const playerCurrentTime   = document.getElementById('playerCurrentTime');
    const playerTotalTime     = document.getElementById('playerTotalTime');
    const playerProgressWrap  = document.getElementById('playerProgressContainer');
    const playerProgressFill  = document.getElementById('playerProgressFill');
    const playerProgressPin   = document.getElementById('playerProgressPin');
    const playerPlayBtn       = document.getElementById('playerPlayBtn');
    const playIcon            = document.getElementById('playIcon');
    const pauseIcon           = document.getElementById('pauseIcon');
    const playerPrevBtn       = document.getElementById('playerPrevBtn');
    const playerNextBtn       = document.getElementById('playerNextBtn');
    const playerVolToggle     = document.getElementById('playerVolToggle');
    const volHighIcon         = document.getElementById('volHighIcon');
    const volMuteIcon         = document.getElementById('volMuteIcon');
    const playerVolSliderWrap = document.getElementById('playerVolSliderWrap');
    const playerVolFill       = document.getElementById('playerVolFill');
    const playerVolThumb      = document.getElementById('playerVolThumb');
    const playerTracklistEl   = document.getElementById('playerTracklist');

    const scIframe            = document.getElementById('sc-widget-iframe');

    function applyVolume() {
        const targetVol = isMuted ? 0 : currentVolume;
        if (scWidget) {
            try {
                scWidget.setVolume(targetVol);
            } catch (e) {}
        }
        if (customAudioEl) {
            customAudioEl.volume = targetVol / 100;
        }
    }

    function formatTime(ms) {
        if (!ms || isNaN(ms) || ms < 0) return "0:00";
        const totalSec = Math.floor(ms / 1000);
        const m = Math.floor(totalSec / 60);
        const s = totalSec % 60;
        return m + ":" + (s < 10 ? "0" : "") + s;
    }

    function updatePlayStateUI(playing) {
        if (playIcon) playIcon.classList.toggle('hidden', playing);
        if (pauseIcon) pauseIcon.classList.toggle('hidden', !playing);
        if (playerEq) playerEq.classList.toggle('is-playing', playing);
        if (!playing && eqBars) {
            eqBars.forEach(b => { if (b) b.style.transform = 'rotate(45deg) scale(1)'; });
        }
    }

    // Mini EQ animation pulse when audio is playing
    let eqAnimId = null;
    function animateEq() {
        if (isAudioPlaying && eqBars[0]) {
            const t = Date.now() * 0.006;
            eqBars.forEach((bar, i) => {
                if (bar) {
                    const s = 0.85 + Math.abs(Math.sin(t + i * 1.3)) * 0.95;
                    bar.style.transform = `rotate(45deg) scale(${s.toFixed(2)})`;
                }
            });
        }
        eqAnimId = requestAnimationFrame(animateEq);
    }

    function updateProgressUI(currentMs, fraction) {
        const pct = Math.max(0, Math.min(fraction * 100, 100));
        if (playerProgressFill) {
            playerProgressFill.style.width = pct + '%';
        }
        if (playerProgressPin) {
            playerProgressPin.style.left = pct + '%';
        }
        if (playerCurrentTime) {
            playerCurrentTime.textContent = formatTime(currentMs);
        }
    }

    function updateVolumeUI() {
        const effectiveVol = isMuted ? 0 : currentVolume;
        if (playerVolFill) playerVolFill.style.width = effectiveVol + '%';
        if (playerVolThumb) playerVolThumb.style.left = effectiveVol + '%';

        if (volHighIcon && volMuteIcon) {
            if (isMuted || effectiveVol === 0) {
                volHighIcon.classList.add('hidden');
                volMuteIcon.classList.remove('hidden');
            } else {
                volHighIcon.classList.remove('hidden');
                volMuteIcon.classList.add('hidden');
            }
        }
        applyVolume();
    }

    function updateTrackUI(track) {
        if (playerCoverImg) {
            playerCoverImg.src = track.artwork;
            playerCoverImg.alt = track.title;
        }
        if (playerTrackTitle) {
            playerTrackTitle.textContent = track.fullHeaderTitle || track.title;
        }
        if (playerArtistSubtitle) {
            playerArtistSubtitle.textContent = track.subtitle || (track.feat ? track.feat.toUpperCase() : "М О Д Е У С");
        }
        if (playerTrackDate) {
            playerTrackDate.textContent = track.date;
        }
        if (playerBadge) {
            playerBadge.textContent = track.badge || "SOUNDCLOUD";
        }
        if (playerTotalTime) {
            playerTotalTime.textContent = track.durationStr;
        }
        if (playerTracklistEl) {
            const cards = playerTracklistEl.querySelectorAll('.track-card');
            cards.forEach((card, idx) => {
                const isActive = idx === currentTrackIdx;
                card.classList.toggle('active', isActive);
                const rect1 = card.querySelector('rect:nth-of-type(1)');
                const rect2 = card.querySelector('rect:nth-of-type(2)');
                if (rect1) {
                    rect1.setAttribute('stroke', isActive ? 'url(#silverGrad)' : 'url(#silverDimGrad)');
                    rect1.setAttribute('stroke-width', isActive ? '1.35' : '0.85');
                }
                if (rect2) {
                    rect2.setAttribute('stroke', isActive ? 'url(#silverGrad)' : 'url(#silverDimGrad)');
                }
            });
        }
    }

    function renderTracklist() {
        if (!playerTracklistEl) return;
        playerTracklistEl.innerHTML = TRACKS.map((t, idx) => {
            const isActive = idx === currentTrackIdx;
            const strokeUrl = isActive ? 'url(#silverGrad)' : 'url(#silverDimGrad)';
            const railWidth = isActive ? '1.35' : '0.85';
            return `
            <div class="track-card ${isActive ? 'active' : ''}" data-idx="${idx}">
                <svg class="track-card-svg" viewBox="0 0 340 50" preserveAspectRatio="none">
                    <rect x="1" y="1" width="338" height="48" rx="2.5" fill="none" stroke="${strokeUrl}" stroke-width="${railWidth}" />
                    <rect x="3.5" y="3.5" width="333" height="43" rx="1.5" fill="none" stroke="${strokeUrl}" stroke-width="0.45" opacity="0.55" />
                    <path d="M 1,13 C 1,4 4,1 13,1 M 1,7.5 C 5.5,7.5 7.5,5.5 7.5,1" fill="none" stroke="url(#silverGrad)" stroke-width="1.4" />
                    <path d="M 339,13 C 339,4 336,1 327,1 M 339,7.5 C 334.5,7.5 332.5,5.5 332.5,1" fill="none" stroke="url(#silverGrad)" stroke-width="1.4" />
                    <path d="M 1,37 C 1,46 4,49 13,49 M 1,42.5 C 5.5,42.5 7.5,44.5 7.5,49" fill="none" stroke="url(#silverGrad)" stroke-width="1.4" />
                    <path d="M 339,37 C 339,46 336,49 327,49 M 339,42.5 C 334.5,42.5 332.5,44.5 332.5,49" fill="none" stroke="url(#silverGrad)" stroke-width="1.4" />
                    <polygon points="1,25 4,22 7,25 4,28" fill="url(#silverGrad)" opacity="0.85" />
                    <polygon points="339,25 336,22 333,25 336,28" fill="url(#silverGrad)" opacity="0.85" />
                </svg>
                <div class="track-card-content">
                    <span class="track-num">${String(idx + 1).padStart(2, '0')}</span>
                    <div class="track-card-meta">
                        <span class="track-title">${t.title}</span>
                        <span class="track-artist">${t.feat ? t.feat : 'МОДЕУС'}</span>
                    </div>
                </div>
                <div class="track-duration">
                    <span>${t.durationStr}</span>
                    <span class="active-diamond">
                        <svg viewBox="0 0 24 24" width="9" height="9" fill="#ffffff">
                            <path d="M12 0 L15.5 8.5 L24 12 L15.5 15.5 L12 24 L8.5 15.5 L0 12 L8.5 8.5 Z" />
                        </svg>
                    </span>
                </div>
            </div>`;
        }).join('');

        playerTracklistEl.querySelectorAll('.track-card').forEach(item => {
            item.addEventListener('click', () => {
                const idx = parseInt(item.dataset.idx, 10);
                if (idx === currentTrackIdx && isAudioPlaying) {
                    togglePlayPause();
                } else {
                    selectTrack(idx, true);
                }
            });
        });

    }

    function selectTrack(index, autoPlay) {
        if (index < 0) index = TRACKS.length - 1;
        if (index >= TRACKS.length) index = 0;
        currentTrackIdx = index;
        const track = TRACKS[currentTrackIdx];
        currentDurationMs = track.durationMs;
        trackJustLoaded = true;

        updateTrackUI(track);
        updateProgressUI(0, 0);

        if (customAudioEl) {
            customAudioEl.pause();
            customAudioEl = null;
        }

        if (track.audioFileUrl) {
            // Local uploaded track
            if (scWidget) {
                try { scWidget.pause(); } catch (e) {}
            }
            customAudioEl = new Audio(track.audioFileUrl);
            customAudioEl.volume = (isMuted ? 0 : currentVolume) / 100;
            customAudioEl.addEventListener('timeupdate', () => {
                if (!isSeeking && customAudioEl) {
                    const curMs = customAudioEl.currentTime * 1000;
                    const frac = customAudioEl.duration ? customAudioEl.currentTime / customAudioEl.duration : 0;
                    updateProgressUI(curMs, frac);
                }
            });
            customAudioEl.addEventListener('ended', () => {
                playNextTrack();
            });
            if (autoPlay) {
                customAudioEl.play().then(() => {
                    isAudioPlaying = true;
                    updatePlayStateUI(true);
                }).catch(() => {});
            }
            return;
        }

        if (scWidget) {
            scWidget.load(track.url, {
                auto_play: autoPlay,
                buying: false,
                liking: false,
                download: false,
                sharing: false,
                show_artwork: false,
                show_comments: false,
                show_playcount: false,
                show_user: false,
                callback: function () {
                    applyVolume();
                }
            });

            applyVolume();
            [80, 200, 450, 800].forEach(delay => {
                setTimeout(applyVolume, delay);
            });

            if (autoPlay) {
                isAudioPlaying = true;
                updatePlayStateUI(true);
            }
        }
    }

    function togglePlayPause() {
        if (customAudioEl) {
            if (isAudioPlaying) {
                customAudioEl.pause();
                isAudioPlaying = false;
                updatePlayStateUI(false);
            } else {
                customAudioEl.play().then(() => {
                    isAudioPlaying = true;
                    updatePlayStateUI(true);
                }).catch(() => {});
            }
            return;
        }

        if (!scWidget) return;
        if (isAudioPlaying) {
            scWidget.pause();
        } else {
            scWidget.play();
            applyVolume();
        }
    }

    function playPrevTrack() {
        selectTrack(currentTrackIdx - 1, true);
    }

    function playNextTrack() {
        selectTrack(currentTrackIdx + 1, true);
    }

    function setVolume(val) {
        val = Math.max(0, Math.min(val, 100));
        currentVolume = val;
        try {
            localStorage.setItem('modeus_player_volume', currentVolume);
        } catch (e) {}

        updateVolumeUI();
    }

    function setupSeekEvents() {
        if (!playerProgressWrap) return;

        function seekFromEvent(e) {
            const rect = playerProgressWrap.getBoundingClientRect();
            const clientX = (e.touches && e.touches.length > 0) ? e.touches[0].clientX : e.clientX;
            const relX = Math.max(0, Math.min(clientX - rect.left, rect.width));
            const frac = rect.width > 0 ? (relX / rect.width) : 0;
            const targetMs = frac * currentDurationMs;

            updateProgressUI(targetMs, frac);

            if (customAudioEl) {
                customAudioEl.currentTime = (frac * customAudioEl.duration) || 0;
            } else if (scWidget) {
                scWidget.seekTo(targetMs);
            }
        }

        playerProgressWrap.addEventListener('mousedown', function (e) {
            isSeeking = true;
            playerProgressWrap.classList.add('dragging');
            seekFromEvent(e);

            function onMouseMove(moveEv) {
                if (isSeeking) {
                    seekFromEvent(moveEv);
                }
            }

            function onMouseUp() {
                isSeeking = false;
                playerProgressWrap.classList.remove('dragging');
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
            }

            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        });

        playerProgressWrap.addEventListener('touchstart', function (e) {
            isSeeking = true;
            playerProgressWrap.classList.add('dragging');
            seekFromEvent(e);
        }, { passive: true });

        window.addEventListener('touchmove', function (e) {
            if (isSeeking) {
                seekFromEvent(e);
            }
        }, { passive: true });

        window.addEventListener('touchend', function () {
            if (isSeeking) {
                isSeeking = false;
                playerProgressWrap.classList.remove('dragging');
            }
        });
        window.addEventListener('touchcancel', function () {
            if (isSeeking) {
                isSeeking = false;
                playerProgressWrap.classList.remove('dragging');
            }
        });
    }

    function setupVolumeEvents() {
        updateVolumeUI();

        if (playerVolToggle) {
            playerVolToggle.addEventListener('click', function () {
                if (isMuted || currentVolume === 0) {
                    isMuted = false;
                    setVolume(prevVolume || 80);
                } else {
                    isMuted = true;
                    prevVolume = currentVolume;
                    setVolume(0);
                }
            });
        }

        if (playerVolSliderWrap) {
            isDraggingVol = false;

            function setVolFromEvent(e) {
                const rect = playerVolSliderWrap.getBoundingClientRect();
                const clientX = (e.touches && e.touches.length > 0) ? e.touches[0].clientX : e.clientX;
                const relX = Math.max(0, Math.min(clientX - rect.left, rect.width));
                const pct = rect.width > 0 ? Math.round((relX / rect.width) * 100) : 0;
                isMuted = false;
                setVolume(pct);
            }

            playerVolSliderWrap.addEventListener('mousedown', function (e) {
                isDraggingVol = true;
                playerVolSliderWrap.classList.add('dragging');
                setVolFromEvent(e);

                function onMouseMove(moveEv) {
                    if (isDraggingVol) {
                        setVolFromEvent(moveEv);
                    }
                }

                function onMouseUp() {
                    isDraggingVol = false;
                    playerVolSliderWrap.classList.remove('dragging');
                    window.removeEventListener('mousemove', onMouseMove);
                    window.removeEventListener('mouseup', onMouseUp);
                }

                window.addEventListener('mousemove', onMouseMove);
                window.addEventListener('mouseup', onMouseUp);
            });

            playerVolSliderWrap.addEventListener('touchstart', function (e) {
                isDraggingVol = true;
                playerVolSliderWrap.classList.add('dragging');
                setVolFromEvent(e);
            }, { passive: true });

            window.addEventListener('touchmove', function (e) {
                if (isDraggingVol) {
                    setVolFromEvent(e);
                }
            }, { passive: true });

            window.addEventListener('touchend', function () {
                if (isDraggingVol) {
                    isDraggingVol = false;
                    playerVolSliderWrap.classList.remove('dragging');
                }
            });
            window.addEventListener('touchcancel', function () {
                if (isDraggingVol) {
                    isDraggingVol = false;
                    playerVolSliderWrap.classList.remove('dragging');
                }
            });
        }
    }

    function initSoundCloudPlayer() {
        renderTracklist();
        setupSeekEvents();
        setupVolumeEvents();
        animateEq();

        if (playerPlayBtn) {
            playerPlayBtn.addEventListener('click', togglePlayPause);
        }
        if (playerPrevBtn) {
            playerPrevBtn.addEventListener('click', playPrevTrack);
        }
        if (playerNextBtn) {
            playerNextBtn.addEventListener('click', playNextTrack);
        }

        // Spacebar shortcut
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'BUTTON') {
                e.preventDefault();
                togglePlayPause();
            }
        });

        function bindWidget() {
            if (!window.SC || !scIframe) {
                setTimeout(bindWidget, 250);
                return;
            }

            try {
                scWidget = SC.Widget(scIframe);

                scWidget.bind(SC.Widget.Events.READY, function () {
                    applyVolume();
                });

                scWidget.bind(SC.Widget.Events.PLAY, function () {
                    isAudioPlaying = true;
                    updatePlayStateUI(true);
                    applyVolume();
                });

                scWidget.bind(SC.Widget.Events.PAUSE, function () {
                    isAudioPlaying = false;
                    updatePlayStateUI(false);
                });

                scWidget.bind(SC.Widget.Events.FINISH, function () {
                    playNextTrack();
                });

                scWidget.bind(SC.Widget.Events.PLAY_PROGRESS, function (data) {
                    if (trackJustLoaded) {
                        applyVolume();
                        trackJustLoaded = false;
                    }
                    if (!isSeeking && data) {
                        const cur = data.currentPosition || 0;
                        const rel = data.relativePosition || 0;
                        if (cur && rel) {
                            currentDurationMs = cur / rel;
                        }
                        updateProgressUI(cur, rel);
                    }
                });
            } catch (err) {
                console.error('[SoundCloud Widget Init Error]:', err);
            }
        }

        bindWidget();
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // 8. GOTHIC SILVER PARTICLES BACKGROUND
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function initVideoBg() {
        const video = document.getElementById('bgVideo');
        if (!video) return;

        video.muted = true;
        video.defaultMuted = true;

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

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // 9. INITIALIZATION
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function init() {
        // Dynamic viewport height adaptation for all platforms & mobile browsers
        updateAppHeight();

        // Initialize Custom Gothic Cursor
        initCustomCursor();

        // Initialize Video Background
        initVideoBg();

        // Initialize Liquid Glass interactive tracking
        initLiquidGlassCards();

        // Initialize SoundCloud Audio Player
        initSoundCloudPlayer();

        // Initialize bio slots after DOM is loaded and fonts rendered
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(function () {
                setupBioSlots();
            });
        } else {
            setTimeout(setupBioSlots, 500);
        }

        let resizeTimer = null;
        window.addEventListener('resize', function () {
            updateAppHeight();
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                bioSlotsInitialized = false;
                setupBioSlots();
            }, 120);
        });

        window.addEventListener('orientationchange', function () {
            setTimeout(updateAppHeight, 100);
            setTimeout(function () {
                bioSlotsInitialized = false;
                setupBioSlots();
            }, 200);
        });

        // Initialize Smooth Anchor Scrolling & Section Observer
        initSmoothScroll();

        // Keyboard navigation (Home / End)
        window.addEventListener('keydown', onKeyDown);

        // Start preloader with glowing breathing cycle
        initPreloader();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
