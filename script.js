/* =====================================
   SETTINGS
===================================== */

const SECRET_CODE = "071004";

/*
   Apni birthday date yahan change karo.

   Format:

   YYYY-MM-DDTHH:MM:SS

   Example:
   30 September 2026

   = 2026-09-30T00:00:00
*/

const BIRTHDAY_DATE =
    new Date("2026-10-07T00:00:00");


/* =====================================
   PARTICLES
===================================== */

const particleContainer =
    document.getElementById("particles");


for (let i = 0; i < 70; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        5 + Math.random() * 10 + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.width =
        2 + Math.random() * 4 + "px";

    particle.style.height =
        particle.style.width;

    particleContainer.appendChild(particle);
}


/* =====================================
   SECRET CODE
===================================== */

const unlockButton =
    document.getElementById("unlockBtn");

const secretInput =
    document.getElementById("secretInput");

const lockScreen =
    document.getElementById("lockScreen");

const mainContent =
    document.getElementById("mainContent");

const errorMessage =
    document.getElementById("errorMessage");


unlockButton.addEventListener("click", unlockWebsite);


secretInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        unlockWebsite();

    }

});


function unlockWebsite() {

    const enteredCode =
        secretInput.value.trim();


    if (enteredCode === SECRET_CODE) {

        lockScreen.style.opacity = "0";

        lockScreen.style.transition =
            "opacity 0.8s ease";


        setTimeout(() => {

            lockScreen.classList.add("hidden");

            mainContent.classList.remove("hidden");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            createConfetti();

        }, 800);


    } else {

        errorMessage.textContent =
            "Oops! Wrong code ❤️ Try again.";

        secretInput.value = "";

        secretInput.focus();

    }

}


/* =====================================
   COUNTDOWN
===================================== */

function updateCountdown() {

    const now =
        new Date().getTime();

    const target =
        BIRTHDAY_DATE.getTime();

    const difference =
        target - now;


    if (difference <= 0) {

        document.getElementById("days").textContent =
            "00";

        document.getElementById("hours").textContent =
            "00";

        document.getElementById("minutes").textContent =
            "00";

        document.getElementById("seconds").textContent =
            "00";

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60))
            /
            1000
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =====================================
   SCROLL FUNCTION
===================================== */

function scrollToSection(id) {

    const section =
        document.getElementById(id);

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================
   BALLOONS
===================================== */

const balloons =
    document.querySelectorAll(".balloon");

const balloonMessage =
    document.getElementById("balloonMessage");


balloons.forEach(balloon => {

    balloon.addEventListener("click", function() {

        if (balloon.classList.contains("pop")) {
            return;
        }


        const message =
            balloon.dataset.message;


        balloon.classList.add("pop");


        balloonMessage.textContent =
            message;


        createMiniHearts();


        setTimeout(() => {

            balloonMessage.textContent = "";

        }, 4000);

    });

});


/* =====================================
   MINI HEARTS
===================================== */

function createMiniHearts() {

    for (let i = 0; i < 10; i++) {

        const heart =
            document.createElement("div");

        heart.textContent = "❤️";

        heart.style.position =
            "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom =
            "-30px";

        heart.style.fontSize =
            15 + Math.random() * 20 + "px";

        heart.style.zIndex =
            "999";

        heart.style.pointerEvents =
            "none";

        document.body.appendChild(heart);


        const animation =
            heart.animate(

                [
                    {
                        transform:
                            "translateY(0) scale(0.5)",
                        opacity: 0
                    },

                    {
                        transform:
                            "translateY(-50vh) scale(1)",
                        opacity: 1
                    },

                    {
                        transform:
                            "translateY(-100vh) scale(0.3)",
                        opacity: 0
                    }
                ],

                {
                    duration:
                        2000 + Math.random() * 1500,

                    easing:
                        "ease-out"
                }

            );


        animation.onfinish = () => {

            heart.remove();

        };

    }

}


/* =====================================
   MEMORY SCROLL ANIMATION
===================================== */

const memoryCards =
    document.querySelectorAll(".memory-card");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.2
        }

    );


memoryCards.forEach(card => {

    observer.observe(card);

});


/* =====================================
   STARS
===================================== */

const stars =
    document.querySelectorAll(".star");

const wishMessage =
    document.getElementById("wishMessage");


stars.forEach((star, index) => {

    star.addEventListener("click", function() {

        star.classList.toggle("active");


        const wishes = [

            "May your dreams come true ✨",

            "May happiness always find you ❤️",

            "May this year be magical 🌙",

            "May you always keep smiling 😊",

            "May every day bring something beautiful 🌸",

            "May your heart always be peaceful 💕",

            "May your journey be full of adventures ✨",

            "May you achieve everything you wish for ⭐",

            "May love surround you always ❤️",

            "This wish is just for you 🌟"

        ];


        wishMessage.textContent =
            wishes[index];

    });

});


/* =====================================
   HEART COUNTER
===================================== */

const heartButton =
    document.getElementById("heartButton");

const heartCounter =
    document.getElementById("heartCounter");

const finalMessage =
    document.getElementById("finalMessage");


let heartCount = 0;


heartButton.addEventListener("click", function() {

    if (heartCount >= 20) {
        return;
    }


    heartCount++;


    heartCounter.textContent =
        `${heartCount} / 20`;


    heartButton.classList.remove("clicked");


    void heartButton.offsetWidth;


    heartButton.classList.add("clicked");


    createMiniHearts();


    if (heartCount === 20) {

        finalMessage.classList.add("show");

        createConfetti();

    }

});


/* =====================================
   CONFETTI
===================================== */

function createConfetti() {

    const symbols = [
        "✦",
        "♥",
        "✧",
        "•",
        "★"
    ];


    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti");


        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.animationDuration =
            2 + Math.random() * 3 + "s";


        piece.style.animationDelay =
            Math.random() * 1.5 + "s";


        piece.style.fontSize =
            10 + Math.random() * 20 + "px";


        piece.style.color =
            [
                "#e5b378",
                "#ffffff",
                "#d58b91",
                "#f3d195"
            ][
                Math.floor(
                    Math.random() * 4
                )
            ];


        document.body.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 6000);

    }

}


