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
    const cs2Cursor        = document.getElementById('cs2-cursor');
    const mainContent      = document.getElementById('main-content');
    const sectionsWrapper  = document.getElementById('sections-wrapper');
    const sections         = document.querySelectorAll('.section');
    const bottomNav        = document.getElementById('bottom-nav');
    const navBtns          = document.querySelectorAll('.nav-btn');
    const logoContainer    = document.getElementById('logoContainer');
    const logoFxLayer      = document.getElementById('logoFxLayer');
    const aboutTitle       = document.getElementById('aboutTitle');
    const aboutText        = document.getElementById('aboutText');

    const ABOUT_BIO_TEXT   = "Морозов Максим Алексеевич (родился 11 октября 2003 года в Томске) — российский исполнитель и дизайнер, бывший участник творческого объединения threehearts.";
    const ABOUT_TITLE_TEXT = "ABOUT ME";

    let currentSection = 0;
    let isScrolling    = false;
    let touchStartY    = 0;

    // ═══════════════════════════════════════════════
    // 1. CS2 CROSSHAIR CURSOR
    // ═══════════════════════════════════════════════

    function initCS2Cursor() {
        if (!cs2Cursor) return;
        cs2Cursor.classList.add('active');

        window.addEventListener('mousemove', function (e) {
            cs2Cursor.style.transform = 'translate(' + (e.clientX - 16) + 'px, ' + (e.clientY - 16) + 'px)';
            handleLogoRadialEffect(e);
        });

        window.addEventListener('mousedown', function () {
            cs2Cursor.classList.add('recoil');
            setTimeout(function () {
                cs2Cursor.classList.remove('recoil');
            }, 100);
        });
    }

    // ═══════════════════════════════════════════════
    // 2. RADIAL NOISE + BLUR EFFECT ON LOGO
    // ═══════════════════════════════════════════════

    function handleLogoRadialEffect(e) {
        if (!logoContainer || !logoFxLayer || currentSection !== 0) return;

        const rect = logoContainer.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        // Distance from cursor to logo rectangle bounds
        const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
        const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Within 140px proximity of the logo
        if (dist < 140) {
            logoFxLayer.style.opacity = '1';
            logoFxLayer.style.setProperty('--mouse-fx-x', relX + 'px');
            logoFxLayer.style.setProperty('--mouse-fx-y', relY + 'px');
        } else {
            logoFxLayer.style.opacity = '0';
        }
    }

    // ═══════════════════════════════════════════════
    // 3. PRELOADER (BREATHING ASCII GLOW)
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
        if (bottomNav) {
            bottomNav.classList.remove('hidden');
            bottomNav.classList.add('visible');
        }
    }

    // ═══════════════════════════════════════════════
    // 4. BULLETPROOF FULLPAGE SCROLL
    // ═══════════════════════════════════════════════

    function goToSection(index) {
        if (index < 0 || index >= sections.length || index === currentSection || isScrolling) return;

        isScrolling = true;
        currentSection = index;

        // Slide the fullpage wrapper cleanly
        if (sectionsWrapper) {
            sectionsWrapper.style.transform = 'translateY(-' + (currentSection * 100) + 'vh)';
        }

        // Update active class on sections & navigation buttons
        sections.forEach(function (sec, idx) {
            sec.classList.toggle('active', idx === currentSection);
        });

        navBtns.forEach(function (btn, idx) {
            btn.classList.toggle('active', idx === currentSection);
        });

        // Hide logo fx layer when navigating away from Hi
        if (logoFxLayer && currentSection !== 0) {
            logoFxLayer.style.opacity = '0';
        }

        // Trigger Decrypt Text effect when entering About (section index 1)
        if (currentSection === 1) {
            triggerAboutBioDecrypt();
        }

        // Cooldown for scroll lock
        setTimeout(function () {
            isScrolling = false;
        }, 850);
    }

    function onWheel(e) {
        e.preventDefault();
        if (isScrolling) return;

        if (e.deltaY > 25) {
            goToSection(currentSection + 1);
        } else if (e.deltaY < -25) {
            goToSection(currentSection - 1);
        }
    }

    function onTouchStart(e) {
        touchStartY = e.touches[0].clientY;
    }

    function onTouchEnd(e) {
        if (isScrolling) return;
        const diff = touchStartY - e.changedTouches[0].clientY;

        if (Math.abs(diff) > 45) {
            if (diff > 0) {
                goToSection(currentSection + 1);
            } else {
                goToSection(currentSection - 1);
            }
        }
    }

    function onKeyDown(e) {
        if (isScrolling) return;

        switch (e.key) {
            case 'ArrowDown':
            case 'PageDown':
            case ' ':
                e.preventDefault();
                goToSection(currentSection + 1);
                break;
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault();
                goToSection(currentSection - 1);
                break;
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

        // Render each character wrapped in a span with original text to measure exact widths
        const chars = ABOUT_BIO_TEXT.split('');
        aboutText.innerHTML = chars.map(function (ch) {
            if (ch === ' ') {
                return '<span class="d-slot d-space"> </span>';
            }
            return '<span class="d-slot d-revealed">' + ch + '</span>';
        }).join('');

        // Lock exact width on each slot to prevent word-wrap shifts during scramble
        const spans = aboutText.querySelectorAll('.d-slot');
        bioSlotData = [];

        spans.forEach(function (span, i) {
            const ch = chars[i];
            const isSpace = ch === ' ';
            const rect = span.getBoundingClientRect();
            const w = Math.ceil(rect.width * 100) / 100;
            span.style.width = w + 'px';
            span.dataset.char = ch;

            bioSlotData.push({
                el: span,
                char: ch,
                isSpace: isSpace
            });
        });

        bioSlotsInitialized = true;
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
    // 7. INITIALIZATION
    // ═══════════════════════════════════════════════

    function init() {
        // Initialize CS2 Crosshair immediately
        initCS2Cursor();

        // Initialize Liquid Glass interactive tracking
        initLiquidGlassCards();

        // Initialize bio slots after DOM is loaded and fonts rendered
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(function () {
                setupBioSlots();
            });
        } else {
            setTimeout(setupBioSlots, 500);
        }

        window.addEventListener('resize', function () {
            bioSlotsInitialized = false;
            setupBioSlots();
        });

        // Navigation button listeners
        navBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                const target = parseInt(btn.dataset.target, 10);
                goToSection(target);
            });
        });

        // Scroll listeners (wheel, touch, keyboard)
        window.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchend', onTouchEnd, { passive: true });
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
