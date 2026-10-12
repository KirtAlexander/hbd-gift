/**
 * ===================================================================
 * DIARIO / SCRAPBOOK DE CUMPLEAÑOS PARA YAZMIN
 * Lógica e Interactividad Completa (Vanilla JavaScript)
 * Diseñado con Iconos Vectoriales Elegantes & Soporte Completo de Fotos
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    if (typeof scrapbookData === 'undefined') {
        console.error('Error: scrapbookData no está definido. Asegúrate de que content.js esté cargado.');
        return;
    }

    initApp();
});

function initApp() {
    renderCover();
    renderLetter();
    initCounter();
    renderGallery();
    renderTimeline();
    renderReasons();
    initSurpriseSection();
    renderClosing();
    initMusicPlayer();
    initMagicParticles();
    initScrollEffects();
}

/* -------------------------------------------------------------------
   SISTEMA DE ICONOS VECTORIALES (SVG) - SIN EMOJIS
   ------------------------------------------------------------------- */
function getSvgIcon(name, extraClass = '', size = 20) {
    const icons = {
        'heart': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
        'heart-outline': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
        'heart-pulse': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>`,
        'shield-heart': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 11.35l-.73-.66C9.67 9.24 8 7.7 8 5.75c0-1.52 1.21-2.75 2.75-2.75.87 0 1.7.4 2.25 1.05.55-.65 1.38-1.05 2.25-1.05 1.54 0 2.75 1.23 2.75 2.75 0 1.95-1.67 3.49-3.27 4.94l-.73.66z" fill="currentColor"/></svg>`,
        'sparkles': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/></svg>`,
        'star': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
        'book': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
        'camera': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
        'coffee': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
        'compass': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
        'sun': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
        'smile': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
        'moon': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
        'mail': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
        'crown': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>`,
        'gift': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
        'utensils': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"/><path d="M15 11v11"/><path d="M5 2v8a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2"/><path d="M8 12v10"/></svg>`,
        'cake': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s2-1 4 0 4-1 4 0 4-1 4 0 4-1 4 0"/><line x1="2" y1="21" x2="22" y2="21"/><line x1="12" y1="7" x2="12" y2="11"/><circle cx="12" cy="4" r="1"/></svg>`,
        'infinity': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.178 8c5.096 0 5.096 8 0 8-2.695 0-4.757-2.736-6.178-4.887C10.58 8.966 8.517 6.23 5.822 6.23c-5.096 0-5.096 8 0 8 2.695 0 4.757-2.736 6.178-4.887C13.42 11.484 15.483 14.22 18.178 14.22z"/></svg>`,
        'check': `<svg class="svg-icon ${extraClass}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`
    };

    return icons[name] || icons['heart'];
}

/* -------------------------------------------------------------------
   1. PORTADA DEL CUADERNO
   ------------------------------------------------------------------- */
