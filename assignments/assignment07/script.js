// Toggle menu
const toggleNav = document.getElementById("toggle-nav");
const navMenu = document.getElementById("main-nav");
let navOpen = false;

toggleNav.onclick = () => {
  navOpen = !navOpen;
  navMenu.classList.toggle("hide");
  toggleNav.innerHTML = navOpen ? "&#9650;" : "&#9660;";
};

// Section toggles
const ex1Btn = document.getElementById("btn-ex1");
const ex2Btn = document.getElementById("btn-ex2");
const ex1 = document.getElementById("exercise1");
const ex2 = document.getElementById("exercise2");

ex1Btn.onclick = () => {
  ex1.classList.remove("hidden");
  ex2.classList.add("hidden");
};

ex2Btn.onclick = () => {
  ex2.classList.remove("hidden");
  ex1.classList.add("hidden");
};

// Bike animation
const goBtn = document.getElementById("go-btn");
const stopBtn = document.getElementById("stop-btn");
const bike = document.getElementById("bike");
const speedInput = document.getElementById("speed-range");
let bikeInterval = null;
let pos = 0;

const startBike = () => {
  clearInterval(bikeInterval);
  const speed = 1100 - (speedInput.value * 100); // adjust speed
  bike.style.left = "0px";
  pos = 0;
  bikeInterval = setInterval(() => {
    pos += 5;
    bike.style.left = pos + "px";
    if (pos > 500) pos = -100;
  }, speed);
};

goBtn.onclick = () => startBike();
stopBtn.onclick = () => clearInterval(bikeInterval);

// CSS Art toggle
const artDisplay = document.getElementById("art-display");
const artButtons = document.querySelectorAll(".art-btn");

artButtons.forEach(btn => {
  btn.onclick = (e) => {
    const shape = e.target.dataset.shape;
    if (shape === "moon") {
      artDisplay.innerHTML = '<div class="moon"></div>';
    } else if (shape === "star") {
      artDisplay.innerHTML = '<div class="star"></div>';
    } else if (shape === "cloud") {
      artDisplay.innerHTML = '<div class="cloud"></div>';
    }
  };
});
