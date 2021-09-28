class Player {
  constructor(id, token, isTurn) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    this.turn = isTurn;
    this.playedSquares = [];
  }

  saveWinsToStorage() {
    window.localStorage.setItem(`${this.id}`, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    var score = window.localStorage.getItem(`${this.id}`);
    score = JSON.parse(score);
    this.wins = score;
  }

  clearWinsFromStorage() {
    window.localStorage.clear();
  }
};
