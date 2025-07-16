class GameBoard {
  constructor(size = 10) {
    this.size = size;
    this.coordinates = {};
    this.createGameBoard;
  }
  createGameBoard() {
    let size = this.size;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        this.coordinates[[i, j]] = true;
      }
    }
  }
}
module.exports = GameBoard;
