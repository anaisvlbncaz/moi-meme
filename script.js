// ### Menu mobile ###

const menuButton = document.getElementById("menuButton");
const navigation = document.querySelector(".navbar nav");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

});


// ### Fermeture du menu après clic ###

const navigationLinks = document.querySelectorAll(".navbar nav a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

    });

});


// ### Apparition des éléments au scroll ###

const animatedElements = document.querySelectorAll(
    ".timeline-item, .passion-card, .destination, .future-card, .about-main, .personality-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach(element => {

    observer.observe(element);

});


// ### Curseur lumineux ###

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", event => {

    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;

});


// ### Citations ###

const quotes = [

    {
        text: "« Un problème sans solution est un problème mal posé. »",
        author: "— Une façon de voir les choses"
    },

    {
        text: "« C'est pas parce qu'on a rien à dire qu'il faut fermer sa gueule. »",
        author: "— Probablement une règle de vie"
    },

    {
        text: "« Il faut toujours avoir quelque chose à dire. »",
        author: "— Anaïs, probablement"
    }

];

let currentQuote = 0;

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("quoteAuthor");
const quoteCounter = document.getElementById("quoteCounter");

const nextQuote = document.getElementById("nextQuote");
const previousQuote = document.getElementById("previousQuote");

function updateQuote() {

    quoteText.style.opacity = "0";

    setTimeout(() => {

        quoteText.textContent = quotes[currentQuote].text;
        quoteAuthor.textContent = quotes[currentQuote].author;

        quoteCounter.textContent =
            `${String(currentQuote + 1).padStart(2, "0")} / ${String(quotes.length).padStart(2, "0")}`;

        quoteText.style.opacity = "1";

    }, 200);

}

nextQuote.addEventListener("click", () => {

    currentQuote++;

    if (currentQuote >= quotes.length) {
        currentQuote = 0;
    }

    updateQuote();

});


previousQuote.addEventListener("click", () => {

    currentQuote--;

    if (currentQuote < 0) {
        currentQuote = quotes.length - 1;
    }

    updateQuote();

});


// ### Interaction voiture ###

const carButton = document.getElementById("carButton");

carButton.addEventListener("click", () => {

    carButton.textContent = "VROUM";

    setTimeout(() => {

        carButton.textContent = "▶";

    }, 1200);

});


// ### Apparition progressive de la page ###

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// ### Effet sur les cartes de passions ###

const passionCards = document.querySelectorAll(".passion-card");

passionCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


// ### Message dans la console ###

console.log(
    "Bienvenue dans l'univers d'Anaïs. ♊"
);