function renderCover() {
    const { cover } = scrapbookData;

    const coverBadge = document.getElementById('coverBadge');
    const coverTitle = document.getElementById('coverTitle');
    const coverSubtitle = document.getElementById('coverSubtitle');
    const coverBirthGreeting = document.getElementById('coverBirthGreeting');
    const coverTagline = document.getElementById('coverTagline');
    const openBookBtn = document.getElementById('openBookBtn');

    if (coverBadge && cover.badge) coverBadge.textContent = cover.badge;
    if (coverTitle && cover.title) coverTitle.textContent = cover.title;
    if (coverSubtitle && cover.subtitle) coverSubtitle.textContent = cover.subtitle;
    if (coverBirthGreeting && cover.birthGreeting) coverBirthGreeting.textContent = cover.birthGreeting;
    if (coverTagline && cover.tagline) coverTagline.textContent = cover.tagline;

    // Foto polaroid de la portada (usamos la hermosa foto juntos)
    const coverPhotoPreview = document.getElementById('coverPhotoPreview');
    if (coverPhotoPreview) {
        const coverImgSrc = 'files/foto8.jpeg'; // Foto tierna abrazados
        const testImg = new Image();
        testImg.src = coverImgSrc;
        testImg.onload = () => {
            coverPhotoPreview.innerHTML = `<img src="${coverImgSrc}" alt="Foto de portada" style="width:100%;height:100%;object-fit:cover;border-radius:3px;">`;
        };
        testImg.onerror = () => {
            // Fallback a primera foto
            const fallbackSrc = scrapbookData.gallery?.[0]?.src || 'files/foto1.jpeg';
            coverPhotoPreview.innerHTML = `<img src="${fallbackSrc}" alt="Foto de portada" style="width:100%;height:100%;object-fit:cover;border-radius:3px;">`;
        };
    }

    // Botón para abrir el libro con animación y scroll suave
    if (openBookBtn) {
        openBookBtn.addEventListener('click', () => {
            createHeartBurst(window.innerWidth / 2, window.innerHeight * 0.7);
            playSparkleSound();

            const letterSection = document.getElementById('letterSection');
            if (letterSection) {
                letterSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

/* -------------------------------------------------------------------
   2. CARTA / MENSAJE PRINCIPAL
   ------------------------------------------------------------------- */
function renderLetter() {
    const { letter } = scrapbookData;
    if (!letter) return;

    const letterTitle = document.getElementById('letterTitle');
    const letterDate = document.getElementById('letterDate');
    const letterBody = document.getElementById('letterBody');
    const letterClosing = document.getElementById('letterClosing');
    const letterAuthor = document.getElementById('letterAuthor');

    if (letterTitle && letter.title) letterTitle.textContent = letter.title;
    if (letterDate && letter.date) letterDate.textContent = letter.date;
    if (letterClosing && letter.closing) letterClosing.textContent = letter.closing;
    if (letterAuthor && letter.signature) letterAuthor.textContent = letter.signature;

    if (letterBody && Array.isArray(letter.paragraphs)) {
        letterBody.innerHTML = '';
        letter.paragraphs.forEach((paragraphText) => {
            const p = document.createElement('p');
            p.textContent = paragraphText;
            letterBody.appendChild(p);
        });
    }
}

/* -------------------------------------------------------------------
   3. CONTADOR DE TIEMPO JUNTOS (DESDE 16/01/2022)
   ------------------------------------------------------------------- */
function initCounter() {
    const { counter, personal } = scrapbookData;

    const counterTitle = document.getElementById('counterTitle');
    const counterSubtitle = document.getElementById('counterSubtitle');
    const counterLoveQuote = document.getElementById('counterLoveQuote');

    if (counterTitle && counter.title) counterTitle.textContent = counter.title;
    if (counterSubtitle && counter.subtitle) counterSubtitle.textContent = counter.subtitle;
    if (counterLoveQuote && counter.loveQuote) counterLoveQuote.textContent = counter.loveQuote;

    const startDateStr = personal?.relationshipStartDate || '2022-01-16T00:00:00';
    const startDate = new Date(startDateStr);

    const elYears = document.getElementById('countYears');
    const elMonths = document.getElementById('countMonths');
    const elDays = document.getElementById('countDays');
    const elHours = document.getElementById('countHours');
    const elMinutes = document.getElementById('countMinutes');
    const elSeconds = document.getElementById('countSeconds');

    function updateClock() {
        const now = new Date();
        const diff = getTimeDifference(startDate, now);

        if (elYears) elYears.textContent = diff.years;
        if (elMonths) elMonths.textContent = diff.months;
        if (elDays) elDays.textContent = diff.days;
        if (elHours) elHours.textContent = String(diff.hours).padStart(2, '0');
        if (elMinutes) elMinutes.textContent = String(diff.minutes).padStart(2, '0');
        if (elSeconds) elSeconds.textContent = String(diff.seconds).padStart(2, '0');
    }

    updateClock();
    setInterval(updateClock, 1000);
}

function getTimeDifference(start, end) {
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();
    let hours = end.getHours() - start.getHours();
    let minutes = end.getMinutes() - start.getMinutes();
    let seconds = end.getSeconds() - start.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const prevMonthDays = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
        days += prevMonthDays;
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    return { years, months, days, hours, minutes, seconds };
}

/* -------------------------------------------------------------------
   4. CARRUSEL DE FOTOS POLAROID
   ------------------------------------------------------------------- */
let currentSlideIndex = 0;
let carouselAutoplayTimer = null;

function renderGallery() {
    const { gallery } = scrapbookData;
    const track = document.getElementById('carouselTrack');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    const prevBtn = document.getElementById('prevSlideBtn');
    const nextBtn = document.getElementById('nextSlideBtn');
    const viewport = document.getElementById('carouselViewport');

    if (!track || !Array.isArray(gallery) || gallery.length === 0) return;

    track.innerHTML = '';
    if (indicatorsContainer) indicatorsContainer.innerHTML = '';

    gallery.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';

        const card = document.createElement('div');
        card.className = 'polaroid-card';
        const rot = item.rotation || (index % 2 === 0 ? -2 : 2.5);
        card.style.transform = `rotate(${rot}deg)`;

        const washi = document.createElement('div');
        washi.className = 'washi-tape washi-lavender-mini washi-top-center';
        washi.textContent = 'recuerdo';
        card.appendChild(washi);

        const frame = document.createElement('div');
        frame.className = 'polaroid-photo-frame';

        const img = document.createElement('img');
        img.className = 'polaroid-img';
        img.alt = item.caption || `Foto ${index + 1}`;
        img.loading = 'lazy';
        img.src = item.src;

        frame.appendChild(img);
        card.appendChild(frame);

        const captionBlock = document.createElement('div');
        captionBlock.className = 'polaroid-caption-block';

        const captionText = document.createElement('p');
        captionText.className = 'polaroid-caption-text';
        captionText.textContent = item.caption;

        const dateTag = document.createElement('span');
        dateTag.className = 'polaroid-date-tag';
        dateTag.textContent = item.date || 'Para siempre';

        captionBlock.appendChild(captionText);
        captionBlock.appendChild(dateTag);
        card.appendChild(captionBlock);

        // Clic para abrir Lightbox
        card.addEventListener('click', () => {
            openLightbox(item);
        });

        slide.appendChild(card);
        track.appendChild(slide);

        if (indicatorsContainer) {
            const dot = document.createElement('button');
            dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Ir a foto ${index + 1}`);
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetAutoplay();
            });
            indicatorsContainer.appendChild(dot);
        }
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            goToSlide(currentSlideIndex - 1);
            resetAutoplay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            goToSlide(currentSlideIndex + 1);
            resetAutoplay();
        });
    }

    if (viewport) {
        let touchStartX = 0;
        let touchEndX = 0;

        viewport.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoplay();
        }, { passive: true });

        viewport.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            resetAutoplay();
        }, { passive: true });

        function handleSwipe() {
            const swipeDistance = touchStartX - touchEndX;
            if (Math.abs(swipeDistance) > 45) {
                if (swipeDistance > 0) {
                    goToSlide(currentSlideIndex + 1);
                } else {
                    goToSlide(currentSlideIndex - 1);
                }
            }
        }

        viewport.addEventListener('mouseenter', stopAutoplay);
        viewport.addEventListener('mouseleave', resetAutoplay);
    }

    startAutoplay();
}

function goToSlide(index) {
    const { gallery } = scrapbookData;
    const track = document.getElementById('carouselTrack');
    const dots = document.querySelectorAll('.carousel-dot');

    if (!track || !gallery || gallery.length === 0) return;

    if (index < 0) {
        currentSlideIndex = gallery.length - 1;
    } else if (index >= gallery.length) {
        currentSlideIndex = 0;
    } else {
        currentSlideIndex = index;
    }

    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlideIndex);
    });
}

function startAutoplay() {
    carouselAutoplayTimer = setInterval(() => {
        goToSlide(currentSlideIndex + 1);
    }, 4500);
}

function stopAutoplay() {
    if (carouselAutoplayTimer) {
        clearInterval(carouselAutoplayTimer);
        carouselAutoplayTimer = null;
    }
}

function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
}

function openLightbox(item) {
    const lightbox = document.getElementById('photoLightbox');
    const imgWrapper = document.getElementById('lightboxImgWrapper');
    const caption = document.getElementById('lightboxCaption');
    const date = document.getElementById('lightboxDate');
    const closeBtn = document.getElementById('lightboxCloseBtn');

    if (!lightbox) return;

    imgWrapper.innerHTML = '';
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.caption || 'Foto';
    imgWrapper.appendChild(img);

    if (caption) caption.textContent = item.caption || '';
    if (date) date.textContent = item.date || '';

    lightbox.classList.remove('hidden');

    const closeHandler = () => {
        lightbox.classList.add('hidden');
        closeBtn?.removeEventListener('click', closeHandler);
        lightbox.removeEventListener('click', backdropHandler);
    };

    const backdropHandler = (e) => {
        if (e.target === lightbox) closeHandler();
    };

    closeBtn?.addEventListener('click', closeHandler);
    lightbox.addEventListener('click', backdropHandler);
}

/* -------------------------------------------------------------------
   5. NUESTRA HISTORIA / LÍNEA DE TIEMPO (CON FOTOS REALES)
   ------------------------------------------------------------------- */
function renderTimeline() {
    const { timeline } = scrapbookData;
    const container = document.getElementById('timelineContainer');
    if (!container || !Array.isArray(timeline)) return;

    container.innerHTML = '';

    timeline.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'timeline-item';

        // Nodo con icono SVG
        const marker = document.createElement('div');
        marker.className = 'timeline-marker';
        marker.innerHTML = getSvgIcon(item.icon || 'heart', 'timeline-svg-icon', 14);
        itemEl.appendChild(marker);

        // Tarjeta del hito
        const card = document.createElement('div');
        card.className = 'timeline-card';

        const header = document.createElement('div');
        header.className = 'timeline-card-header';

        const dateBadge = document.createElement('span');
        dateBadge.className = 'timeline-date-badge';
        dateBadge.textContent = item.date;

        const stickerTag = document.createElement('span');
        stickerTag.className = 'timeline-sticker-tag';
        stickerTag.textContent = item.sticker || 'Recuerdo';

        header.appendChild(dateBadge);
        header.appendChild(stickerTag);
        card.appendChild(header);

        const title = document.createElement('h3');
        title.className = 'timeline-title';
        title.textContent = item.title;
        card.appendChild(title);

        const desc = document.createElement('p');
        desc.className = 'timeline-desc';
        desc.textContent = item.description;
        card.appendChild(desc);

        // RENDERIZADO DE LA FOTO REAL DE LA LÍNEA DE TIEMPO
        if (item.photo) {
            const photoCard = document.createElement('div');
            photoCard.className = 'timeline-photo-card';
            const rot = index % 2 === 0 ? -1.5 : 1.5;
            photoCard.style.transform = `rotate(${rot}deg)`;

            const washi = document.createElement('div');
            washi.className = 'washi-tape-mini';
            washi.textContent = 'nuestro momento';
            photoCard.appendChild(washi);

            const frame = document.createElement('div');
            frame.className = 'timeline-photo-frame';

            const img = document.createElement('img');
            img.className = 'timeline-photo-img';
            img.src = item.photo;
            img.alt = item.title;
            img.loading = 'lazy';

            frame.appendChild(img);
            photoCard.appendChild(frame);

            const caption = document.createElement('span');
            caption.className = 'timeline-photo-caption';
            caption.textContent = item.title;
            photoCard.appendChild(caption);

            // Clic para abrir Lightbox
            photoCard.addEventListener('click', () => {
                openLightbox({ src: item.photo, caption: item.title, date: item.date });
            });

            card.appendChild(photoCard);
        }

        itemEl.appendChild(card);
        container.appendChild(itemEl);
    });
}

/* -------------------------------------------------------------------
   6. 10 RAZONES POR LAS QUE TE QUIERO (CON ICONOS VECTORIALES)
   ------------------------------------------------------------------- */
function renderReasons() {
    const { reasons } = scrapbookData;
    const board = document.getElementById('reasonsBoard');
    if (!board || !Array.isArray(reasons)) return;

    board.innerHTML = '';

    const rotations = [-2.5, 1.8, -1.2, 2.8, -2, 1.5, -1.8, 2, -2.2, 1.2];

    reasons.forEach((reason, index) => {
        const card = document.createElement('div');
        const colorClass = `postit-${reason.color || 'lavender'}`;
        card.className = `postit-card ${colorClass}`;

        const rot = rotations[index % rotations.length];
        card.style.transform = `rotate(${rot}deg)`;

        const iconSvg = getSvgIcon(reason.icon || 'heart', 'postit-svg-icon', 20);

        card.innerHTML = `
            <div class="postit-tape-strip"></div>
            <div class="postit-header">
                <span class="postit-number">#${reason.number}</span>
                <span class="postit-icon">${iconSvg}</span>
            </div>
            <h3 class="postit-title">${reason.title}</h3>
            <p class="postit-text">${reason.text}</p>
            <div class="postit-corner-curl"></div>
        `;

        card.addEventListener('click', () => {
            const rect = card.getBoundingClientRect();
            createHeartBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
            playSparkleSound();

            card.style.transform = `scale(1.08) rotate(${rot * -1.2}deg)`;
            setTimeout(() => {
                card.style.transform = `rotate(${rot}deg)`;
            }, 350);
        });

        board.appendChild(card);
    });
}

/* -------------------------------------------------------------------
   7. SORPRESA FINAL (SOBRE INTERACTIVO & CUPÓN DE REGALO)
   ------------------------------------------------------------------- */
function initSurpriseSection() {
    const { surprise } = scrapbookData;
    if (!surprise) return;

    const envelopePrompt = document.getElementById('envelopePrompt');
    const envelope = document.getElementById('envelopeInteractive');
    const modalBackdrop = document.getElementById('giftModalBackdrop');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const celebrateAgainBtn = document.getElementById('celebrateAgainBtn');

    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const couponTag = document.getElementById('couponTag');
    const couponTitle = document.getElementById('couponTitle');
    const couponIncludesList = document.getElementById('couponIncludesList');
    const couponCode = document.getElementById('couponCode');
    const couponTerms = document.getElementById('couponTerms');
    const modalPersonalMsg = document.getElementById('modalPersonalMsg');

    if (envelopePrompt && surprise.envelopePrompt) envelopePrompt.textContent = surprise.envelopePrompt;
    if (modalTitle && surprise.modalTitle) modalTitle.textContent = surprise.modalTitle;
    if (modalSubtitle && surprise.modalSubtitle) modalSubtitle.textContent = surprise.modalSubtitle;
    if (modalPersonalMsg && surprise.specialMessage) modalPersonalMsg.textContent = surprise.specialMessage;

    if (surprise.coupon) {
        if (couponTag) couponTag.textContent = surprise.coupon.tag;
        if (couponTitle) couponTitle.textContent = surprise.coupon.title;
        if (couponCode) couponCode.textContent = surprise.coupon.code;
        if (couponTerms) couponTerms.textContent = surprise.coupon.terms;

        if (couponIncludesList && Array.isArray(surprise.coupon.includes)) {
            couponIncludesList.innerHTML = '';
            surprise.coupon.includes.forEach((inc) => {
                const li = document.createElement('li');
                li.className = 'voucher-feature-item';
                const iconName = typeof inc === 'object' ? inc.icon : 'check';
                const text = typeof inc === 'object' ? inc.text : inc;
                li.innerHTML = `
                    <span class="voucher-feature-icon">${getSvgIcon(iconName, '', 16)}</span>
                    <span class="voucher-feature-text">${text}</span>
                `;
                couponIncludesList.appendChild(li);
            });
        }
    }

    function openSurprise() {
        if (!envelope || !modalBackdrop) return;
        envelope.classList.add('opened');

        launchFullCelebration();
        playCelebrationChime();

        setTimeout(() => {
            modalBackdrop.classList.remove('hidden');
        }, 600);
    }

    if (envelope) {
        envelope.addEventListener('click', openSurprise);
        envelope.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openSurprise();
            }
        });
    }

    if (closeModalBtn && modalBackdrop) {
        closeModalBtn.addEventListener('click', () => {
            modalBackdrop.classList.add('hidden');
        });

        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                modalBackdrop.classList.add('hidden');
            }
        });
    }

    if (celebrateAgainBtn) {
        celebrateAgainBtn.addEventListener('click', () => {
            launchFullCelebration();
            playCelebrationChime();
        });
    }
}

/* -------------------------------------------------------------------
   8. CIERRE Y FIRMA FINAL
   ------------------------------------------------------------------- */
function renderClosing() {
    const { closing } = scrapbookData;
    if (!closing) return;

    const closingQuote = document.getElementById('closingQuote');
    const closingPhrase = document.getElementById('closingPhrase');
    const closingSignoff = document.getElementById('closingSignoff');
    const closingAuthor = document.getElementById('closingAuthor');

    if (closingQuote && closing.quote) closingQuote.textContent = closing.quote;
    if (closingPhrase && closing.phrase) closingPhrase.textContent = closing.phrase;
    if (closingSignoff && closing.signoff) closingSignoff.textContent = closing.signoff;
    if (closingAuthor && closing.author) closingAuthor.textContent = closing.author;
}

/* -------------------------------------------------------------------
   9. REPRODUCTOR DE MÚSICA & SÍNTESIS ACÚSTICA ROMÁNTICA
   ------------------------------------------------------------------- */
let isPlaying = false;
let audioContext = null;
let synthInterval = null;

function initMusicPlayer() {
    const { music } = scrapbookData;
    const audio = document.getElementById('bgAudio');
    const widget = document.getElementById('cassetteWidget');
    const playBtn = document.getElementById('musicPlayBtn');
    const playIcon = document.getElementById('playIconSvg');
    const pauseIcon = document.getElementById('pauseIconSvg');
    const titleDisplay = document.getElementById('musicTitleDisplay');

    if (titleDisplay && music) {
        titleDisplay.textContent = `${music.title} - ${music.artist}`;
    }

    function toggleMusic() {
        if (!isPlaying) {
            startPlayback();
        } else {
            pausePlayback();
        }
    }

    function startPlayback() {
        if (audio) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setPlayingUI(true);
                    })
                    .catch((err) => {
                        console.log('Audio local bloqueado o no reproducible, iniciando respaldo sintético:', err.message);
                        startSyntheticMusic();
                        setPlayingUI(true);
                    });
            }
        } else {
            startSyntheticMusic();
            setPlayingUI(true);
        }
    }

    function pausePlayback() {
        if (audio && !audio.paused) {
            audio.pause();
        }
        stopSyntheticMusic();
        setPlayingUI(false);
    }

    function setPlayingUI(playing) {
        isPlaying = playing;
        if (widget) widget.classList.toggle('playing', playing);
        if (playIcon) playIcon.classList.toggle('hidden', playing);
        if (pauseIcon) pauseIcon.classList.toggle('hidden', !playing);
    }

    if (widget) widget.addEventListener('click', toggleMusic);
    if (playBtn) {
        playBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMusic();
        });
    }
}

function startSyntheticMusic() {
    stopSyntheticMusic();
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        audioContext = new AudioCtx();

        const notes = [
            261.63, 329.63, 392.00, 493.88, 523.25,
            392.00, 440.00, 523.25, 587.33, 659.25,
            523.25, 392.00, 329.63, 261.63
        ];
        let noteIndex = 0;

        synthInterval = setInterval(() => {
            if (!audioContext) return;
            playSoftChime(notes[noteIndex % notes.length], audioContext);
            noteIndex++;
        }, 450);
    } catch (e) {
        console.error('Error al inicializar Web Audio:', e);
    }
}

function stopSyntheticMusic() {
    if (synthInterval) {
        clearInterval(synthInterval);
        synthInterval = null;
    }
    if (audioContext && audioContext.state !== 'closed') {
        audioContext.close().catch(() => { });
        audioContext = null;
    }
}

function playSoftChime(freq, ctx) {
    if (!ctx || ctx.state === 'closed') return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.85);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.9);
}

function playSparkleSound() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
            setTimeout(() => {
                playSoftChime(freq, ctx);
            }, idx * 60);
        });
        setTimeout(() => ctx.close().catch(() => { }), 800);
    } catch (e) { }
}

function playCelebrationChime() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const chords = [392.00, 523.25, 659.25, 783.99, 1046.50];
        chords.forEach((freq, idx) => {
            setTimeout(() => {
                playSoftChime(freq, ctx);
            }, idx * 90);
        });
        setTimeout(() => ctx.close().catch(() => { }), 1200);
    } catch (e) { }
}

/* -------------------------------------------------------------------
   10. SISTEMA DE PARTÍCULAS MÁGICAS (CORAZONES Y CONFETI)
   ------------------------------------------------------------------- */
let particles = [];
let animFrameId = null;

function initMagicParticles() {
    const canvas = document.getElementById('magicParticlesCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    window.addEventListener('pointerdown', (e) => {
        createHeartBurst(e.clientX, e.clientY, 4);
    });

    function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.update();
            p.draw(ctx);

            if (p.life <= 0 || p.y > canvas.height + 50) {
                particles.splice(i, 1);
            }
        }

        if (particles.length > 0) {
            animFrameId = requestAnimationFrame(loop);
        } else {
            animFrameId = null;
        }
    }

    window.startParticleLoop = function () {
        if (!animFrameId) {
            animFrameId = requestAnimationFrame(loop);
        }
    };
}

class Particle {
    constructor(x, y, type = 'heart') {
        this.x = x;
        this.y = y;
        this.type = type;
        this.colors = ['#c084fc', '#9333ea', '#e9d5ff', '#f59e0b', '#f43f5e', '#fbbf24', '#ffffff'];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.size = type === 'heart' ? Math.random() * 12 + 10 : Math.random() * 8 + 6;
        this.vx = (Math.random() - 0.5) * (type === 'heart' ? 3 : 8);
        this.vy = type === 'heart' ? -(Math.random() * 3 + 2) : -(Math.random() * 7 + 4);
        this.gravity = type === 'heart' ? -0.04 : 0.22;
        this.life = 1;
        this.decay = Math.random() * 0.015 + 0.012;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.rotation += this.rotSpeed;
        this.life -= this.decay;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = Math.max(0, this.life);

        if (this.type === 'heart') {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            const s = this.size / 15;
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(-5 * s, -7 * s, -14 * s, -1 * s, 0, 12 * s);
            ctx.bezierCurveTo(14 * s, -1 * s, 5 * s, -7 * s, 0, 0);
            ctx.fill();
        } else {
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.6);
        }

        ctx.restore();
    }
}

function createHeartBurst(x, y, count = 6) {
    for (let i = 0; i < count; i++) {
        particles.push(new Particle(x, y, 'heart'));
    }
    if (window.startParticleLoop) window.startParticleLoop();
}

function launchFullCelebration() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    for (let i = 0; i < 90; i++) {
        particles.push(new Particle(w * 0.3 + (Math.random() - 0.5) * 200, h * 0.6, 'confetti'));
        particles.push(new Particle(w * 0.7 + (Math.random() - 0.5) * 200, h * 0.6, 'confetti'));
    }
    for (let i = 0; i < 35; i++) {
        particles.push(new Particle(w * 0.5, h * 0.5, 'heart'));
    }

    if (window.startParticleLoop) window.startParticleLoop();
}

/* -------------------------------------------------------------------
   11. EFECTOS DE SCROLL & BOTÓN VOLVER ARRIBA
   ------------------------------------------------------------------- */
function initScrollEffects() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        if (scrollTopBtn) {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.remove('hidden');
            } else {
                scrollTopBtn.classList.add('hidden');
            }
        }
    }, { passive: true });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
