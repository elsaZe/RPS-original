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
let wins = 0;
let loses = 0;
let five = 0;
const reset = document.querySelector('#reset');
reset.disabled = true;
reset.addEventListener('click', resetGame)


function resetGame() {
    wins = 0;
    loses = 0;
    five = 0;
    reset.disabled = true;
    totalScore.textContent = ''
    playerScore.textContent = ''
    computerScore.textContent = ''
    player.textContent = ''
    computer.textContent = ''
}

function singleRound(playerSelection) {
    player.textContent = playerSelection;
    computerSelection = computerPlay();
    computer.textContent = computerSelection
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            result = "tie";
        } else if (computerSelection == 'paper') {
            result = 'loss';
            ++loses;
        } else if (computerSelection == 'scissors') {
            result = 'win';
            ++wins;
        }
    }
    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            result = "win";
            ++wins;
        } else if (computerSelection == 'paper') {
            result = 'tie';
        } else if (computerSelection == 'scissors') {
            result = 'loss';
            ++loses;
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            result = "loss";
            ++loses;
        } else if (computerSelection == 'paper') {
            result = 'win';
            ++wins;
        } else if (computerSelection == 'scissors') {
            result = 'tie';
        }
    }

    playerScore.textContent = `${wins}`
    computerScore.textContent = `${loses}`

    if(wins>=loses){
        five = wins
    } else if (wins<loses) {
        five = loses
    }

    if(result == 'win' && five < 5){
        roundResult.textContent = "<--"
    } else if (result == 'loss' && five < 5) {
        roundResult.textContent = "-->"
    } else if (result == 'tie' && five < 5) {
        roundResult.textContent = "--"
    } else {
        roundResult.textContent = ""
    }
    

    if (five < 5) {
        if (wins == loses) {
            totalScore.textContent = "You're tied. Don't let the computer take the lead";
        } else if (wins == loses + 1){
            totalScore.textContent = "You're only up by one! Choose wisely..."
        } else if (wins > loses + 1) {
            totalScore.textContent = "You've got a great lead! Keep it up."
        } else if (wins == loses - 1) {
            totalScore.textContent = "You're behind by one. Time to catch up!"
        } else if (wins < loses - 1) {
            totalScore.textContent = "You're falling way behind. Time to turn your luck around!"
        }
        reset.disabled = true;
    } else if (five >= 5){
       if(loses == 5) {
           totalScore.textContent = "You lose!"
       } else if (wins == 5) {
           totalScore.textContent = "You Win!"
       }
       if (wins == 5 || loses == 5) {
           reset.disabled = false;
       }
    return result;
}
}


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {singleRound('rock')});


const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {singleRound('paper')});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {singleRound('scissors')});



const roundResult = document.querySelector('#roundResult');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer')

const totalScore = document.querySelector('#totalScore');
const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')
