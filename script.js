let playerScore = 0;
let compScore = 0;

function computerPlay() {
    let choice = Math.random() * 3;

    if (choice <= 1) {
        return 'rock';
    } else if (choice <= 2) {
        return 'paper';
    } else if (choice <= 3) {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return 'Draw';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        compScore++;
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return 'You Win! Paper beats Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        compScore++;
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        compScore++;
        return 'You Lose! Rock beats Scissors';
    } else {
        playerScore++;
        return 'You Win! Scissors beats Papers';
    }
    
}

function game() {

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('YOUR CHOICE?');
        console.log(playRound(playerSelection, computerPlay()));
    }

    let winner = playerScore > compScore ? 'You' : 'The Computer';

    console.log(`${winner}, wins!`);
}

game();