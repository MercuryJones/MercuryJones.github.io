// Slideshow Logic 
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

// Nav Toggle 
const toggleMenu = () => {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
};

window.toggleMenu = toggleMenu;

// Modal Logic 
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

// Contact Form Submit
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const formError = document.getElementById('form-error');

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    showFormError();
    return;
  }

  try {

    await new Promise(resolve => setTimeout(resolve, 500));

    // Show modal success dialog
    openFormModal();

    // Reset form
    contactForm.reset();
    formSuccess.style.display = 'none';
    formError.style.display = 'none';
  } catch (error) {
    formError.textContent = 'Error sending message. Please try again.';
    formError.style.display = 'block';
    formSuccess.style.display = 'none';
  }
});

const showFormError = () => {
  formError.textContent = 'Please fill out all fields correctly.';
  formError.style.display = 'block';
  formSuccess.style.display = 'none';

  setTimeout(() => {
    formError.style.display = 'none';
  }, 3000);
};

// Contact Form Modal Functions 
const openFormModal = () => {
  document.getElementById('form-modal').style.display = 'block';
};

const closeFormModal = () => {
  document.getElementById('form-modal').style.display = 'none';
};
