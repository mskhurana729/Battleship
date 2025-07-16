class GameBoard {
  constructor(size = 10) {
    this.size = size;
    this.coordinates = {};
    this.occupiedCoordinates = {};
    this.keepTrack = {};
    this.createGameBoard();
  }
  createGameBoard() {
    let size = this.size;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        this.coordinates[[i, j]] = true;
      }
    }
  }
  /**
   * so we want to create a method which will place ships to coordinates of gameBoard
   * Ship has a specific length and we can either place it horizontally or vertically consecutively not diagonally.
   * we can not place 2 ships on one coordinate which means ships cannot overlap or go over-bound which means out of chess board coordinates
   *
   * so to make this function we will make this function take 3 arguments which are 1 ship instance ,second starting coordinate and third horizontally or vertically.
   *
   *    then we will make a new variable named length and will initialize it to ship.length
   *
   * then we will check for weather it is horizontal or vertical
   *    if horizontal we will add coordinates starting from startingCoordinate and will exceed x coordinate with 1 for length times.
   *
   * and if vertical we will do the same but with y axis.
   *
   *
   *
   */
  placeShip(ship, startingCoordinate, direction) {
    let length = ship.length;
    let [x, y] = startingCoordinate;

    for (let i = 0; i < length; i++) {
      if (!this.occupiedCoordinates[[x, y]] && this.coordinates[[x, y]]) {
        this.occupiedCoordinates[[x, y]] = true;
        this.keepTrack[[x, y]] = ship;
        if (direction === "horizontal") {
          ++x;
        } else {
          ++y;
        }
      } else {
        return "Please choose available coordinates";
      }
    }
    return this.keepTrack;
  }
}
module.exports = GameBoard;
