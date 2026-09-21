/* =====================================
   PAGE NAVIGATION
===================================== */

let currentPage = 1;
const totalPages = 11;

function showPage(pageNumber) {

    if (pageNumber < 1 || pageNumber > totalPages) {
        return;
    }

    // Remove active class from all pages
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    // Activate selected page
    const selectedPage = document.getElementById(`page${pageNumber}`);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    currentPage = pageNumber;

    // Update page counter
    const pageNumberElement = document.getElementById("pageNumber");

    if (pageNumberElement) {
        pageNumberElement.textContent =
            `${currentPage} / ${totalPages}`;
    }

    // Disable back button on first page
    const backButton = document.getElementById("backButton");

    if (backButton) {
        backButton.style.opacity =
            currentPage === 1 ? "0.4" : "1";
    }

    // Disable forward button on last page
    const forwardButton = document.getElementById("forwardButton");

    if (forwardButton) {
        forwardButton.style.opacity =
            currentPage === totalPages ? "0.4" : "1";
    }

    // Scroll page back to top
    if (selectedPage) {
        selectedPage.scrollTop = 0;
    }
}


/* NEXT PAGE */

function nextPage() {

    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
}


/* PREVIOUS PAGE */

function previousPage() {

    if (currentPage > 1) {
        showPage(currentPage - 1);
    }
}


/* =====================================
   OPEN SURPRISE
===================================== */

function openSurprise() {

    // Start music
    const music = document.getElementById("birthdayMusic");

    if (music) {

        music.volume = 0.55;

        music.play()
            .then(() => {

                musicPlaying = true;

                const musicButton =
                    document.getElementById("musicButton");

                if (musicButton) {
                    musicButton.textContent = "🎵";
                }

            })
            .catch(error => {

                console.log(
                    "Music could not start:",
                    error
                );

            });
    }

    // Move to page 2
    showPage(2);

    // Create celebration particles
    createHearts();
}


/* =====================================
   MUSIC CONTROL
===================================== */

let musicPlaying = false;

function toggleMusic() {

    const music =
        document.getElementById("birthdayMusic");

    const musicButton =
        document.getElementById("musicButton");

    if (!music) {
        return;
    }

    if (music.paused) {

        music.play();

        musicPlaying = true;

        if (musicButton) {
            musicButton.textContent = "🎵";
        }

    } else {

        music.pause();

        musicPlaying = false;

        if (musicButton) {
            musicButton.textContent = "🔇";
        }
    }
}


/* =====================================
   GALLERY
===================================== */

let currentPhoto = 0;

const galleryPhotos =
    document.querySelectorAll(".gallery-photo");


function showGalleryPhoto(index) {

    if (galleryPhotos.length === 0) {
        return;
    }

    galleryPhotos.forEach(photo => {
        photo.classList.remove("active-photo");
    });

    galleryPhotos[index].classList.add("active-photo");

    const count =
        document.getElementById("photoCount");

    if (count) {

        const photoNumber =
            String(index + 1).padStart(2, "0");

        const total =
            String(galleryPhotos.length).padStart(2, "0");

        count.textContent =
            `Photo ${photoNumber} / ${total}`;
    }
}


/* NEXT PHOTO */

function nextPhoto() {

    if (galleryPhotos.length === 0) {
        return;
    }

    currentPhoto++;

    if (currentPhoto >= galleryPhotos.length) {
        currentPhoto = 0;
    }

    showGalleryPhoto(currentPhoto);
}


/* PREVIOUS PHOTO */

function previousPhoto() {

    if (galleryPhotos.length === 0) {
        return;
    }

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = galleryPhotos.length - 1;
    }

    showGalleryPhoto(currentPhoto);
}


/* =====================================
   GIFT BOX
===================================== */

function openGift() {

    const gift =
        document.getElementById("gift");

    const giftMessage =
        document.getElementById("giftMessage");

    if (gift) {
        gift.classList.add("opened");
    }

    if (giftMessage) {
        giftMessage.classList.add("show");
    }

    // Create celebration
    createHearts();
    createSparkles();
    createPetals();

    // Change button text
    const button =
        document.querySelector(".gift-btn");

    if (button) {
        button.textContent =
            "💗 HAPPY BIRTHDAY PAGGU 💗";
    }
}


/* =====================================
   FLOATING HEARTS
===================================== */

function createHearts() {

    const numberOfHearts = 12;

    for (let i = 0; i < numberOfHearts; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "💗";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";

        heart.style.zIndex = "500";

        heart.style.pointerEvents = "none";

        heart.style.animation =
            `heartFloat ${3 + Math.random() * 3}s ease-out forwards`;

        heart.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
}


/* =====================================
   SPARKLES
===================================== */

function createSparkles() {

    const numberOfSparkles = 20;

    for (let i = 0; i < numberOfSparkles; i++) {

        const sparkle =
            document.createElement("div");

        sparkle.innerHTML = "✨";

        sparkle.style.position = "fixed";

        sparkle.style.left =
            Math.random() * 100 + "vw";

        sparkle.style.top =
            Math.random() * 100 + "vh";

        sparkle.style.fontSize =
            (10 + Math.random() * 18) + "px";

        sparkle.style.zIndex = "500";

        sparkle.style.pointerEvents = "none";

        sparkle.style.animation =
            `sparklePop ${1 + Math.random() * 2}s ease-out forwards`;

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 3000);
    }
}


/* =====================================
   FALLING PETALS
===================================== */

function createPetals() {

    const numberOfPetals = 18;

    for (let i = 0; i < numberOfPetals; i++) {

        const petal =
            document.createElement("div");

        petal.innerHTML =
            Math.random() > 0.5 ? "🌸" : "🌷";

        petal.style.position = "fixed";

        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.top = "-30px";

        petal.style.fontSize =
            (12 + Math.random() * 15) + "px";

        petal.style.zIndex = "450";

        petal.style.pointerEvents = "none";

        petal.style.animation =
            `petalFall ${4 + Math.random() * 4}s linear forwards`;

        petal.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 9000);
    }
}


/* =====================================
   ADD DYNAMIC ANIMATIONS
===================================== */

const dynamicStyle =
    document.createElement("style");

dynamicStyle.textContent = `

@keyframes heartFloat {

    0% {
        transform:
            translateY(0)
            scale(0.7)
            rotate(0deg);

        opacity: 0;
    }

    15% {
        opacity: 1;
    }

    100% {
        transform:
            translateY(-100vh)
            scale(1.3)
            rotate(20deg);

        opacity: 0;
    }
}


@keyframes sparklePop {

    0% {
        transform: scale(0) rotate(0deg);
        opacity: 0;
    }

    40% {
        transform: scale(1.4) rotate(90deg);
        opacity: 1;
    }

    100% {
        transform: scale(0) rotate(180deg);
        opacity: 0;
    }
}


@keyframes petalFall {

    0% {
        transform:
            translateY(0)
            rotate(0deg);

        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    50% {
        transform:
            translateY(50vh)
            translateX(40px)
            rotate(180deg);
    }

    100% {
        transform:
            translateY(110vh)
            translateX(-40px)
            rotate(360deg);

        opacity: 0;
    }
}

`;

document.head.appendChild(dynamicStyle);


/* =====================================
   KEYBOARD NAVIGATION
===================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        nextPage();
    }

    if (event.key === "ArrowLeft") {
        previousPage();
    }

});


/* =====================================
   INITIALIZE
===================================== */

document.addEventListener("DOMContentLoaded", function() {

    showPage(1);

    showGalleryPhoto(0);

});
