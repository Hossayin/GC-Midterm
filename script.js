"use strict";

const platformEl = document.getElementById("platform");

let i = 0;
for (i = 0; i < 9; i++) {
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  platformEl.appendChild(cardEl);
  const containerEl = document.createElement("div");
  cardEl.appendChild(containerEl);
  const picFrontEl = document.createElement("div");
  picFrontEl.classList.add("genericPic");
  const picBackEl = document.createElement("div");

  picBackEl.classList.add("backPic");
  containerEl.appendChild(picFrontEl);
  containerEl.appendChild(picBackEl);
}

platformEl.addEventListener("click", colorChange);

function colorChange(e) {
  if (e.target.classList.contains("card")) {
  }
  e.target.style.backgroundColor = "red";
}


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

/* what this lab is doing: 
1. function that flips two cards at a time
    - event listener on the container that flips card on click
2. checks to see if those cards match by checking some property like background image
3. if they match, they disappear from page (change class to stgh with display: none)
4. if they do not match, flips the cards back 

