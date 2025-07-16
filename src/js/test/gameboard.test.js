import GameBoard from "../Gameboard";
import Ship from "../ships";
describe("Game board tests ", () => {
  let gameBoard;
  let ship;
  beforeEach(() => {
    gameBoard = new GameBoard();
    ship = new Ship(4);
  });

  it("GameBoard exists", () => {
    expect(gameBoard).toBe.exist;
  });
  it("place ships", () => {
    expect(typeof gameBoard.placeShip(ship, [2, 2], "horizontal")).toBe(
      "object",
    );
    expect(typeof gameBoard.placeShip(ship, [3, 3], "horizontal")).toBe(
      "object",
    );
    expect(typeof gameBoard.placeShip(ship, [3, 3], "horizontal")).toBe(
      "string",
    );
    expect(typeof gameBoard.placeShip(ship, [2, 3], "vertical")).toBe("object");
    expect(typeof gameBoard.placeShip(ship, [2, 3], "vertical")).toBe("string");
  });
});
