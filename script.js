// ### Menu mobile ###

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

});


// ### Fermeture du menu ###

document.querySelectorAll("#navigation a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

    });

});


// ### Animations au scroll ###

const animatedElements = document.querySelectorAll(
    ".timeline-item, .destination, .future-card, .about-main, .personality-card, .photo-card"
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
        threshold: 0.12
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
        author: "— Une règle de vie assez personnelle"
    },

    {
        text: "« Il faut toujours avoir quelque chose à dire. »",
        author: "— Anaïs, probablement"
    }

];

let currentQuote = 0;

const quote = document.getElementById("quote");
const quoteAuthor = document.getElementById("quoteAuthor");
const quoteCounter = document.getElementById("quoteCounter");

const nextQuote = document.getElementById("nextQuote");
const previousQuote = document.getElementById("previousQuote");

function updateQuote() {

    quote.style.opacity = "0";

    setTimeout(() => {

        quote.textContent = quotes[currentQuote].text;

        quoteAuthor.textContent =
            quotes[currentQuote].author;

        quoteCounter.textContent =
            `${String(currentQuote + 1).padStart(2,"0")} / ${String(quotes.length).padStart(2,"0")}`;

        quote.style.opacity = "1";

    },200);

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


// ### Interaction Shelby ###

const carButton = document.getElementById("carButton");

carButton.addEventListener("click", () => {

    carButton.textContent = "VROUM";

    carButton.style.transform = "scale(1.15)";

    setTimeout(() => {

        carButton.textContent = "▶";

        carButton.style.transform = "scale(1)";

    },1000);

});


// ### Effet photo ###

document.querySelectorAll(".photo-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.zIndex = "5";

    });

    card.addEventListener("mouseleave", () => {

        card.style.zIndex = "1";

    });

});


// ### Message console ###

console.log(
    "Bienvenue dans l'univers d'Anaïs. ♊"
);
