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
  cardEl.classList.add("card");
  const picFrontEl = document.createElement("div");
  picFrontEl.classList.add("genericPic");
  const picBackEl = document.createElement("div");
  picBackEl.classList.add("backPic");
  cardEl.appendChild(picFrontEl);
  cardEl.appendChild(picBackEl);
  containerEl.appendChild(cardEl);
  platformEl.appendChild(containerEl);
  picBackEl.style.backgroundImage = `url(./images/${shuffled[i]})`;

  // switch (i) {
  //   case 0:
  //     cardEl.id = "a";
  //     break;
  //   case 1:
  //     cardEl.id = "b";
  //     break;
  //   case 2:
  //     cardEl.id = "c";
  //     break;
  //   case 3:
  //     cardEl.id = "d";
  //     break;
  //   case 4:
  //     cardEl.id = "e";
  //     break;
  //   case 5:
  //     cardEl.id = "f";
  //     break;
  //   case 6:
  //     cardEl.id = "g";
  //     break;
  //   case 7:
  //     cardEl.id = "h";
  //     break;
  // }
}

resetEl.addEventListener("click", shuffle);

// function shuffle(e) {
//   ifcards.forEach(card => {
//     let randomPos = Math.floor(Math.random() * 8);
//     card.style.order = randomPos;
//   });
// }

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

cards.forEach(card => card.addEventListener("click", flipCard));

platformEl.addEventListener("click", countdown);

// Shows back face of card when you click
function flipCard() {}

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
  // if (event.target.classList.contains("card-container")) {
  // let seconds = 60;
  // let mins = 1;
  // let counter = document.getElementById("counter");
  // let currentMinutes = mins - 1;
  // seconds--;

  // counter.innerHTML =
  //   currentMinutes.toString() +
  //   ":" +
  //   (seconds < 10 ? "0" : "") +
  //   String(seconds);
  // if (seconds > 0) {
  //   setInterval(function test() {
  //     seconds--;
  //   }, 1000);
  // } else {
  //   countdown(mins - 1);
  // }
  // }
}
