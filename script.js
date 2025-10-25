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

console.log(getComputerChoice())

function getHumanChoice() {
    let choice = window.prompt("Rock, Paper or Scissors?")
    return choice
}


let humanScore = 0;
let computerScore = 0;

function playRound() {
    const human = getHumanChoice().toLowerCase();
    const computer = getComputerChoice();

    if( computer === "rock" && human === "scissors" ||
        computer === "scissors" && human === "paper" ||
        computer === "paper" && human === "rock"
    ) {
        computerScore++;
        console.log("Computer won!");
        console.log(`Computer: ${computerScore}, Human: ${humanScore}`)
    }
    else if(  
    human === "rock" && computer === "scissors" ||
    human === "scissors" && computer === "paper" ||
    human === "paper" && computer === "rock"
    ) {
    humanScore++;
    console.log("Human wins!")
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`)
    ;
    };
}

playRound()
