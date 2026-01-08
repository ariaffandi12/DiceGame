document.getElementById("rollButton").addEventListener("click", rollDice);
document.getElementById("resetButton").addEventListener("click", resetGame);

let score1 = 0;
let score2 = 0;
let rollCount = 0;

function rollDice() {
  let maxRoll = parseInt(document.getElementById("matchCount").value);

  
  if (isNaN(maxRoll) || maxRoll < 1) {
    alert("Jumlah match minimal 1");
    return;
  }
  if (maxRoll > 100) {
    alert("Jumlah match maksimal 100");
    return;
  }

  if (rollCount >= maxRoll) return;

  let randomNo1 = Math.floor(Math.random() * 6) + 1;
  let randomNo2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1")
    .setAttribute("src", "images/dice" + randomNo1 + ".png");

  document.querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNo2 + ".png");

  score1 += randomNo1;
  score2 += randomNo2;
  rollCount++;

  document.getElementById("score1").textContent = "Score: " + score1;
  document.getElementById("score2").textContent = "Score: " + score2;

  
  if (rollCount === maxRoll) {
    determineWinner();
    document.getElementById("rollButton").disabled = true;
  }
}

function determineWinner() {
  let title = document.querySelector("h1");

  if (score1 > score2) {
    title.textContent = "🚩 Player 1 Wins!";
  } else if (score1 < score2) {
    title.textContent = "Player 2 Wins! 🚩";
  } else {
    title.textContent = "🤝 It's a Draw!";
  }
}

function resetGame() {
  score1 = 0;
  score2 = 0;
  rollCount = 0;

  document.querySelector(".img1").src = "images/dice1.png";
  document.querySelector(".img2").src = "images/dice1.png";

  document.getElementById("score1").textContent = "Score: 0";
  document.getElementById("score2").textContent = "Score: 0";

  document.querySelector("h1").textContent = "Dice Game";
  document.getElementById("rollButton").disabled = false;
}