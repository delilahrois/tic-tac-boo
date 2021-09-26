class Game {
  constructor() {
    this.player1 = new Player('1', '🧛‍♀️');
    this.player2 = new Player('2', '👻');
    this.player1Turn = true;
    this.player2Turn = false;
    this.playedSquaresP1 = [];
    this.playedSquaresP2 = [];
    this.player1Wins = 0;
    this.player2Wins = 0;
    this.playedSquares = [];
    this.winner = null;
    this.isOver = false;
    this.winningCombos = [
      ['1', '2', '3'],
      ['1', '4', '7'],
      ['1', '5', '9'],
      ['2', '5', '8'],
      ['3', '6', '9'],
      ['3', '5', '7'],
      ['4', '5', '6'],
      ['7', '8', '9']
    ];
  }

  switchTurns() {
    if (this.player1Turn === true) {
      this.player1Turn = false;
      this.player2Turn = true;
    } else {
      this.player1Turn = true;
      this.player2Turn = false;
    }
  }

  checkForWins() {
    for (var i = 0; i < this.winningCombos.length; i++) {
        if (this.playedSquaresP1.includes(this.winningCombos[i][0]) && this.playedSquaresP1.includes(this.winningCombos[i][1]) && this.playedSquaresP1.includes(this.winningCombos[i][2])) {
          this.winner = this.player1;
          header.innerText = `Player ${this.winner.token}‍ wins!`;
          this.player1Wins++;
        } else if (this.playedSquaresP2.includes(this.winningCombos[i][0]) && this.playedSquaresP2.includes(this.winningCombos[i][1]) && this.playedSquaresP2.includes(this.winningCombos[i][2])) {
          this.winner = this.player2;
          header.innerText = `Player ${this.winner.token} wins!`;
          this.player2Wins++;
        }
    }
  }

  detectDraw() {
    for (var i = 0; i < this.playedSquares.length; i++) {
      if (this.playedSquares === ['1', '2', '3', '4', '5', '6', '7',
        '8', '9']) {
          this.isOver = true;
        }}
    if (!this.winner && this.isOver) {
      header.innerText = `It's a tie! Play again?`;
    }
    // if all squares have been played and there is no winner, this.winner = null and return string `It's a tie! Play again?`
  }
};

// Game class should include:
  // 2 instances of Player class $
  // a way to keep track of the data for the game board $
  // a way to keep track of which player's turn it is $
  // a way to check the Game's board data for win conditions $
  // a way to detect when a game is a draw (no win)
  // a way to reset the Game's board to begin a new Game $ --- this is currently in the main.js file. refactor??
