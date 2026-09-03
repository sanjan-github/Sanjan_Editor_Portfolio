const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const parallaxItems = [...document.querySelectorAll('[data-parallax]')];
let ticking = false;

function updateParallax() {
    parallaxItems.forEach((element) => {
        const speed = Number(element.dataset.parallax || 0);
        const rect = element.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
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

const revealTargets = [...document.querySelectorAll('[data-reveal]')];
if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
        });
    }, { threshold: 0.12 });
    revealTargets.forEach((element) => {
        element.classList.add('js-reveal');
        observer.observe(element);
    });
} else {
    revealTargets.forEach((element) => element.classList.add('is-visible'));
}

const videoModal = document.querySelector('#video-modal');

if (videoModal) {
    const modalVideo = videoModal.querySelector('[data-modal-video]');
    const modalTitle = videoModal.querySelector('[data-modal-title]');
    const modalStatus = videoModal.querySelector('[data-modal-status]');
    const modalError = videoModal.querySelector('[data-modal-error]');
    const closeButton = videoModal.querySelector('[data-modal-close]');
    const audioButton = videoModal.querySelector('[data-modal-audio]');
    const seekInput = videoModal.querySelector('[data-modal-seek]');
    let lastTrigger = null;
    let isScrubbing = false;

    const updateAudioButton = () => {
        const isOn = !modalVideo.muted;
        audioButton.textContent = isOn ? 'Sound: on' : 'Sound: off';
        audioButton.setAttribute('aria-pressed', String(isOn));
        audioButton.setAttribute('aria-label', isOn ? 'Turn video sound off' : 'Turn video sound on');
    };

    const resetModalVideo = () => {
        modalVideo.pause();
        modalVideo.removeAttribute('src');
        modalVideo.load();
        modalVideo.style.removeProperty('aspect-ratio');
        seekInput.value = '0';
        modalError.hidden = true;
        modalStatus.textContent = 'Portfolio playback';
    };

    const openVideoModal = (src, title, trigger) => {
        if (!src) return;
        lastTrigger = trigger;
        document.querySelectorAll('.work-card video, .project-card__video').forEach((preview) => preview.pause());
        resetModalVideo();
        modalVideo.src = src;
        modalVideo.muted = true;
        modalTitle.textContent = title || 'Video edit';
        modalStatus.textContent = 'Loading video';
        updateAudioButton();
        videoModal.showModal();
        closeButton.focus();

        const playPromise = modalVideo.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {
                modalStatus.textContent = 'Ready to play';
            });
        }
    };

    document.addEventListener('click', (event) => {
        const trigger = event.target.closest('[data-action="open-video"]');
        if (!trigger) return;

        event.preventDefault();
        const project = trigger.dataset.projectId;
        if (project) {
            const projectRecord = window.projectCatalog?.find((item) => item.id === project);
            if (projectRecord?.video) {
                openVideoModal(projectRecord.video, projectRecord.title, trigger);
                return;
            }
        }
        openVideoModal(trigger.dataset.videoSrc, trigger.dataset.videoTitle, trigger);
    });

    document.querySelectorAll('.work-card video').forEach((preview) => {
        preview.muted = true;
        preview.addEventListener('loadedmetadata', () => {
            const media = preview.closest('.work-card-media');
            if (media && preview.videoWidth && preview.videoHeight) {
                media.style.aspectRatio = `${preview.videoWidth} / ${preview.videoHeight}`;
            }
        });
        preview.addEventListener('error', () => {
            preview.closest('.work-card-media')?.classList.add('has-video-error');
        });
    });

    audioButton.addEventListener('click', () => {
        modalVideo.muted = !modalVideo.muted;
        updateAudioButton();
        if (!modalVideo.paused) modalVideo.play().catch(() => {});
    });

    modalVideo.addEventListener('loadedmetadata', () => {
        if (modalVideo.videoWidth && modalVideo.videoHeight) {
            modalVideo.style.aspectRatio = `${modalVideo.videoWidth} / ${modalVideo.videoHeight}`;
        }
        modalStatus.textContent = 'Now playing';
    });

    modalVideo.addEventListener('error', () => {
        modalStatus.textContent = 'Unable to load video';
        modalError.hidden = false;
    });

    modalVideo.addEventListener('timeupdate', () => {
        if (!isScrubbing && modalVideo.duration) {
            seekInput.value = String((modalVideo.currentTime / modalVideo.duration) * 100);
        }
    });

    seekInput.addEventListener('input', () => {
        isScrubbing = true;
        if (modalVideo.duration) modalVideo.currentTime = (Number(seekInput.value) / 100) * modalVideo.duration;
    });

    seekInput.addEventListener('change', () => { isScrubbing = false; });
    closeButton.addEventListener('click', () => videoModal.close());
    videoModal.addEventListener('cancel', () => videoModal.close());
    videoModal.addEventListener('click', (event) => {
        if (event.target === videoModal) videoModal.close();
    });
    videoModal.addEventListener('close', () => {
        resetModalVideo();
        if (lastTrigger instanceof HTMLElement) lastTrigger.focus();
    });
}
