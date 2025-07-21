class Ship {
  constructor(length) {
    this.length = length;
    this.numberOfHits = 0;
    this.haveSunk = false;
  }
  hit() {
    ++this.numberOfHits;
    this.isSunk();
  }
  isSunk() {
    if (this.numberOfHits >= this.length) {
      this.haveSunk = true;
    }
    return this.haveSunk;
  }
}
function createShipsInstances(length = 5) {
  let shipsArr = [];
  for (let i = 1; i <= length; i++) {
    shipsArr.push(new Ship(i));
  }
  return shipsArr;
}
module.exports = { Ship, createShipsInstances };
