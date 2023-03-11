const startButton = document.querySelector('#start-btn');
const newGameButton = document.querySelector('#new-game-btn');
const gameTimeInput = document.querySelector('#game-time');
const scoreS = document.querySelector('#score-s');
const scoreL = document.querySelector('#score-l');
const winner = document.querySelector('#winner');


let isGameRunning = false;
let timeRemaining = 0;
let intervalId = null;
let playerScores = {
  'S': 0,
  'L': 0
};


startButton.addEventListener('click', startGame);
newGameButton.addEventListener('click', newGame);


function startGame() {
  if (isGameRunning) {
    return;
  }

  
  isGameRunning = true;
  timeRemaining = gameTimeInput.value;
  playerScores = {'S': 0, 'L': 0};
  updateScoreboard();

  // Start the countdown timer
  intervalId = setInterval(() => {
    timeRemaining--;
    updateTimer();

    if (timeRemaining <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  isGameRunning = false;
  clearInterval(intervalId);


  let winningPlayer = playerScores['S'] > playerScores['L'] ? 'Player 1' : 'Player 2';
  let winningScore = Math.max(playerScores['S'], playerScores['L']);
  winner.textContent = `${winningPlayer} wins with a score of ${winningScore}!`;
}

function newGame() {
  isGameRunning = false;
  clearInterval(intervalId);
  timeRemaining = 0;
  playerScores = {'S': 0, 'L': 0};
  updateTimer();
  updateScoreboard();
  winner.textContent = '';
}

function updateTimer() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  document.title = formattedTime + ' - Keyboard Smash Game';
}

function updateScoreboard() {
  scoreS.textContent = playerScores['S'];
  scoreL.textContent = playerScores['L'];
}

document.addEventListener('keydown', (event) => {
  if (!isGameRunning) {
    return;
  }

  if (event.key === 's') {
    playerScores['S']++;
  } else if (event.key === 'l') {
    playerScores['L']++;
  }

  updateScoreboard();
});
