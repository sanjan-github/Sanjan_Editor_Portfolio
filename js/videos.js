import { getProjectById } from "./projects.js";

function buildFallbackPayload(button) {
    return {
        title: button.dataset.slotTitle || "Media slot",
        description:
            button.dataset.slotDescription ||
            "Add a poster and Cloudinary delivery URL to publish this project.",
        instagram: button.dataset.instagram || ""
    };
}

export function initVideos() {
    const dialog = document.querySelector("#video-dialog");

    if (!dialog) {
        return;
    }

    const closeButton = dialog.querySelector("[data-action='close-video']");
    const retryButton = dialog.querySelector("[data-video-retry]");
    const video = dialog.querySelector("[data-video-element]");
    const fallback = dialog.querySelector("[data-video-fallback]");
    const title = dialog.querySelector("#video-dialog-title");
    const status = dialog.querySelector("#video-dialog-status");
    const description = dialog.querySelector("[data-video-description]");
    const instagramLink = dialog.querySelector("[data-video-instagram]");

    if (!closeButton || !retryButton || !video || !fallback || !title || !status || !description || !instagramLink) {
        return;
    }

    let lastTrigger = null;
    let activePayload = null;

    const resetVideo = () => {
        video.pause();
        video.removeAttribute("src");
        video.removeAttribute("poster");
        video.load();
        video.hidden = true;
        fallback.hidden = false;
        retryButton.hidden = true;
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

    const openFallback = (payload) => {
        activePayload = payload;
        resetVideo();
        status.textContent = "Portfolio playback";
        title.textContent = payload.title;
        description.textContent = payload.description;
        updateInstagramLink(payload.instagram);
        dialog.showModal();
        closeButton.focus();
    };

    const openProjectVideo = (project) => {
        activePayload = project;
        resetVideo();
        title.textContent = project.title;
        description.textContent = project.summary || project.description || "Cloudinary video playback opens inside the portfolio.";
        updateInstagramLink(project.instagram);

        if (!project.video) {
            status.textContent = "Media pending";
            dialog.showModal();
            closeButton.focus();
            return;
        }

        status.textContent = "Loading video";
        fallback.hidden = true;
        video.hidden = false;

        if (project.poster) {
            video.poster = project.poster;
        }

        video.src = project.video;
        video.load();
        dialog.showModal();
        closeButton.focus();

        const handleLoaded = () => {
            status.textContent = "Now playing";

            const playPromise = video.play();

            if (playPromise && typeof playPromise.catch === "function") {
                playPromise.catch(() => {
                    status.textContent = "Ready to play";
                });
            }
        };

        const handleError = () => {
            status.textContent = "Unable to load video";
            description.textContent = "This video could not be loaded right now. Try again or use Instagram if it is available.";
            retryButton.hidden = false;
            fallback.hidden = false;
            video.hidden = true;
        };

        video.addEventListener("loadeddata", handleLoaded, { once: true });
        video.addEventListener("error", handleError, { once: true });
    };

    document.addEventListener("click", (event) => {
        const trigger = event.target.closest("[data-action='open-video']");

        if (!trigger) {
            return;
        }

        lastTrigger = trigger;

        const projectId = trigger.dataset.projectId;

        if (projectId) {
            const project = getProjectById(projectId);

            if (project) {
                openProjectVideo(project);
                return;
            }
        }

        openFallback(buildFallbackPayload(trigger));
    });

    retryButton.addEventListener("click", () => {
        if (!activePayload || !activePayload.video) {
            return;
        }

        openProjectVideo(activePayload);
    });

    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });

    dialog.addEventListener("close", () => {
        resetVideo();

        if (lastTrigger instanceof HTMLElement) {
            lastTrigger.focus();
        }
    });
}
