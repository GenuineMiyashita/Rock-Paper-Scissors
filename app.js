let playerScore = 0;
let computerScore = 0;

// LET COMPUTER PICK ROCK, PAPER, SCISSORS AT RANDOM ✔️

let computerChoices = ['rock', 'paper', 'scissors'];
let computerSelection = getComputerChoice();

function getComputerChoice() {
    let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return result;
}

// LET THE PLAYER AND COMPUTER PLAY 1 ROUND AND DECLARE THE WINNER ✔️
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log('You lose! paper beats rock');
        } else if (computerSelection === 'scissors') {
            console.log('You win! rock beats scissors');
        } else console.log('Tie! rock and rock are the same')
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            console.log('You lose! scissors beats paper!');
        } else if (computerSelection === 'rock') {
            console.log('You win! paper beats rock');
        } else console.log('Tie! paper and paper are the same')
    } 
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            console.log('You lose! rock beats scissors')
        } else if (computerSelection === 'paper') {
            console.log('You win! scissors beats paper')
        } else console.log('Tie! scissors and scissors are the same')
    }
}

// LET THE PLAYER AND COMPUTER PLAY 5 ROUNDS AND DECLARE WINNER

function game() {
    
}