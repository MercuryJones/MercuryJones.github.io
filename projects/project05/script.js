// ==== Slideshow Logic ====
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function changeSlide(step) {
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);


const toggleMenu = () => {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
};

window.toggleMenu = toggleMenu;
