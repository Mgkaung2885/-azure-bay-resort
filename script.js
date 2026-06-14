const bookingForm = document.querySelector(".booking-form");
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const fadeElements = document.querySelectorAll(".fade-in");
const navbar = document.getElementById("navbar");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your booking request has been sent.");
});

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

fadeElements.forEach((el) => observer.observe(el));