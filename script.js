const nav = document.getElementById("nav");
const navLinks = document.getElementById("nav-links");
const navToggle = document.getElementById("nav-toggle");
const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");


function toggleMenu() {
    const isOpen=navLinks.classList.toggle("open");
    navToggle.classList.toggle("active",isOpen);
    navToggle.setAttribute("aria-expanded",isOpen);
    navToggle.setAttribute("aria-label",isOpen ? "Close menu" :"Open menu");
}
navToggle.addEventListener("click",toggleMenu);

navLinks.querySelectorAll("a").forEach((link)=>{
    link.addEventListener("click",() => {
        navLinks.classList.remove("open");
        navLinks.classList.remove("active");
        navToggle.setAttribute("aria-expanded","false");
    });
});

function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 20);
}
window.addEventListener("scroll", onScroll, {
    passive: true
});
onScroll();

contactForm.addEventListener("submit",(e)=> {
    e.preventDefault();
    formNote.hidden = false;
    contactForm.reset();
    setTimeout(()=>{
        formNote.hidden = true;
    },4000);
});