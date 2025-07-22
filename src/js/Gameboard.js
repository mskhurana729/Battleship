class GameBoard {
  constructor(size = 10) {
    this.size = size;
    this.coordinates = {};
    this.occupiedCoordinates = {};
    this.missedShots = {};
    this.keepTrack = {};
    this.createGameBoard();
    this.ships = [];
    this.shotsHit = {};
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
  checkIfAllCoordinatesAreAvailable(length, startingCoordinate, direction) {
    // lets check first whether or not all coordinates needed to place the ship are available
    let arr = startingCoordinate.split(",");

    let [x, y] = arr;
    let areAllCoordinatesAvailable = true;
    for (let i = 0; i < length; i++) {
      if (this.occupiedCoordinates[[x, y]] || !this.coordinates[[x, y]]) {
        console.log(x, y);
        areAllCoordinatesAvailable = false;
        break;
      }
      if (direction === "horizontal") {
        ++y;
      } else {
        ++x;
      }
    }
    return areAllCoordinatesAvailable;
  }
  placeShip(ship, startingCoordinate, direction, shipsArr) {
    let areAllCoordinatesAvailable = this.checkIfAllCoordinatesAreAvailable(
      ship.length,
      startingCoordinate,
      direction,
    );
    console.log(areAllCoordinatesAvailable);
    // if and only if all coordinates are available then we will start placing the ship
    if (areAllCoordinatesAvailable) {
      this.ships.push(ship);
      let arr = startingCoordinate.split(",");
      let [x, y] = arr;
      for (let i = 0; i < ship.length; i++) {
        this.occupiedCoordinates[[x, y]] = true;
        this.keepTrack[[x, y]] = ship;
        this.changeBgOfCell(x, y);

        if (direction === "horizontal") {
          ++y;
        } else {
          ++x;
        }
      }
      shipsArr.pop();
      console.log(shipsArr);
    } else {
      return "Please choose available coordinates";
    }
    return this.keepTrack;
  }
  changeBgOfCell(x, y) {
    const cell = document.querySelector(`.row${x}column${y}`);
    cell.classList.toggle("blackBg");
  }
  /**
   * we want to write a function named receiveAttack which takes a coordinate and decide whether it hit a ship or it missed. if it hit a ship it it updates that ship variable isHit.
   */
  receiveAttack(coordinates) {
    if (this.shotsHit[coordinates] || this.missedShots[coordinates]) {
      return this.keepTrack[coordinates];
    }
    if (!this.keepTrack[coordinates]) {
      this.missedShots[coordinates] = true;
    } else {
      this.keepTrack[coordinates].hit();
      this.shotsHit[coordinates] = true;
    }
    return this.keepTrack[coordinates];
  }
  areAllShipsSunk() {
    let allShipsAreSunk = true;

    this.ships.forEach((ship) => {
      if (!ship.haveSunk) {
        allShipsAreSunk = false;
      }
    });
    return allShipsAreSunk;
  }
}
module.exports = GameBoard;
