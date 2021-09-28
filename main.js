// Query Selectors
var board = document.querySelector('#board');
var startBtn = document.querySelector('#startBtn');
var squares = document.querySelectorAll('.square');
var header = document.querySelector('#header');
var player1Scoreboard = document.querySelector('#p1Scoreboard');
var player2Scoreboard = document.querySelector('#p2Scoreboard');
var footer = document.querySelector('#footer');
var resetBtn = document.querySelector('#resetBtn');

// Event Listeners
window.addEventListener('load', resetBoard);
startBtn.addEventListener('click', resetBoard);
board.addEventListener('click', placeToken);
resetBtn.addEventListener('click', resetAllScores);


// Global Variable
var game;

// Functions

function checkCurrentPlayer() {
  if (game.player1.turn === true) {
      game.currentPlayer = game.player1;
  } else {
      game.currentPlayer = game.player2;
  }
  header.innerText = `It's ${game.currentPlayer.token}'s turn!`;
};

function placeToken() {
  if (game.winner) {
    return;
  }
  if (event.target.classList.contains('square')) {
    if (!game.playedSquares.includes(event.target.id)) {
      game.currentPlayer.playedSquares.push(event.target.id);
      event.target.innerText = `${game.currentPlayer.token}`;
      game.playedSquares.push(event.target.id);
      game.checkForWins();
      game.detectDraw();
    }
    if (!game.winner && !game.isOver) {
      game.switchTurns();
      checkCurrentPlayer();
    }
    if (!game.winner && game.isOver) {
      return;
    }
    updateScore();
  }
};

function resetAllScores() {
  game.player1.clearWinsFromStorage();
  game.player2.clearWinsFromStorage();
  resetBoard();
  player1Scoreboard.innerText = ``;
  player2Scoreboard.innerText = ``;
};

function resetBoard() {
  game = new Game();
  game.player1.retrieveWinsFromStorage();
  game.player2.retrieveWinsFromStorage();
  if (game.player1.wins) {
    player1Scoreboard.innerText = `${game.player1.wins}`;
  }
  if (game.player2.wins) {
    player2Scoreboard.innerText = `${game.player2.wins}`;
  }
  header.innerText = `${game.currentPlayer.token}, your move!`;
  board.innerHTML = `
  <section class="board" id="board">
    <section class="row-1">
      <div class="square" id="1">
    </div>
      <div class="square" id="2"></div>
      <div class="square" id="3"></div>
    </section>
    <section class="row-2">
      <div class="square" id="4"></div>
      <div class="square" id="5"></div>
      <div class="square" id="6"></div>
    </section>
    <section class="row-3">
      <div class="square" id="7"></div>
      <div class="square" id="8"></div>
      <div class="square" id="9"></div>
    </section>
  </section>
  `
};

function updateScore() {
  if (game.winner === game.player1) {
    if (!game.currentPlayer.wins) {
      return;
    }
    player1Scoreboard.innerText = `${game.currentPlayer.wins}`;
  } else if (game.winner === game.player2) {
    if (!game.currentPlayer.wins) {
      return;
    }
    player2Scoreboard.innerText = `${game.currentPlayer.wins}`;
  }
};
