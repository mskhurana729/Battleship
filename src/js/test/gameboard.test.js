import { experiments } from "webpack";
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
  it("receive attack ", () => {
    gameBoard.placeShip(ship, [2, 3], "vertical");
    gameBoard.receiveAttack([2, 4]);
    gameBoard.receiveAttack([2, 5]);
    gameBoard.receiveAttack([2, 6]);
    expect(typeof gameBoard.receiveAttack([2, 3])).toBe("object");
  });
  it("are all ships sunk", () => {
    gameBoard.placeShip(ship, [2, 3], "vertical");
    expect(gameBoard.areAllShipsSunk()).toBe(false);

    gameBoard.receiveAttack([2, 3]);
    gameBoard.receiveAttack([2, 4]);
    gameBoard.receiveAttack([2, 5]);
    gameBoard.receiveAttack([2, 6]);
    expect(gameBoard.areAllShipsSunk()).toBe(true);
  });
});
