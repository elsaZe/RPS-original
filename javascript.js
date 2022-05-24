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

console.log(singleRound('paper', computerPlay()))