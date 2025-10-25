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



function getHumanChoice() {
    let choice = window.prompt("Rock, Paper or Scissors?")
    return choice
}


let humanScore = 0;
let computerScore = 0;

function playRound() {
    const human = getHumanChoice().trim().toLowerCase();
    const computer = getComputerChoice();

  if (
  (computer === "rock" && human === "scissors") ||
  (computer === "scissors" && human === "paper") ||
  (computer === "paper" && human === "rock")
) {
  computerScore++;
  console.log("Computer won!");
  console.log(`Computer: ${computerScore}, Human: ${humanScore}`);
} 
else if (
  (human === "rock" && computer === "scissors") ||
  (human === "scissors" && computer === "paper") ||
  (human === "paper" && computer === "rock")
) {
  humanScore++;
  console.log("Human wins!");
  console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
} 
else {
  console.log(`It's a tie! Both chose ${human}.`);
  console.log(`Scores → Human: ${humanScore}, Computer: ${computerScore}`);
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


playGame()