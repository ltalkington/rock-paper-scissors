"use strict";

let userChoice = "none";
let computerChoice = "";
let userScore = 0;
let computerScore = 0;
let gameOver = false;
let rockElem = document.getElementById("rock-button");
let paperElem = document.getElementById("paper-button");
let scissorElem = document.getElementById("scissors-button");
let newGameButton = document.getElementById("start-new");
let choiceDivElem = document.getElementById("choice-div");
let rulesDivElem = document.getElementById("rules-div");
let rulesOLElem = document.getElementById("rules-ol");
let scoreboardElem = document.getElementById("scoreboard");
let playerScoreElem = document.getElementById("player-score");
let computerScoreElem = document.getElementById("computer-score");
let gameResultDescriptionElem = document.getElementById("game-description");
let restartButtonElem = document.getElementById("restart-button-div");

function computerMove() {
  let number = Math.random() * 100;
  let answer = null;
  console.log(number);
  if (number > 66.667 && number < 100.01) {
    answer = "scissors";
    console.log(
      "since the number is " + number + " the answer should be scissors"
    );
  } else if (number < 66.67 && number > 33.33) {
    answer = "rock";
    console.log("since the number is " + number + " the answer should be rock");
  } else if (number < 33.33) {
    answer = "paper";
    console.log(
      "since the number is " + number + " the answer should be paper"
    );
  }

  return answer;
}

console.log(computerMove());

function playRound(userChoice, computerChoice) {
  console.log(userChoice, computerChoice);

  if (gameOver == false) {
    if (userChoice == computerChoice) {
      console.log(
        "Tie you both picked " + `${userChoice}` + ". Please try again"
      );
      gameResultDescriptionElem.innerText =
        "Tie you both picked " + `${userChoice}` + ". Please try again";
    } else if (userChoice == "rock" && computerChoice == "paper") {
      console.log("The computer wins, paper beats rock!");
      computerScore++;
      computerScoreElem.innerText = computerScore;
      gameResultDescriptionElem.innerText =
        "The computer wins by picking Paper, please pick again";
      console.log(computerScore);
    } else if (userChoice == "paper" && computerChoice == "rock") {
      console.log("You win!! Paper beats Rock!");
      userScore++;
      playerScoreElem.innerText = userScore;
      gameResultDescriptionElem.innerText =
        "You win by picking Paper, please pick again";
      console.log(userScore);
    } else if (userChoice == "rock" && computerChoice == "scissors") {
      console.log("You win!! Rock beats scissors!!");
      userScore++;
      playerScoreElem.innerText = userScore;
      gameResultDescriptionElem.innerText =
        "You win by picking Rock, please pick again";
      console.log(userScore);
    } else if (userChoice == "scissors" && computerChoice == "rock") {
      console.log("Computer wins, Rock beats Scissors!!");
      computerScore++;
      computerScoreElem.innerText = computerScore;
      gameResultDescriptionElem.innerText =
        "The computer wins by picking Rock, please pick again";
      console.log(computerScore);
    } else if (userChoice == "paper" && computerChoice == "scissors") {
      console.log("Computer wins, Scissors beats paper");
      computerScore++;
      computerScoreElem.innerText = computerScore;
      gameResultDescriptionElem.innerText =
        "The computer wins by picking Scissors, please pick again";
      console.log(computerScore);
    } else if (userChoice == "scissors" && computerChoice == "paper") {
      console.log("You win!! Scissors beats Paper");
      userScore++;
      playerScoreElem.innerText = userScore;
      gameResultDescriptionElem.innerText =
        "You win by picking Scissors, please pick again";
      console.log(userScore);
    } else if (userChoice == "none") {
      console.log("please pick an item");
    }
  } else {
    console.log(
      "Game is over and your score was " +
        `${userScore}` +
        " and the computer score was " +
        `${computerScore}`
    );
  }
  gamePlay();
}

function gamePlay() {
  gameOver = false;
  if (gameOver != true) {
    if (userScore == 5) {
      console.log("user wins " + userScore, computerScore);
      rulesDivElem.innerText = "User wins!! ";
      rulesDivElem.style.backgroundColor = "Green";
      gameResultDescriptionElem.classList.add("hidden");
      gameOver = true;
    } else if (computerScore == 5) {
      console.log("you lose " + computerScore, userScore);
      rulesDivElem.innerText = "Computer Wins!";
      rulesDivElem.style.backgroundColor = "red";
      gameResultDescriptionElem.classList.add("hidden");
      gameOver = true;
    } else {
      console.log("not over");
    }
  }
}
function rockClick() {
  console.log("you clicked on rock");
  userChoice = "rock";
  console.log(userChoice);
  console.log(playRound(userChoice, computerMove()));
}
function paperClick() {
  console.log("you clicked on paper");
  userChoice = "paper";
  console.log(userChoice);
  console.log(playRound(userChoice, computerMove()));
}
function scissorsClick() {
  console.log("you clicked on scissors");
  userChoice = "scissors";
  console.log(userChoice);
  console.log(playRound(userChoice, computerMove()));
}

function newGameClick() {
  choiceDivElem.classList.remove("hidden");
  rulesOLElem.remove();
  scoreboardElem.classList.remove("hidden");
  gameResultDescriptionElem.classList.remove("hidden");
  newGameButton.classList.add("hidden");
  restartButtonElem.classList.remove("hidden");
}

function restartClick() {
  /*userScore = 0;
  computerScore = 0;
  gameOver = false;
  gameResultDescriptionElem.classList.add("hidden");
  playerScoreElem.innerText = userScore;
  computerScoreElem.innerText = computerScore;
  rulesDivElem.innerHTML = scoreboardElem.innerHTML;
  rulesDivElem.style.backgroundColor = "whitesmoke";
  rulesDivElem.style.display = "flex";
  rulesDivElem.style.marginLeft = "auto";
  rulesDivElem.style.marginRight = "auto";
  rulesDivElem.style.justifyContent = "space-between";
  rulesDivElem.style.textAlign = "center";
  */
  location.reload();
}

newGameButton.addEventListener("click", newGameClick);
rockElem.addEventListener("click", rockClick);
paperElem.addEventListener("click", paperClick);
scissorElem.addEventListener("click", scissorsClick);
restartButtonElem.addEventListener("click", restartClick);
