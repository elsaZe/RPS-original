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

console.log(computerPlay())