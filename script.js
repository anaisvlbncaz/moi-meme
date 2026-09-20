const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");
        document.body.classList.toggle("menu-open");

    });

    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");
            document.body.classList.remove("menu-open");

        });

    });

}


const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {

    revealObserver.observe(element);

});


const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow && window.innerWidth > 900) {

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    document.addEventListener("mousemove", event => {

        mouseX = event.clientX;
        mouseY = event.clientY;

    });

    function animateGlow() {

        glowX += (mouseX - glowX) * 0.12;
        glowY += (mouseY - glowY) * 0.12;

        cursorGlow.style.left = `${glowX}px`;
        cursorGlow.style.top = `${glowY}px`;

        requestAnimationFrame(animateGlow);

    }

    animateGlow();

}


const hero = document.querySelector(".hero");
const heroPhoto = document.querySelector(".hero-instax");

if (hero && heroPhoto && window.innerWidth > 900) {

    hero.addEventListener("mousemove", event => {

        const rect = hero.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        heroPhoto.style.transform =
            `rotate(${7 + x * 7}deg) translate(${x * 15}px, ${y * 15}px)`;

    });

    hero.addEventListener("mouseleave", () => {

        heroPhoto.style.transform = "rotate(7deg)";

    });

}


const quotes = [
    {
        text: "« Un problème sans solution est un problème mal posé. »",
        author: "— Une façon de voir les choses"
    },
    {
        text: "« Il faut toujours viser la lune, car même en cas d'échec, on atterrit dans les étoiles. »",
        author: "— Oscar Wilde"
    },
    {
        text: "« La vie est trop courte pour ne pas en profiter. »",
        author: "— Et ça, je compte bien l'appliquer."
    }
];

let currentQuote = 0;

const quoteElement = document.getElementById("quote");
const quoteAuthor = document.getElementById("quoteAuthor");
const quoteCounter = document.getElementById("quoteCounter");

const previousQuote = document.getElementById("previousQuote");
const nextQuote = document.getElementById("nextQuote");

function displayQuote(index) {

    if (!quoteElement || !quoteAuthor || !quoteCounter) {
        return;
    }

    quoteElement.style.opacity = "0";
    quoteAuthor.style.opacity = "0";

    setTimeout(() => {

        quoteElement.textContent = quotes[index].text;
        quoteAuthor.textContent = quotes[index].author;

        quoteCounter.textContent =
            `${String(index + 1).padStart(2, "0")} / ${String(quotes.length).padStart(2, "0")}`;

        quoteElement.style.opacity = "1";
        quoteAuthor.style.opacity = "1";

    }, 180);

}

if (nextQuote) {

    nextQuote.addEventListener("click", () => {

        currentQuote++;

        if (currentQuote >= quotes.length) {
            currentQuote = 0;
        }

        displayQuote(currentQuote);

    });

}

if (previousQuote) {

    previousQuote.addEventListener("click", () => {

        currentQuote--;

        if (currentQuote < 0) {
            currentQuote = quotes.length - 1;
        }

        displayQuote(currentQuote);

    });

}


const carButton = document.getElementById("carButton");

if (carButton) {

    let carClicked = false;

    carButton.addEventListener("click", () => {

        carClicked = !carClicked;

        if (carClicked) {

            carButton.textContent = "VROOOOOUM 💨";

            carButton.style.background = "#b9efd9";

        } else {

            carButton.textContent = "VROUM →";

            carButton.style.background = "";

        }

    });

}


const photoCards = document.querySelectorAll(".retro-photo");

photoCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("photo-selected");

    });

});


const navLinks = document.querySelectorAll(".navbar nav a");

const sections = document.querySelectorAll(
    "main section[id]"
);

const sectionObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                return;
            }

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    `#${entry.target.id}`
                ) {

                    link.classList.add("active");

                }

            });

        });

    },
    {
        threshold: 0.35
    }
);

sections.forEach(section => {

    sectionObserver.observe(section);

});


window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    const heroSun = document.querySelector(".hero-sun");

    if (heroSun && scrollPosition < window.innerHeight) {

        heroSun.style.transform =
            `translateY(${scrollPosition * 0.08}px)`;

    }

});


const skillBars = document.querySelectorAll(".skill-bar span");

const skillObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.animationPlayState = "running";

                skillObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.4
    }
);

skillBars.forEach(bar => {

    bar.style.animationPlayState = "paused";

    skillObserver.observe(bar);

});


window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
