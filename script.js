let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {   
    const max = 3
    let computerOption;
    computerOption = Math.floor(Math.random() * max);

    if (computerOption === 0) {
        computerOption ='rock';
    } else if (computerOption === 1) {
        computerOption = 'paper';
    } else {
        computerOption = 'scissors';
    }
    return computerOption;
}

function getHumanChoice() {
    let humanChoice = prompt('rock, paper or scissors?').toLocaleLowerCase();
    if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        return 'Enter a valid option';
    }
    return humanChoice;
}

