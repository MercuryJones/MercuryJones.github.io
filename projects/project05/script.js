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

// ==== Nav Toggle ====
const toggleMenu = () => {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
};

window.toggleMenu = toggleMenu;

// ==== Modal Logic ====
const openModal = (restaurant) => {
  document.getElementById("modal-title").innerText = restaurant.name;
  document.getElementById("modal-cuisine").innerText = `Cuisine: ${restaurant.cuisine}`;
  document.getElementById("modal-address").innerText = `Address: ${restaurant.address}`;
  document.getElementById("modal-rating").innerText = `Rating: ${restaurant.rating}`;
  document.getElementById("modal-map").src = getMap(restaurant.address);

  document.getElementById("restaurant-modal").style.display = "block";
};

const closeModal = () => {
  document.getElementById("restaurant-modal").style.display = "none";
};
