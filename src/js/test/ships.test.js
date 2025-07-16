import Ship from "../ships.js";

describe("Ships class Test", () => {
  it("Ship is hit", () => {
    let ship = new Ship();
    expect(ship.hit()).toBe.exist;
  });
  it("Ship is Sunk or not", () => {
    let ship = new Ship();
    expect(ship.isSunk()).toBeBoolean;
  });
});
`11`;
