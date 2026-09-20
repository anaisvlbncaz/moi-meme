### LOADER ###

window.addEventListener("load", () => {

    const loader = document.querySelector(".page-loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 700);

});


### NAVIGATION MOBILE ###

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        menuButton.classList.toggle("active");

    });


    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

            menuButton.classList.remove("active");

        });

    });

}


### NAVBAR AU SCROLL ###

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


### APPARITION DES ÉLÉMENTS ###

const revealElements = document.querySelectorAll(
    ".about-grid, .personality-board, .value-card, .timeline-card, .skill, .polaroid, .dream-car, .dublin-content, .dublin-photo, .travel-list article, .future-content, .future-card, .quote-inner, .contact-content"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});


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


### BARRES DE COMPÉTENCES ###

const skillsSection = document.querySelector(".skills-wrapper");

if (skillsSection) {

    const skillsObserver = new IntersectionObserver(

        entries => {

            if (entries[0].isIntersecting) {

                document
                    .querySelectorAll(".skill-bar i")
                    .forEach(bar => {

                        bar.classList.add("loaded");

                    });

                skillsObserver.disconnect();

            }

        },

        {
            threshold: 0.3
        }

    );

    skillsObserver.observe(skillsSection);

}


### CURSEUR ###

const cursor = document.querySelector(".cursor-glow");

if (cursor && window.matchMedia("(pointer: fine)").matches) {

    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;


    document.addEventListener("mousemove", event => {

        mouseX = event.clientX;
        mouseY = event.clientY;

    });


    function animateCursor() {

        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        requestAnimationFrame(animateCursor);

    }

    animateCursor();


    document.querySelectorAll("a, button, .polaroid, .value-card").forEach(element => {

        element.addEventListener("mouseenter", () => {

            cursor.style.width = "38px";
            cursor.style.height = "38px";
            cursor.style.background = "#f3a9bd";

        });


        element.addEventListener("mouseleave", () => {

            cursor.style.width = "22px";
            cursor.style.height = "22px";
            cursor.style.background = "#f3a9bd";

        });

    });

}


### CITATIONS ###

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
        text: "« La vie est courte, alors autant faire quelque chose qui nous plaît. »",
        author: "— Une règle personnelle"
    }

];


let currentQuote = 0;

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("quoteAuthor");
const counterElement = document.getElementById("quoteCounter");

const previousQuote = document.getElementById("previousQuote");
const nextQuote = document.getElementById("nextQuote");


function displayQuote(index) {

    if (!quoteElement || !authorElement || !counterElement) {
        return;
    }


    quoteElement.style.opacity = "0";
    quoteElement.style.transform = "translateY(10px)";


    setTimeout(() => {

        quoteElement.textContent = quotes[index].text;

        authorElement.textContent = quotes[index].author;

        counterElement.textContent =
            `${String(index + 1).padStart(2, "0")} / ${String(quotes.length).padStart(2, "0")}`;


        quoteElement.style.opacity = "1";
        quoteElement.style.transform = "translateY(0)";

    }, 200);

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


if (nextQuote) {

    nextQuote.addEventListener("click", () => {

        currentQuote++;

        if (currentQuote >= quotes.length) {
            currentQuote = 0;
        }

        displayQuote(currentQuote);

    });

}


### AUTOPLAY DES CITATIONS ###

setInterval(() => {

    currentQuote++;

    if (currentQuote >= quotes.length) {
        currentQuote = 0;
    }

    displayQuote(currentQuote);

}, 7000);


### DREAM CAR ###

const carButton = document.getElementById("carButton");

if (carButton) {

    carButton.addEventListener("click", () => {

        carButton.textContent = "🏎️";

        carButton.style.transform = "rotate(360deg) scale(1.15)";


        setTimeout(() => {

            carButton.textContent = "🏁";
            carButton.style.transform = "";

        }, 700);

    });

}


### PARALLAX LÉGER ###

const heroSun = document.querySelector(".hero-sun");

window.addEventListener("scroll", () => {

    if (!heroSun) {
        return;
    }

    const scroll = window.scrollY;

    if (scroll < window.innerHeight) {

        heroSun.style.transform =
            `translateY(${scroll * 0.12}px)`;

    }

});


### NAVIGATION ACTIVE ###

const sections = document.querySelectorAll(
    "section[id]"
);

const navLinks = document.querySelectorAll(
    ".navbar nav a"
);


const sectionObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navLinks.forEach(link => {

                    link.classList.remove("active");

                });


                const activeLink = document.querySelector(
                    `.navbar nav a[href="#${entry.target.id}"]`
                );


                if (activeLink) {

                    activeLink.classList.add("active");

                }

            }

        });

    },

    {
        threshold: 0.45
    }

);


sections.forEach(section => {

    sectionObserver.observe(section);

});


### PETITE INTERACTION POLAROIDS ###

document.querySelectorAll(".polaroid").forEach(polaroid => {

    polaroid.addEventListener("mousemove", event => {

        const rect = polaroid.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width - 0.5;

        const y =
            (event.clientY - rect.top) / rect.height - 0.5;


        polaroid.style.transform =
            `perspective(700px)
             rotateX(${y * -5}deg)
             rotateY(${x * 5}deg)
             scale(1.03)`;

    });


    polaroid.addEventListener("mouseleave", () => {

        polaroid.style.transform = "";

    });

});


### FIN ###

console.log(
    "Bienvenue dans l'univers d'Anaïs ♡"
);
