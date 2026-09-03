const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const parallaxItems = [...document.querySelectorAll('[data-parallax]')];
let ticking = false;

function updateParallax() {
    parallaxItems.forEach((element) => {
        const speed = Number(element.dataset.parallax || 0);
        const rect = element.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed * 1.35;
        element.style.setProperty('--parallax-y', reduceMotion ? '0px' : `${Math.round(offset)}px`);
    });
    ticking = false;
}

if (parallaxItems.length && !reduceMotion) {
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });
    updateParallax();
}

const automaticTextTargets = [...document.querySelectorAll('h1, h2, h3, p, a, button, li, strong')]
    .filter((element) => element.textContent.trim() && !element.classList.contains('work-card-trigger'));
automaticTextTargets.forEach((element) => {
    if (!element.hasAttribute('data-reveal')) element.dataset.reveal = 'slide-up';
});
const revealTargets = [...new Set([...document.querySelectorAll('[data-reveal]'), ...automaticTextTargets])];
if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
    }, { threshold: 0.12 });
    revealTargets.forEach((element, index) => {
        element.classList.add('js-reveal');
        element.style.setProperty('--reveal-delay', `${Math.min(index * 24, 360)}ms`);
        observer.observe(element);
    });
} else {
    revealTargets.forEach((element) => element.classList.add('is-visible'));
}

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

    video.addEventListener('loadeddata', startPreview);
    video.addEventListener('canplay', startPreview);
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
