"use strict";
const platformEl = document.getElementById("platform");
const mainEl = document.getElementById("fullPlatform");

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
const cards = document.querySelectorAll(".card");

function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 8);
    card.style.order = randomPos;
  });
}

cards.forEach(card => card.addEventListener("click", flipCard()));

resetEl.addEventListener("click", shuffle());

platformEl.addEventListener("click", startTimer());

// Shows back face of card when you click
function flipCard() {}

function checkMatch() {
  function disappear() {}
}

// Prevents user from clicking a third card
function disableCards() {}

// Changes to front face of card after not finding a match
function unflipCards() {}

// Shuffles the deck and unflips all cards
function resetBoard() {}

// Starts when you click any card
function startTimer() {}
