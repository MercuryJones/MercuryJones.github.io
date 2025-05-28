// Ice Cream section - adds one line per click
const iceCreamBox = document.getElementById("ice-cream-section");
const iceCreamText = document.getElementById("ice-cream-text");
let count = 0;

iceCreamBox.onclick = () => {
  count++;
  iceCreamText.innerHTML += `<p><strong>I like IceCream!</strong></p>`;
};

// Slider section - updates how many ice creams the user wants
const slider = document.getElementById("ice-cream-slider");
const output = document.getElementById("slider-output");

slider.oninput = () => {
  const val = slider.value;
  output.innerHTML = `I want ${val} ice creams!`;
};

// Image reveal - shows an image of ice cream and hides the button
const btn = document.getElementById("btn-show");
const img = document.getElementById("ice-cream-image");

btn.onclick = () => {
  img.classList.remove("hidden");
  btn.classList.add("hidden");
};
