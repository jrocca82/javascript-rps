//Playing against computer

//Computer moves
function computerPlay() {
  //return random number between 1 and 3
  const randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  //Assign number to rock, paper, and scissors
  if (randomNumber === 1) {
    const computerSelection = "Rock";
    console.log("rock");
    return computerSelection;
  } else if (randomNumber === 2) {
    const computerSelection = "Paper";
    console.log("paper");
    return computerSelection;
  } else if (randomNumber === 3) {
    const computerSelection = "Scissors";
    console.log("scissors");
    return computerSelection;
  } else {
    alert("Error! The computer did not choose rock, paper, or scissors.");
  }
}

function playerTurn() {
  //Get user input
  const userInput = prompt(
    "Input a number for your move: (1) Rock, (2) paper, or (3) scissors"
  );
  //return user input as playerSelection
  if (userInput === "1") {
    const playerSelection = "Rock";
    console.log(`You played ${playerSelection}`)
    return playerSelection;
  } else if (userInput === "2") {
    const playerSelection = "Paper";
    console.log(`You played ${playerSelection}`)
    return playerSelection;
  } else if (userInput == "3") {
    const playerSelection = "Scissors";
    console.log(`You played ${playerSelection}`)
    return playerSelection;
  } else {
    alert("You did not put in a valid choice. Please try again.");
  }
}

function checkWinner(computerSelection, playerSelection) {
  //Tie
  if (playerSelection === computerSelection) {
    alert(`Tie! You and the computer both chose ${computerSelection}`);
  }

  //Player wins
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    alert(`You win! ${playerSelection} beats ${computerSelection}`);
  }

  //Computer wins
  if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")
  ) {
    alert(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
}

while (true) {
    const x = playerTurn();
    const y = computerPlay();
    checkWinner(y, x);
}