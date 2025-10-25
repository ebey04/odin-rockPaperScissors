function getComputerChoice() {
    const random = Math.floor(Math.random()*3);
    
    if (random === 0) {
        return "rock";
    }
    else if (random === 1) {
        return "scissors";
    }
    else {
        return "paper";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(human) {
    const computer = getComputerChoice();

  if (
  (computer === "rock" && human === "scissors") ||
  (computer === "scissors" && human === "paper") ||
  (computer === "paper" && human === "rock")
) {
  computerScore++;
  resultsCont.textContent = "Computer won!";
  compScore.textContent = computerScore;
  playerScore.textContent = humanScore;
} 
else if (
  (human === "rock" && computer === "scissors") ||
  (human === "scissors" && computer === "paper") ||
  (human === "paper" && computer === "rock")
) {
  humanScore++;
  resultsCont.textContent = "Player wins!";
  compScore.textContent = `Computer: ${computerScore}`;
  playerScore.textContent = `Player: ${humanScore}`;
} 
else {
  resultsCont.textContent = `It's a tie! Both chose ${human}`;
  compScore.textContent = `Computer: ${computerScore}`;
  playerScore.textContent = `Player: ${humanScore}`;
}

if (computerScore === 5 || humanScore === 5) {
  resultsCont.textContent = ` Game over! ${humanScore === 5 ? "Player" : "Computer"} has won the thunderdome!!`;
  resultsCont.classList.add("flash");
  setTimeout(() => resultsCont.classList.remove("flash"), 2000);
  humanScore = 0;
  computerScore = 0;
}
}


function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}:`);
    playRound();
  }

  console.log("Game Over!");
  console.log(`Final Score → Human: ${humanScore}, Computer: ${computerScore}`);
}




/* DOM Elements */

const resultsCont = document.getElementById("results")

const compScore = document.getElementById("comp-score")
const playerScore = document.getElementById("player-score")

const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const rock = document.getElementById("rock")

/* Event Listeners */

paper.addEventListener("click", (e) => playRound("paper")
);
scissors.addEventListener("click", (e) => playRound("scissors"));
rock.addEventListener("click", (e) => playRound("rock"));