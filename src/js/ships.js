class Ship {
  constructor(length) {
    this.length = length;
    this.numberOfHits = 0;
    this.haveSunk = false;
  }
  hit() {
    ++this.numberOfHits;
  }
  isSunk() {
    if (this.numberOfHits >= this.length) {
      this.haveSunk = true;
    }
    return this.haveSunk;
  }
}
module.exports = Ship;
