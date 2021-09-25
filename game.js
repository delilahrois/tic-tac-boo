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
    this.winner = null;
    this.winningCombos =
      [1, 2, 3],
      [1, 4, 7],
      [1, 5, 9],
      [2, 5, 8],
      [3, 6, 9],
      [3, 5, 7],
      [4, 5, 6],
      [7, 8, 9];
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
};

// Game class should include:
  // 2 instances of Player class $
  // a way to keep track of the data for the game board $
  // a way to keep track of which player's turn it is $
  // a way to check the Game's board data for win conditions
  // a way to detect when a game is a draw (no win)
  // a way to reset the Game's board to begin a new Game
