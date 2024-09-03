let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {   
    const max = 3
    let computerOption;
    computerOption = Math.floor(Math.random() * max);

    if (computerOption === 0) {
        computerOption ='Rock';
    } else if (computerOption === 1) {
        computerOption = 'Paper';
    } else {
        computerOption = 'Scissors';
    }
    return computerOption;
}

function getHumanChoice() {
    let humanChoice = prompt('rock, paper or scissors?').toLocaleLowerCase();
    if (humanChoice !== 'Rock' && humanChoice !== 'Paper' && humanChoice !== 'Scissors') {
        return 'Enter a valid option';
    }
    return humanChoice;
}

