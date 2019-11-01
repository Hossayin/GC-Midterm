"use strict";
const platformEl = document.getElementById("platform");

const resetEl = document.createElement("div");
resetEl.classList.add("reset");
resetEl.innerText = "Reset";

for (let i = 0; i < 8; i++) {
  const containerEl = document.createElement("div");
  containerEl.classList.add("card-container");
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  const picFrontEl = document.createElement("div");
  picFrontEl.classList.add("genericPic");
  const picBackEl = document.createElement("div");
  picBackEl.classList.add("backPic");
  cardEl.appendChild(picFrontEl);
  cardEl.appendChild(picBackEl);
  containerEl.appendChild(cardEl);
  platformEl.appendChild(containerEl);
}

// const cards = document.querySelectorAll('.card');

// cards.forEach(card => card.addEventListener('click', flipCard()));

// resetEl.addEventListener('click', shuffle());

// platformEl.addEventListener("click", startTimer());
