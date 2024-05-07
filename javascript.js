function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 1) {
        return "rock";
    } else if (computerChoice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
 }

function getHumanChoice () {
    let humanChoice = prompt ("Please choose Rock, Paper or Scissors");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0; 

/* logic to play a round of the game */

function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a draw!");
    } else if ((humanChoice == "rock" && computerChoice == "scissors") ||
              (humanChoice == "paper" && computerChoice == "rock") ||
              (humanChoice == "scissors" && computerChoice == "paper")) {
            humanScore++;
            console.log(`Well done you have won! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You have lost! ${computerChoice} beats ${humanChoice}`);
    }
}

const humanSelection = getHumanChoice ();
const computerSelection = getComputerChoice ();

/* logic to play 5 rounds of the game */

function playGame () {
    for (i=1; i<5; i++) {
        const humanSelection = getHumanChoice ();
        const computerChoice = getComputerChoice ();
        playRound (humanSelection, computerSelection);
        
    }

}

playGame(); 