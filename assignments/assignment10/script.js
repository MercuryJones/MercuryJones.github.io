class HotDog {
  constructor(name, image, meat, toppings, bun) {
    this.name = name;
    this.image = image;
    this.meat = meat;
    this.toppings = toppings;
    this.bun = bun;
  }

  getSection() {
    const div = document.createElement('div');
    div.className = 'box';
    div.innerHTML = `
      <img src="images/${this.image}" alt="${this.name}">
      <div class="overlay">${this.name}</div>
    `;
    div.addEventListener('click', () => showModal(this));
    return div;
  }

  getModalContent() {
    return `
      <h3>${this.name}</h3>
      <p><strong>Meat:</strong> ${this.meat}</p>
      <p><strong>Toppings:</strong> ${this.toppings.join(', ')}</p>
      <p><strong>Bun:</strong> ${this.bun}</p>
    `;
  }
}

const hotdogs = [
  new HotDog("Chicago Dog", "dog1.jpg", "Beef", ["Relish", "Mustard", "Peppers", "Onion"], "Poppy Seed"),
  new HotDog("BLT", "dog2.jpg", "Beef", ["Bacon", "Lettuce", "Tomato", "Mayo"], "Traditional"),
  new HotDog("BBQ Crunch", "dog3.jpg", "Pork", ["Cheddar", "BBQ Sauce", "Onions"], "Sesame"),
  new HotDog("Caramelized Classic", "dog4.jpg", "Beef", ["Onions", "Pickles", "Mustard"], "Soft Roll")
];

const container = document.getElementById('hotdog-container');
hotdogs.forEach(h => container.appendChild(h.getSection()));

function showModal(hotdog) {
  document.getElementById('modal-info').innerHTML = hotdog.getModalContent();
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
