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
    const aboutTitle       = document.getElementById('aboutTitle');
    const aboutText        = document.getElementById('aboutText');

    const ABOUT_BIO_TEXT   = "Морозов Максим Алексеевич (родился 11 октября 2003 года в Томске) — российский исполнитель и дизайнер, бывший участник творческого объединения threehearts.";
    const ABOUT_TITLE_TEXT = "ABOUT ME";

    let currentSection = 0;
    let isScrolling    = false;
    let touchStartY    = 0;

    // ═══════════════════════════════════════════════
    // 1. CS2 CROSSHAIR CURSOR (ULTRA-SMOOTH rAF & GPU)
    // ═══════════════════════════════════════════════

    let mouseX = -100;
    let mouseY = -100;
    let cursorRafPending = false;

    function renderCursor() {
        if (cs2Cursor) {
            cs2Cursor.style.transform = 'translate3d(' + (mouseX - 16) + 'px, ' + (mouseY - 16) + 'px, 0)';
        }
        cursorRafPending = false;
    }

    function initCS2Cursor() {
        if (!cs2Cursor) return;
        cs2Cursor.classList.add('active');

        window.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!cursorRafPending) {
                cursorRafPending = true;
                requestAnimationFrame(renderCursor);
            }
        }, { passive: true });

        window.addEventListener('mousedown', function () {
            cs2Cursor.classList.add('recoil');
            setTimeout(function () {
                cs2Cursor.classList.remove('recoil');
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
        if (bottomNav) {
            bottomNav.classList.remove('hidden');
            bottomNav.classList.add('visible');
        }
    }

    // ═══════════════════════════════════════════════
    // 4. BULLETPROOF FULLPAGE SCROLL (SILKY SMOOTH)
    // ═══════════════════════════════════════════════

    let wheelAccumulator = 0;
    let wheelResetTimer  = null;

    function goToSection(index) {
        if (index < 0 || index >= sections.length || index === currentSection || isScrolling) return;

        isScrolling = true;
        currentSection = index;

        // Slide the fullpage wrapper cleanly with soft cubic-bezier glide
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

        // Trigger Decrypt Text effect when entering About (section index 1)
        if (currentSection === 1) {
            triggerAboutBioDecrypt();
        }

        // Smooth cooldown matching the 1.1s velvet curve
        setTimeout(function () {
            isScrolling = false;
        }, 1100);
    }

    function onWheel(e) {
        e.preventDefault();
        if (isScrolling) return;

        wheelAccumulator += e.deltaY;

        clearTimeout(wheelResetTimer);
        wheelResetTimer = setTimeout(function () {
            wheelAccumulator = 0;
        }, 220);

        // Gentle intentional threshold: avoids jitter, glides smoothly
        if (wheelAccumulator > 35) {
            wheelAccumulator = 0;
            goToSection(currentSection + 1);
        } else if (wheelAccumulator < -35) {
            wheelAccumulator = 0;
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

        // Wrap each word in .d-word to strictly prevent breaking words in half
        const words = ABOUT_BIO_TEXT.split(' ');
        aboutText.innerHTML = words.map(function (word) {
            const slots = word.split('').map(function (ch) {
                return '<span class="d-slot d-revealed">' + ch + '</span>';
            }).join('');
            return '<span class="d-word">' + slots + '</span>';
        }).join('<span class="d-slot d-space"> </span>');

        // Lock exact width on each slot to prevent word-wrap shifts during scramble
        const spans = aboutText.querySelectorAll('.d-slot');
        bioSlotData = [];

        spans.forEach(function (span) {
            const ch = span.textContent;
            const isSpace = span.classList.contains('d-space');
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
    // 7. SOUNDCLOUD LIQUID GLASS AUDIO PLAYER
    // ═══════════════════════════════════════════════

    const TRACKS = [
        {
            title: "requiem",
            feat: "takecare04",
            url: "https://soundcloud.com/emodeus/requiem",
            date: "02.08.2026",
            durationStr: "1:47",
            durationMs: 107248,
            artwork: "https://i1.sndcdn.com/artworks-86BNqkZ0BhxCHXBG-MC9KfQ-large.jpg"
        },
        {
            title: "паршивый номер",
            feat: "takuori, daybytheday",
            url: "https://soundcloud.com/emodeus/parshiviynomer",
            date: "18.06.2026",
            durationStr: "1:38",
            durationMs: 98123,
            artwork: "https://i1.sndcdn.com/artworks-7BvsFStUyd5vjzSs-yZSWEQ-large.png"
        },
        {
            title: "YOLO",
            feat: "frayu0",
            url: "https://soundcloud.com/emodeus/yolo",
            date: "06.03.2026",
            durationStr: "1:18",
            durationMs: 78324,
            artwork: "https://i1.sndcdn.com/artworks-QyAtbuFbRBxMYdh4-SuRgrw-large.png"
        },
        {
            title: "вспышки",
            feat: "takecare04, greyrock",
            url: "https://soundcloud.com/emodeus/vspyshki-takecare04-greyrock",
            date: "04.09.2025",
            durationStr: "1:53",
            durationMs: 113748,
            artwork: "https://i1.sndcdn.com/artworks-WwhFlJdbjgXEMQim-ONzWmA-large.jpg"
        },
        {
            title: "lips",
            feat: "forzen, foreless",
            url: "https://soundcloud.com/emodeus/lips-forzen-foreless",
            date: "27.07.2025",
            durationStr: "1:36",
            durationMs: 96046,
            artwork: "https://i1.sndcdn.com/artworks-JGdbljXcdit1Lk9x-atOlEQ-large.png"
        },
        {
            title: "armour",
            feat: "foreless",
            url: "https://soundcloud.com/emodeus/armour-foreless",
            date: "02.07.2025",
            durationStr: "2:16",
            durationMs: 136661,
            artwork: "https://i1.sndcdn.com/artworks-tX9vUTyfpbs0tIis-xkCpzQ-large.png"
        }
    ];

    let scWidget = null;
    let currentTrackIdx = 0;
    let isAudioPlaying = false;
    let isSeeking = false;
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

    const playerCard          = document.querySelector('.player-card');
    const playerCoverImg      = document.getElementById('playerCoverImg');
    const playerTrackDate     = document.getElementById('playerTrackDate');
    const playerTrackTitle    = document.getElementById('playerTrackTitle');
    const playerCurrentTime   = document.getElementById('playerCurrentTime');
    const playerTotalTime     = document.getElementById('playerTotalTime');
    const playerProgressWrap  = document.getElementById('playerProgressContainer');
    const playerProgressFill  = document.getElementById('playerProgressFill');
    const playerProgressPin   = document.getElementById('playerProgressPin');
    const playerPlayBtn       = document.getElementById('playerPlayBtn');
    const playerPrevBtn       = document.getElementById('playerPrevBtn');
    const playerNextBtn       = document.getElementById('playerNextBtn');
    const playerVolToggle     = document.getElementById('playerVolToggle');
    const playerVolRange      = document.getElementById('playerVolRange');
    const playerVolumeSection = document.querySelector('.player-volume-section');
    const playerTracklistEl   = document.getElementById('playerTracklist');
    const scIframe            = document.getElementById('sc-widget-iframe');

    function applyVolume() {
        if (!scWidget) return;
        const targetVol = isMuted ? 0 : currentVolume;
        try {
            scWidget.setVolume(targetVol);
        } catch (e) {}
    }

    function formatTime(ms) {
        if (!ms || isNaN(ms) || ms < 0) return "0:00";
        const totalSec = Math.floor(ms / 1000);
        const m = Math.floor(totalSec / 60);
        const s = totalSec % 60;
        return m + ":" + (s < 10 ? "0" : "") + s;
    }

    function updatePlayStateUI(playing) {
        if (!playerCard) return;
        playerCard.classList.toggle('is-playing', playing);
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

    function updateTrackUI(track) {
        if (playerCoverImg) {
            playerCoverImg.src = track.artwork;
            playerCoverImg.alt = track.title;
        }
        if (playerTrackTitle) {
            playerTrackTitle.textContent = track.feat ? track.title + ' (' + track.feat + ')' : track.title;
        }
        if (playerTrackDate) {
            playerTrackDate.textContent = track.date;
        }
        if (playerTotalTime) {
            playerTotalTime.textContent = track.durationStr;
        }
        if (playerTracklistEl) {
            const items = playerTracklistEl.querySelectorAll('.track-item');
            items.forEach((item, idx) => {
                item.classList.toggle('active', idx === currentTrackIdx);
            });
        }
    }

    function renderTracklist() {
        if (!playerTracklistEl) return;
        playerTracklistEl.innerHTML = TRACKS.map((t, idx) => `
            <div class="track-item ${idx === currentTrackIdx ? 'active' : ''}" data-idx="${idx}">
                <span class="track-num">${String(idx + 1).padStart(2, '0')}</span>
                <div class="track-details">
                    <span class="track-name">${t.title}</span>
                    <span class="track-feat">${t.feat ? t.feat : ''}</span>
                </div>
                <span class="track-dur">${t.durationStr}</span>
                <div class="track-playing-indicator"></div>
            </div>
        `).join('');

        playerTracklistEl.querySelectorAll('.track-item').forEach(item => {
            item.addEventListener('click', () => {
                const idx = parseInt(item.dataset.idx, 10);
                selectTrack(idx, true);
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

            // Enforce volume persistently across track loading stages
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

        applyVolume();

        if (playerVolRange) {
            playerVolRange.value = val;
        }
        if (playerVolumeSection) {
            playerVolumeSection.classList.toggle('is-muted', val === 0 || isMuted);
        }
    }

    function setupSeekEvents() {
        if (!playerProgressWrap) return;

        function seekFromEvent(e) {
            const rect = playerProgressWrap.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const relX = Math.max(0, Math.min(clientX - rect.left, rect.width));
            const frac = relX / rect.width;
            const targetMs = frac * currentDurationMs;

            updateProgressUI(targetMs, frac);
            if (scWidget) {
                scWidget.seekTo(targetMs);
            }
        }

        playerProgressWrap.addEventListener('mousedown', function (e) {
            isSeeking = true;
            playerProgressWrap.classList.add('is-dragging');
            seekFromEvent(e);

            function onMouseMove(moveEv) {
                if (isSeeking) {
                    seekFromEvent(moveEv);
                }
            }

            function onMouseUp() {
                isSeeking = false;
                playerProgressWrap.classList.remove('is-dragging');
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
            }

            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        });

        playerProgressWrap.addEventListener('touchstart', function (e) {
            isSeeking = true;
            seekFromEvent(e);
        }, { passive: true });

        playerProgressWrap.addEventListener('touchmove', function (e) {
            if (isSeeking) {
                seekFromEvent(e);
            }
        }, { passive: true });

        playerProgressWrap.addEventListener('touchend', function () {
            isSeeking = false;
        });
    }

    function setupVolumeEvents() {
        if (playerVolRange) {
            playerVolRange.value = currentVolume;
        }
        if (playerVolumeSection) {
            playerVolumeSection.classList.toggle('is-muted', currentVolume === 0 || isMuted);
        }

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

        if (playerVolRange) {
            playerVolRange.addEventListener('input', function () {
                isMuted = false;
                setVolume(parseInt(playerVolRange.value, 10));
            });
        }
    }

    function initSoundCloudPlayer() {
        renderTracklist();
        setupSeekEvents();
        setupVolumeEvents();

        if (playerPlayBtn) {
            playerPlayBtn.addEventListener('click', togglePlayPause);
        }
        if (playerPrevBtn) {
            playerPrevBtn.addEventListener('click', playPrevTrack);
        }
        if (playerNextBtn) {
            playerNextBtn.addEventListener('click', playNextTrack);
        }

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

    // ═══════════════════════════════════════════════
    // 8. INITIALIZATION
    // ═══════════════════════════════════════════════

    function init() {
        // Initialize CS2 Crosshair immediately
        initCS2Cursor();

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
