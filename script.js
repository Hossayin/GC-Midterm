"use strict";
const platformEl = document.getElementById("platform");
const mainEl = document.getElementById("fullPlatform");
const cards = document.querySelectorAll(".card");
const resetEl = document.querySelector(".reset");
let photoArray = [
  "lemon.png",
  "lemon.png",
  "lime.png",
  "lime.png",
  "pineapple.png",
  "pineapple.png",
  "watermelon.png",
  "watermelon.png"
];
let shuffled = shuffle(photoArray);

for (let i = 0; i < 8; i++) {
  const containerEl = document.createElement("div");
  containerEl.classList.add("card-container");
  const cardEl = document.createElement("div");
  cardEl.classList.add("card", "flipper");
  const picFrontEl = document.createElement("div");
  picFrontEl.classList.add("genericPic");
  const picBackEl = document.createElement("div");
  picBackEl.classList.add("backPic");
  cardEl.appendChild(picFrontEl);
  cardEl.appendChild(picBackEl);
  containerEl.appendChild(cardEl);
  platformEl.appendChild(containerEl);
  picBackEl.style.backgroundImage = `url(./images/${shuffled[i]})`;
  cardEl.addEventListener("click", flipCard);
}

resetEl.addEventListener("click", shuffle);

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

platformEl.addEventListener("click", countdown);

// Shows back face of card when you click
// cardEl.addEventListener("click", flipCard);
// cardEl.className.add("flipper");

function flipCard(e) {
  console.log(e.target);
  if (e.target.classList.contains("card")) {
    e.target.classList.toggle("flipper");
  }
}

function checkMatch() {
  function disappear() {}
}

// Prevents user from flipping a third card
function disableCards() {}

// Changes to front face of card after not finding a match
function unflipCards() {}

// Shuffles the deck and unflips all cards and calls countdown function
function resetBoard() {}

function countdown() {
  let counter = document.getElementById("counter");
  let seconds = 60;
  const timer = setInterval(function() {
    if (seconds > 0) {
      seconds--;
      counter.innerText = `00:${seconds}`;
    } else if (seconds === 0) {
      clearInterval(timer);
      // then remove event listener for flipping
    }
  }, 1000);
}
