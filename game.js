class Game {
  constructor() {
    this.player1 = new Player('1', '🧛‍♀️', true);
    this.player2 = new Player('2', '👻', false);
    this.playedSquares = [];
    this.winner = null;
    this.isOver = false;
    this.currentPlayer = this.player1;
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
    if (this.player1.turn === true) {
      this.player1.turn = !this.player1.turn;
      this.player2.turn = !this.player2.turn;
    } else {
      this.player1.turn = !this.player1.turn;
      this.player2.turn = !this.player2.turn;
    }
  }

  checkForWins() {
    for (var i = 0; i < this.winningCombos.length; i++) {
        if (this.currentPlayer.playedSquares.includes(this.winningCombos[i][0]) && this.currentPlayer.playedSquares.includes(this.winningCombos[i][1]) && this.currentPlayer.playedSquares.includes(this.winningCombos[i][2])) {
          this.winner = this.currentPlayer;
          header.innerText = `Player ${this.winner.token}‍ wins!`;
          this.currentPlayer.wins++;
          this.currentPlayer.saveWinsToStorage();
        }
      }
  }

  detectDraw() {
    if (this.playedSquares.length === 9 && this.winner === null) {
      this.isOver = true;
      header.innerText = `It's a tie! Play again?`;
    }
  }
};

// Game class should include:
  // 2 instances of Player class $
  // a way to keep track of the data for the game board $
  // a way to keep track of which player's turn it is $
  // a way to check the Game's board data for win conditions $
  // a way to detect when a game is a draw (no win) $
  // a way to reset the Game's board to begin a new Game $ --- this is currently in the main.js file. refactor??
