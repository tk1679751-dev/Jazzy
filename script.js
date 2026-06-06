/**
 * Portfolio — nav menu, scroll, contact form
 */

const nav = document.querySelector("nav");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("active", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen);
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    });
  });
}

if (nav) {
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formNote.hidden = false;
    contactForm.reset();
    setTimeout(() => {
      formNote.hidden = true;
    }, 4000);
  });
}
