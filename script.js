const nav = document.getElementById("nav");
const  navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");


//---Mobile menu---

function toggleMenu() {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("active",isOpen);
    navToggle.setAttribute("aria-expanded",isOpen);
    navToggle.setAttribute("aria-label",isOpen ? "Close menu" : "Open menu");
}

navToggle.addEventListener("click",toggleMenu);

//===close menu when nav-link is clicked(mobile)===//

navLinks.querySelectorAll("a").forEach((link)=> {
    link.addEventListener("click", () =>{
        navLinks.classList.remove("open");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded" , "false");
    });
});

//===Nav background on scroll===//

function onScroll() {
    nav.classList.toggle("scrolled",window.scrollY > 20);
}

window.addEventListener("scroll",onScroll, {passive :true});
onScroll();


//===Contact form ===//

contactForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    formNote.hidden = false;
    contactForm.reset();
    setTimeout(() =>{
        formNote.hidden = true;
    },4000);
});

