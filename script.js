document.addEventListener('DOMContentLoaded', function() {
    let playerScore = 0;
    let computerScore = 0;
    let gameOver = true;

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
    };

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return 'Tie';
        } else if ((humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
            return 'Player';
        } else {
            return 'Computer';
        }
    };

    const buttons = document.querySelectorAll('.btn-select');
    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            let humanChoice = this.id.charAt(0).toUpperCase() + this.id.slice(1);
            let computerChoice = getComputerChoice();
            let roundWinner = playRound(humanChoice, computerChoice);
            let playerScr = document.querySelector('.player-scr');
            let cpuScr = document.querySelector('.cpu-scr');

            if (!gameOver) return;

            if (roundWinner === 'Player') {
                let roundWinMsg = document.querySelector('.result-msg');
                roundWinMsg.textContent = `YOU WIN! ${humanChoice} beats ${computerChoice}`;
                roundWinMsg.style.color = '#ffffff';
                playerScore++;
                playerScr.textContent = `Player:${playerScore}`;
            } else if (roundWinner === 'Computer') {
                let roundLoseMsg = document.querySelector('.result-msg');
                roundLoseMsg.textContent = `YOU LOSE! ${computerChoice} beats ${humanChoice}`;
                roundLoseMsg.style.color = '#ffffff';
                computerScore++;
                cpuScr.textContent = `CPU:${computerScore}`
            } else {
                let roundTieMsg = document.querySelector('.result-msg');
                roundTieMsg.textContent = 'IT\'S A TIE!';
                roundTieMsg.style.color = '#ffffff';
            }


            if (playerScore === 5) {
                let winGameMsg = document.querySelector('.result-msg');
                winGameMsg.textContent = 'YOU WIN THE GAME!';
                gameOver = false;
                setTimeout(restartGame, 3000);
            } else if (computerScore === 5) {
                let loseGameMsg = document.querySelector('.result-msg');
                loseGameMsg.textContent = 'YOU LOSE THE GAME!';
                gameOver = false;
                setTimeout(restartGame, 3000);
            }

        });
    });

    function restartGame() {
        playerScore = 0;
        computerScore = 0;
        let plyScr = document.querySelector('.player-scr');
        plyScr.textContent = `Player:${playerScore}`;
        let cpuScr = document.querySelector('.cpu-scr');
        cpuScr.textContent = `CPU:${computerScore}`;
        gameOver = true;
    }   
});