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

// Optional: auto-start with first image showing
showSlide(currentSlide);
