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

function singleRound(playerSelection) {
    console.log(playerSelection)
    computerSelection = computerPlay();
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

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {singleRound('rock')});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {singleRound('paper')});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {singleRound('scissors')});

let wins = 0;
let loses = 0;

/*
if (wins < loses) {
    console.log("You lose!");
} else if (wins > loses){
     console.log("You Win!");
} else if (wins === loses) {
    console.log("It's a tie!");
}
*/

