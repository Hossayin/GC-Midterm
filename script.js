"use strict";
// 

let i = 0;
for (i = 0; i < 9; i++) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    platformEl.appendChild(cardEl);
    const containerEl = document.createElement("div");
    cardEl.appendChild(containerEl);
    const picFrontEl = document.createElement("div");
    picFrontEl.classList.add("genericPic");
    const picBackEl = document.createElement("img");

    picBackEl.classList.add("backPic");
    containerEl.appendChild(picFrontEl);
    containerEl.appendChild(picBackEl);
}

// function shuffle(memoryArray) {
//     var currentIndex = array.length,
//       temporaryValue,
//       randomIndex;




// 

// const platformEl = document.getElementById("platform");



// platformEl.addEventListener("click", colorChange);

// function colorChange(e) {
//   if (e.target.classList.contains("card")) {
//   }
//   e.target.style.backgroundColor = "red";
// }

function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
    // }


    // While there remain elements to shuffle...
    //   while (0 !== currentIndex) {
    //     // Pick a remaining element...
    //     randomIndex = Math.floor(Math.random() * currentIndex);
    //     currentIndex -= 1;

    //     // And swap it with the current element.
    //     temporaryValue = array[currentIndex];
    //     array[currentIndex] = array[randomIndex];
    //     array[randomIndex] = temporaryValue;
    //   }

    //   return array;
    // }

    // // Used like so
    // var arr = [2, 11, 37, 42];
    // arr = shuffle(arr);
    // console.log(arr);

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
    //   }const memoryArray = [
    //     0,
    //     0,
    //     1,
    //     1,
    //     2,
    //     2,
    //     3,
    //     3,
    //     4,
    //     4,
    //     5,
    //     5,
    //     6,
    //     6,
    //     7,
    //     7,
    //     8,
    //     8,
    //     9,
    //     9
    // ];
    // const memoryValue = [];
    // const memoryCardValue = [];
    // const tilesFlipped = 0;