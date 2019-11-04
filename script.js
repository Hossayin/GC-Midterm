"use strict";
const platformEl = document.getElementById("platform");
const mainEl = document.getElementById("fullPlatform");
const cards = document.querySelectorAll(".card");
const resetEl = document.querySelector(".reset");
let timerStarted = false;
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

  // cards.forEach(card => {
  //   card.classList.add("flipper");
  // });
}

platformEl.addEventListener("click", countdown);

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
// Shows back face of card when you click
function flipCard(e) {
  if (lockBoard) return;
  if (e.target.classList.contains("card")) {
    e.target.classList.toggle("flipper");
  }
  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    // second click
    hasFlippedCard = false;
    secondCard = this;
    function checkMatch() {
      let img1 = firstCard.lastChild.getAttribute("style");
      let img2 = secondCard.lastChild.getAttribute("style");

      if (img1 === img2) {
        function disableCards() {
          firstCard.classList.add("disappear");
          secondCard.classList.add("disappear");
          firstCard.removeEventListener("click", flipCard);
          secondCard.removeEventListener("click", flipCard);
        }
        disableCards();

        console.log("It's a match!");
      } else {
        // not a match
        // function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
          console.log("flip back");
          firstCard.classList.add("flipper");
          secondCard.classList.add("flipper");
          lockBoard = false;
        }, 600);

        // }
        // unflipCards();
      }
    }
    checkMatch();
  }

  console.log({ firstCard, secondCard });
}

function countdown() {
  if (!timerStarted) {
    timerStarted = true;
    let counter = document.getElementById("counter");
    let seconds = 60;
    const timer = setInterval(function() {
      if (seconds > 0) {
        seconds--;
        counter.innerText = `00:${seconds}`;
      } else if (seconds === 0) {
        timerStarted = false;
        clearInterval(timer);
        // then remove event listener for flipping
      }
    }, 1000);
  }
}

// function winner() {
//   if (cards.classList.contains("disappear")) {
//     alert("Congrats, you matched all the cards!");
//   }
// }

// cards.forEach(if (cards.classList.contains("disappear")) {
//   alert("Congrats, you matched all the cards!");
// });
