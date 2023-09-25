// Atrodam visus elementus ar klasi "cell-content"
const cellContents = document.querySelectorAll(".cell-content");

// Atver video lightbox, kad uz kāda elementa tiek nospiež
cellContents.forEach((content) => {
    content.addEventListener("click", () => {
        const videoSrc = content.parentElement.getAttribute("data-video");
        openVideoLightbox(videoSrc);
    });
});

// Pievienojam klausītāju lightbox aizvēršanai
const closeIcon = document.querySelector(".close-icon");
closeIcon.addEventListener("click", closeVideoLightbox);

// Funkcija, kas atver video lightbox
function openVideoLightbox(videoSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxVideo = document.getElementById("lightbox-video");

    // Iestatām video src un parādam lightbox
    lightboxVideo.src = videoSrc;
    lightbox.style.display = "block";

    // Atskaņojam video
    lightboxVideo.play();
}

// Funkcija, kas aizver video lightbox
function closeVideoLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxVideo = document.getElementById("lightbox-video");

    // Apturam video atskaņošanu un aizveram lightbox
    lightboxVideo.pause();
    lightboxVideo.src = ""; // Notīram video src, lai pārtrauktu atskaņošanu
    lightbox.style.display = "none";
}
