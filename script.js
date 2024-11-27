// Light/Dark Mode Toggle
// JavaScript for Light/Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
});

// Contact Form Validation
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for getting in touch! We'll respond shortly.");
  contactForm.reset();
});
