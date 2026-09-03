import { getProjectById } from "./projects.js";

export function initVideos() {
    const dialog = document.querySelector("#video-dialog");
    if (!dialog) return;

    const closeButton = dialog.querySelector("[data-action='close-video']");
    const retryButton = dialog.querySelector("[data-video-retry]");
    const video = dialog.querySelector("[data-video-element]");
    const fallback = dialog.querySelector("[data-video-fallback]");
    const title = dialog.querySelector("#video-dialog-title");
    const status = dialog.querySelector("#video-dialog-status");
    const description = dialog.querySelector("[data-video-description]");
    const instagramLink = dialog.querySelector("[data-video-instagram]");
    const audioButton = dialog.querySelector("[data-video-audio]");
    const seekInput = dialog.querySelector("[data-video-seek]");

    if (!closeButton || !retryButton || !video || !fallback || !title || !status || !description || !instagramLink || !audioButton || !seekInput) return;

    let lastTrigger = null;
    let activePayload = null;
    let isScrubbing = false;

    const updateAudioButton = () => {
        const isOn = !video.muted;
        audioButton.textContent = isOn ? "Sound: on" : "Sound: off";
        audioButton.setAttribute("aria-pressed", String(isOn));
        audioButton.setAttribute("aria-label", isOn ? "Turn video sound off" : "Turn video sound on");
    };

    const resetVideo = () => {
        video.pause();
        video.removeAttribute("src");
        video.removeAttribute("poster");
        video.load();
        video.hidden = true;
        video.style.removeProperty("aspect-ratio");
        fallback.hidden = false;
        retryButton.hidden = true;
        seekInput.value = "0";
        video.muted = true;
        updateAudioButton();
    };

    const updateInstagramLink = (instagramUrl) => {
        if (!instagramUrl) {
            instagramLink.hidden = true;
            instagramLink.removeAttribute("href");
            return;
        }
        instagramLink.hidden = false;
        instagramLink.href = instagramUrl;
    };

    const openPayload = (payload) => {
        activePayload = payload;
        resetVideo();
        title.textContent = payload.title || "Video edit";
        description.textContent = payload.summary || payload.description || "Cloudinary video playback opens inside the portfolio.";
        updateInstagramLink(payload.instagram);

        if (!payload.video) {
            status.textContent = "Media pending";
            dialog.showModal();
            closeButton.focus();
            return;
        }

        status.textContent = "Loading video";
        fallback.hidden = true;
        video.hidden = false;
        video.src = payload.video;
        video.load();
        video.muted = true;
        updateAudioButton();
        dialog.showModal();
        closeButton.focus();

        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => { status.textContent = "Ready to play"; });
        }
    };

    document.addEventListener("click", (event) => {
        const trigger = event.target.closest("[data-action='open-video']");
        if (!trigger) return;
        event.preventDefault();
        lastTrigger = trigger;
        const project = trigger.dataset.projectId ? getProjectById(trigger.dataset.projectId) : null;
        if (project) {
            openPayload(project);
            return;
        }
        openPayload({
            title: trigger.dataset.slotTitle || "Video edit",
            description: trigger.dataset.slotDescription || "Cloudinary video playback opens inside the portfolio.",
            instagram: trigger.dataset.instagram || "",
            video: trigger.dataset.videoSrc || ""
        });
    });

    retryButton.addEventListener("click", () => {
        if (activePayload) openPayload(activePayload);
    });

    audioButton.addEventListener("click", () => {
        video.muted = !video.muted;
        updateAudioButton();
        if (!video.paused) video.play().catch(() => {});
    });

    video.addEventListener("loadedmetadata", () => {
        if (video.videoWidth && video.videoHeight) video.style.aspectRatio = `${video.videoWidth} / ${video.videoHeight}`;
        status.textContent = "Now playing";
    });

    video.addEventListener("error", () => {
        status.textContent = "Unable to load video";
        description.textContent = "This video could not be loaded right now. Try again or use Instagram if it is available.";
        retryButton.hidden = false;
        fallback.hidden = false;
        video.hidden = true;
    });

    video.addEventListener("timeupdate", () => {
        if (!isScrubbing && video.duration) seekInput.value = String((video.currentTime / video.duration) * 100);
    });

    seekInput.addEventListener("input", () => {
        isScrubbing = true;
        if (video.duration) video.currentTime = (Number(seekInput.value) / 100) * video.duration;
    });
    seekInput.addEventListener("change", () => { isScrubbing = false; });

    closeButton.addEventListener("click", () => dialog.close());
    dialog.addEventListener("cancel", () => dialog.close());
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => {
        resetVideo();
        if (lastTrigger instanceof HTMLElement) lastTrigger.focus();
    });
}
