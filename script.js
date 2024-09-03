let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {   
    const max = 3
    let computerChoice;
    computerChoice = Math.floor(Math.random() * max);

    if (computerChoice === 0) {
        computerChoice ='Rock';
    } else if (computerChoice === 1) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

function getHumanChoice() {
    let invalidOption = 'Enter a valid option'; 
    let humanChoice = prompt('Rock, Paper or Scissors?').toLowerCase();
    if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        alert(invalidOption);
        return getHumanChoice();
    }
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
}

function playRound(player, computer) {
    if ((player === 'Rock' && computer === 'Scissors') || (player === 'Paper' && computer === 'Rock')
        || (player === 'Scissors' && computer === 'Paper')) {
        console.log('You win the round! ' + player  + ' beats ' + computer);
        humanScore++;
    } else if ((computer === 'Rock' && player === 'Scissors') || (computer === 'Paper' && player === 'Rock')
        || (computer === 'Scissors' && player === 'Paper')) {
        console.log('You Lose the round! ' + computer + ' beast ' + player)
        computerScore++;
    } else if (player === computer){
        console.log('It\'s a tie');
    }
}

function playGame() {
    
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log(`You win the game!, final score. Player: ${humanScore} - Computer: ${computerScore}`);
    } else if (computerScore > humanScore ) {
        console.log(`You lose the game!, final score. Player: ${humanScore} - Computer: ${computerScore}`);
    }
    else {
        console.log(`Tied game!, final score. Player: ${humanScore} - Computer: ${computerScore}`);
    }
}
playGame();