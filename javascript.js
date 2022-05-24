function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);
    let computerChoice;
    if (randomNumber === 0) {
        computerChoice = "rock"
    } else if (randomNumber === 1){
        computerChoice = "scissors"
    } else {
        computerChoice = "paper"
    }
    return computerChoice
}



let result;
let playerSelection;

function singleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            result = "tie"
        } else if (computerSelection == 'paper') {
            result = 'loss'
        } else if (computerSelection == 'scissors') {
            result = 'win'
        }
    }
    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            result = "win"
        } else if (computerSelection == 'paper') {
            result = 'tie'
        } else if (computerSelection == 'scissors') {
            result = 'loss'
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            result = "loss"
        } else if (computerSelection == 'paper') {
            result = 'win'
        } else if (computerSelection == 'scissors') {
            result = 'tie'
        }
    }
    return result;
}

let userChoice;

function promptUser() {
    userChoice = prompt("Rock, Paper or Scissors");
}

let wins = 0;
let loses = 0;

for (i=0; i<5; i++) {
    promptUser()
    console.log(userChoice)
    singleRound(userChoice, computerPlay());
    if (result == 'win') {
        wins++;
    } else if (result == 'loss') {
        loses++;
    }
    console.log("The Score is: "+wins+" wins to "+loses)
}

if (wins < loses) {
    console.log("You lose!");
} else if (wins > loses){
     console.log("You Win!");
} else if (wins === loses) {
    console.log("It's a tie!");
}

