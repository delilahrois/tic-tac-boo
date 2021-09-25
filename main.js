// *** THIS FILE SHOULD CONTAIN all DOM-related JS.
// we will want to display each player's win in the aside sections.
var board = document.querySelector('#board');
var startBtn = document.querySelector('#startBtn');
var squares = document.querySelectorAll('.square');

var player1Scoreboard = document.querySelector('#p1Scoreboard');
var player2Scoreboard = document.querySelector('#p2Scoreboard');

window.addEventListener('load', resetBoard);
startBtn.addEventListener('click', resetBoard);
board.addEventListener('click', placeToken);

function resetBoard() {
  game = new Game();
  // var player1 = new Player('1', '🧛‍♀️');
  // var player2 = new Player('2', '👻');
  squares.innerText = '';
}
// game = new Game(player1, player2);
//if event.target.contains(that classlist) replace or don't replace the emoji inside

function placeToken() {
  if (event.target.classList.contains('square')) {
    if (game.player1Turn === true) {
      event.target.innerHTML = `
      <p>🧛‍♀️</p>
      `
    } else if (game.player2Turn === true){
      console.log('conditional 2')
      event.target.innerHTML = `
      <p>👻</p>
      `
      }
    }
    //make an error handling situation for emojis being replaced
  game.switchTurns();
  //change innerText of header to say whose turn it is.

  // if (!selectedSquares.includes(event.target.id)) {
  //   selectedSquares.push(event.target.id);
    // if (event.target.id) {
    //
    // }
//if the square clicked on does not contain an emoji, add the emoji of the current player. (game.turn).
//if the square clicked on DOES contain an emoji, return.

    // checkForWins();
    // if no wins,
    // h1 innerText = 'it's ${currentPlayer}'s turn'
}
// function updateScore() {
//
// }

// function checkForWins() {
//
// }

// function to check whose turn it is
