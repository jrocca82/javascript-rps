
//UI
const playButtons = document.querySelectorAll("button");
const results = document.querySelector("#results");

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

function checkWinner(computerSelection, playerSelection) {
  //Tie
  if (playerSelection === computerSelection) {
    results.innerHTML = `<h3>It's a tie! You and the computer both played ${playerSelection}</h3>`;
  }
  
  //Player wins
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
      results.innerHTML = `<h3>You win! ${playerSelection} beats ${computerSelection}</h3>`;
    }
    
    //Computer wins
    if (
      (computerSelection === "Rock" && playerSelection === "Scissors") ||
      (computerSelection === "Scissors" && playerSelection === "Paper") ||
      (computerSelection === "Paper" && playerSelection === "Rock")
      ) {
        results.innerHTML = `<h3>You lose! ${computerSelection} beats ${playerSelection}</h3>`;
      }
    }

function play(event) {
  let playerSelection = "";
  const eventId = event.target.getAttribute("id");
  if (eventId === "Rock") {
    playerSelection = "Rock";
  } else if (eventId === "Paper") {
    playerSelection = "Paper";
  } else if (eventId === "Scissors") {
    playerSelection = "Scissors";
  } else {
    return "Error loading your choice";
  }
  const computerSelection = computerPlay();
  checkWinner(computerSelection, playerSelection);
}

playButtons.forEach(button => button.addEventListener("click", play));