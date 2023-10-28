"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input").value);

  const inputEl = document.getElementById("input").innerHTML;

  if (!guess) {
    displayMessage("⛔️ No number!");
  } else if (guess === 0 || guess > 20) {
    displayMessage("➡  Enter Numbers between 1 & 20 ⬅");
    document.getElementById("input").value = " ";
    // displayMessage("Start Guessing...");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "plum";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "Guess is high ⬆⬆⬆⬆" : "Guess is low ⬇⬇⬇"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;

  document.querySelector(".input").value = "";

  // document.querySelector("body").style.background = "rgb(200,41,110)";
  document.querySelector("body").style.background = "#e694b8";
  // " linear-gradient(90deg, rgba(200,41,110,1) 0%, rgba(148,187,233,1) 100%)";
  // document.querySelector(".input").style.width = "15rem";

  document.querySelector(".input").textContent = "  ";
});
