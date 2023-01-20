// LET PLAYER PICK ROCK, PAPER, SCISSORS ✔️
function getPlayerChoice() {
    console.log("Do you choose 'rock' (1), 'paper' (2), or 'scissors (3)?");
    let playerChoice = prompt("Do you choose 'rock' (1), 'paper' (2), or 'scissors (3)?");
    if (playerChoice.toLowerCase() === 'rock' || parseInt(playerChoice) === 1) {
        playerChoice = 'rock';
    } else if (playerChoice.toLowerCase() === 'paper' || parseInt(playerChoice) === 2) {
        playerChoice = 'paper';
    } else if (playerChoice.toLowerCase() === 'scissors' || parseInt(playerChoice) === 3) {
        playerChoice = 'scissors';
    }
    return playerChoice;
}

// LET COMPUTER PICK ROCK, PAPER, SCISSORS AT RANDOM ✔️
const computerChoices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return result;
}

// SCOREBOARD
let playerScore = 0;
let computerScore = 0;

// LET THE PLAYER AND COMPUTER PLAY 1 ROUND AND DECLARE THE WINNER ✔️
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            ++computerScore;
            console.log('You lose! paper beats rock');
        } else if (computerSelection === 'scissors') {
            ++playerScore;
            console.log('You win! rock beats scissors');
        } else {
            ++computerScore;
            ++playerScore;
            console.log('Tie! rock and rock are the same')
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            ++computerScore;
            console.log('You lose! scissors beats paper!');
        } else if (computerSelection === 'rock') {
            ++playerScore;
            console.log('You win! paper beats rock');
        } else {
            ++computerScore;
            ++playerScore;
            console.log('Tie! paper and paper are the same')
        }
    } 
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            ++computerScore;
            console.log('You lose! rock beats scissors')
        } else if (computerSelection === 'paper') {
            ++playerScore;
            console.log('You win! scissors beats paper')
        } else {
            ++computerScore;
            ++playerScore;
            console.log('Tie! scissors and scissors are the same')
        }
    }
    
}

// LET THE PLAYER AND COMPUTER PLAY 5 ROUNDS AND DECLARE WINNER
function game() {
    for (let i = 0; i < 5; i++) {
      const playerSelection = getPlayerChoice();
      const computerSelection = getComputerChoice();
      const currentRound = playRound(playerSelection, computerSelection);
      console.log(currentRound);
     }
     if (playerScore > computerScore) {
        console.log(`You have ${playerScore} points. The computer has ${computerScore}. You beat the computer! Refresh to play again! `);
     } else if(playerScore === computerScore) {
        console.log(`You have ${playerScore} points. The computer has ${computerScore}. You tied with the computer! Refresh to play again!`)
     } else console.log(`You have ${playerScore} points. The computer has ${computerScore}. The computer beat you! Refresh to play again!`);
}