"use strict";

let userChoice = "";
let computerChoice = "";
let userScore = 0;
let computerScore = 0;
let gameOver = false;
console.log("jetta");

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

userChoice = "paper";

function playRound(userChoice, computerChoice) {
  console.log(userChoice, computerChoice);
  if (userChoice == computerChoice) {
    console.log(
      "Tie you both picked " + `${userChoice}` + ". Please try again"
    );
  } else if (userChoice == "rock" && computerChoice == "paper") {
    console.log("The computer wins, paper beats rock!");
    computerScore++;
    console.log(computerScore);
  } else if (userChoice == "paper" && computerChoice == "rock") {
    console.log("You win!! Paper beats Rock!");
    userScore++;
    console.log(userScore);
  } else if (userChoice == "rock" && computerChoice == "scissors") {
    console.log("You win!! Rock beats scissors!!");
    userScore++;
    console.log(userScore);
  } else if (userChoice == "scissors" && computerChoice == "rock") {
    console.log("Computer wins, Rock beats Scissors!!");
    computerScore++;
    console.log(computerScore);
  } else if (userChoice == "paper" && computerChoice == "scissors") {
    console.log("Computer wins, Scissors beats paper");
    computerScore++;
    console.log(computerScore);
  } else if (userChoice == "scissors" && computerChoice == "paper") {
    console.log("You win!! Scissors beats Paper");
    userScore++;
    console.log(userScore);
  }
}

function gamePlay() {
  gameOver = false;
  while (gameOver != true) {
    if (userScore >= 5) {
      console.log("user wins " + userScore, computerScore);
      gameOver = true;
    } else if (computerScore >= 5) {
      console.log("you lose " + computerScore, userScore);
      gameOver = true;
    } else {
      playRound(userChoice, computerMove());
      console.log(userScore, computerScore);
    }
  }
}

console.log(gamePlay());
