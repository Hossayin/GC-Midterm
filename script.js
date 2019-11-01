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

// function colorChange(e) {
//   if (e.target.classList.contains("card")) {
//   }
//   e.target.style.backgroundColor = "red";
// }

// >>>>>>> Stashed changes

// hints from Mitch:

// let checkArray = []
// if(checkArray[0].backgroundImage)

// let resetButton = document.getElementById("reset");
// resetButton.addEventListener("click", shuffle(), reset());

// Fisher-Yates shuffle function:
// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;

//     while (currentIndex !== 0) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }
//     return array;
//   }
