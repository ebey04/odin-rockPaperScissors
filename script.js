function getComputerChoice() {
    const random = Math.floor(Math.random()*3);
    
    if (random === 0) {
        return "rock";
    }
    else if (random === 1) {
        return "scissors";
    }
    else {
        return "aper";
    }
}

console.log(getComputerChoice())

function getHumanChoice() {
    let choice = window.prompt("Rock, Paper or Scissors?")
    return choice
}

console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(getComputerChoice, getHumanChoice) {
    let human = getHumanChoice.toLowerCase();

}