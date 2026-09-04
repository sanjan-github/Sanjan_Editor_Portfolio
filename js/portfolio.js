const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobileViewport = window.matchMedia('(max-width: 47.99rem)').matches;
const enableScrollMotion = !reduceMotion && !isMobileViewport;
const heroTitle = document.querySelector('.hero-title');
const parallaxItems = [...document.querySelectorAll('[data-parallax]')];
const activeParallaxItems = new Set(parallaxItems);
let ticking = false;

// On desktop, only calculate parallax for elements near the viewport.
if ('IntersectionObserver' in window && enableScrollMotion) {
    const parallaxObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) activeParallaxItems.add(entry.target);
            else activeParallaxItems.delete(entry.target);
        });
    }, { rootMargin: '25% 0px' });
    parallaxItems.forEach((element) => parallaxObserver.observe(element));
}

function updateHeroTitle() {
    if (!heroTitle) return;
    const hero = heroTitle.closest('.hero');
    const offset = hero ? Math.max(-18, Math.min(18, hero.getBoundingClientRect().top * -0.08)) : 0;
    heroTitle.style.setProperty('--hero-title-y', reduceMotion ? '0px' : `${Math.round(offset)}px`);
}

function updateParallax() {
    activeParallaxItems.forEach((element) => {
        const speed = Number(element.dataset.parallax || 0);
        const rect = element.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed * 1.35;
        element.style.setProperty('--parallax-y', reduceMotion ? '0px' : `${Math.round(offset)}px`);
    });
    ticking = false;
}

if (parallaxItems.length && enableScrollMotion) {
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax();
                updateHeroTitle();
            });
            ticking = true;
        }
    }, { passive: true });
    updateParallax();
    updateHeroTitle();
}

updateHeroTitle();
if (heroTitle && enableScrollMotion) {
    window.requestAnimationFrame(() => heroTitle.classList.add('hero-title-ready'));
}

const automaticTextTargets = [...document.querySelectorAll('h1, h2, h3, p, a, button, li, strong')]
    .filter((element) => element.textContent.trim() && !element.classList.contains('work-card-trigger') && !element.classList.classList.contains('hero-title') && !element.closest('.work-card'));

automaticTextTargets.forEach((element) => {
    if (!element.hasAttribute('data-reveal')) element.dataset.reveal = 'slide-up';
});
const revealTargets = [...new Set([...document.querySelectorAll('[data-reveal]'), ...automaticTextTargets])];
if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            // Reveal once: avoids repeated compositing work while scrolling on desktop.
            observer.unobserve(entry.target);
        });
    }, { threshold: isMobileViewport ? 0.06 : 0.12, rootMargin: '0px 0px -4% 0px' });
    revealTargets.forEach((element, index) => {
        element.classList.add('js-reveal');
        element.style.setProperty('--reveal-delay', enableScrollMotion ? `${Math.min(index * 24, 360)}ms` : '0ms');
        observer.observe(element);
    });
} else {
    revealTargets.forEach((element) => element.classList.add('is-visible'));
}

// Keep controls and supporting copy in each card's own layout layer.
// Video dimensions remain natural, preserving the original aspect ratio.
const cardLayoutFix = document.createElement('style');
cardLayoutFix.textContent = `
.work-card { position: relative; isolation: isolate; }
.work-card-media { position: relative; overflow: hidden; line-height: 0; }
.work-card video { display: block; width: 100%; height: auto; }
.work-card-actions { position: absolute; inset: auto 1rem 1rem auto; z-index: 4; max-width: calc(100% - 2rem); }
.work-card-meta { position: relative; zindex: 1; clear: both; transform: none; }
@media (max-width: 47.99rem) { .work-card-actions { inset: auto .65rem .65rem auto; } }
`;
document.head.append(cardLayoutFix);

const previewVideos = [...document.querySelectorAll('.work-card video')];

function updateAudioButton(video) {
    const button = video.closest('.work-card-media')?.querySelector('[data-video-audio]');
    if (!button) return;
    const isOn = !video.muted;
    button.textContent = isOn ? 'Sound on' : 'Sound off';
    button.setAttribute('aria-pressed', String(isOn));
    button.setAttribute('aria-label', isOn ? 'Turn this video sound off' : 'Turn this video sound on');
}

function keepOnlyOneAudio(video) {
    previewVideos.forEach((otherVideo) => {
        if (otherVideo === video) return;
        otherVideo.muted = true;
        updateAudioButton(otherVideo);
    });
}

previewVideos.forEach((video) => {
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    updateAudioButton(video);

    const startPreview = () => {
        if (document.visibilityState === 'hidden') return;
        video.play().catch(() => {});
    };

    video.addEventListener('loadeddata', startPreview, { once: true });
    video.addEventListener('canplay', startPreview, { once: true });
    video.addEventListener('volumechange', () => {
        if (!video.muted) keepOnlyOneAudio(video);
        updateAudioButton(video);
    });
    startPreview();

    const media = video.closest('.work-card-media');
    const playButton = media?.querySelector('[data-video-play]');
    const audioButton = media?.querySelector('[data-video-audio]');

    playButton?.addEventListener('click', () => {
        if (video.paused) {
            video.play().catch(() => {});
            playButton.textContent = 'Pause edit';
        } else {
            video.pause();
            playButton.textContent = 'Play edit ↗';
        }
    });

    video.addEventListener('play', () => {
        if (playButton) playButton.textContent = 'Pause edit';
    });
    video.addEventListener('pause', () => {
        if (playButton) playButton.textContent = 'Play edit ↗';
    });

    audioButton?.addEventListener('click', () => {
        video.muted = !video.muted;
        if (!video.muted) keepOnlyOneAudio(video);
        updateAudioButton(video);
        video.play().catch(() => {});
    });
});

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible') return;
    previewVideos.forEach((video) => {
        if (video.autoplay && video.paused) video.play().catch(() => {});
    });
});
