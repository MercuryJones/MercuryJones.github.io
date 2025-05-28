// Draw houses and show stick person
const btnDraw = document.getElementById("btn-draw");
const houseContainer = document.getElementById("house-container");
const exerciseSection = document.getElementById("exercise-section");
const btnExercise = document.getElementById("btn-exercise");
const stickPerson = document.getElementById("stick-person");

const houseTemplate = () => {
  const house = document.createElement("div");
  house.classList.add("house");

  const roof = document.createElement("div");
  roof.classList.add("roof");

  const base = document.createElement("div");
  base.classList.add("base");

  const door = document.createElement("div");
  door.classList.add("door");

  base.appendChild(door);
  house.appendChild(roof);
  house.appendChild(base);
  return house;
};

btnDraw.onclick = () => {
  houseContainer.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    houseContainer.appendChild(houseTemplate());
  }
  exerciseSection.classList.remove("hidden");
};

// Exercise stretch animation
const stretchImages = [
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
  "images/6.png"
];

let stretchIndex = 0;
let stretchInterval;

btnExercise.onclick = () => {
  clearInterval(stretchInterval);
  stretchIndex = 0;
  stretchInterval = setInterval(() => {
    stickPerson.src = stretchImages[stretchIndex];
    stretchIndex++;
    if (stretchIndex >= stretchImages.length) {
      clearInterval(stretchInterval);
    }
  }, 500);
};
