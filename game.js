class Game {
  constructor() {
    this.player1 = new Player('1', '🧛‍♀️');
    this.player2 = new Player('2', '👻');
    this.turn = this.player1;

  }

  switchTurns() {
    if (this.turn == this.player1) {
      this.turn = this.player2;
    } else {
      this.turn = this.player1;
    }
  }
}

// Game class should include:
  // 2 instances of Player class
  // a way to keep track of the data for the game board
  // a way to keep track of which player's turn it is
  // a way to check the Game's board data for win conditions
  // a way to detect when a game is a draw (no win)
  // a way to reset the Game's board to begin a new Game
