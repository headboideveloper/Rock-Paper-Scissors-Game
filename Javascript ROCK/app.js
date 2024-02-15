const startGame = document.getElementById('start-game')

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_VALUE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'PLAYER_LOST';
let gameIsRunning = false;

const playerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER} OR ${SCISSORS}?`, '').toUpperCase()
    if (selection !== ROCK && selection !== PAPER & selection !== SCISSORS) {
        alert(`Invalid input, we chose a ${DEFAULT_USER_VALUE} for you`)
        return DEFAULT_USER_VALUE;
    }
    return selection;
}

const computerChoice = function() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK
    } else if (randomValue < 0.67) {
        return PAPER
    } else {
        return SCISSORS
    }
}

const getWinner = function(cChoice, pChoice) {
    if (cChoice === pChoice) {
        return RESULT_DRAW
    } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) {
        return RESULT_PLAYER_WINS
    } else {
        return RESULT_COMPUTER_WINS
    }
}

// const getWinner = (cChoice, pChoice) => 
//     cChoice === pChoice ? RESULT_DRAW  : (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS


startGame.addEventListener('click', ()=> {
    if (gameIsRunning){
        return
    }
    gameIsRunning = true;
    console.log("Game's starting")
    const playerSelection = playerChoice()
    const computerSelection = computerChoice()
    const winner = getWinner(playerSelection, computerSelection)
    let message; 
    if (winner === RESULT_DRAW) {
        message = `You picked a ${playerSelection}, computer picked a ${computerSelection} and therefore, you had a draw.` 
    } else if (winner === RESULT_PLAYER_WINS) {
        message = `You picked a ${playerSelection}, computer picked a ${computerSelection} and therefore, you won!.` 
    } else {
        message = `You picked a ${playerSelection}, computer picked a ${computerSelection} and therefore, the computer won!.` 
    }
    alert(message);
    gameIsRunning = false;
});