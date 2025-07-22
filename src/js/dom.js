import { Ship, createShipsInstances } from "./ships.js";
import { Player } from "./player.js";

// so what do we want to do ?
/**we want to make a game named battle ship
 * in which 2 player plays, second player can either be  a actual player or a computer
 * both player has their own game board on which they place there ships .
 * after placing the ship each player tries to hit other player ship.
 * both players can not see each other ships.
 * they make a play in which they choose a coordinate where they want to hit
 * if there is a ship in the chosen coordinate we see a red cross indicating that it is a hit and there was ship there
 * else we see a black dot which indicates its a miss hit
 * this play continues until one players all ships are sunk
 *
 */
// first we want to create a grid for the game board

const container = document.querySelector(".container");
let shipsArr = createShipsInstances();
const player1 = new Player();
function createGridForGameBoard() {
  const gameBoardContainer = document.createElement("div");
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("row", `row${i}`);
    for (let j = 0; j < 10; j++) {
      let column = document.createElement("div");
      column.classList.add("column", `row${i}column${j}`, `[${i},${j}]`);
      column.setAttribute("data-coordinates", `${i},${j}`);
      row.appendChild(column);
    }
    gameBoardContainer.appendChild(row);
  }
  container.appendChild(gameBoardContainer);
  activateEventListenerForGameBoard();
}
function createHorizontalOrVerticalButton() {
  const horizontalOrVerticalButton = document.createElement("button");
  horizontalOrVerticalButton.classList.add(
    "horizontalOrVerticalButton",
    "button",
    "btn",
  );
  horizontalOrVerticalButton.setAttribute("data-direction", "horizontal");
  horizontalOrVerticalButton.textContent = "Place Vertically";
  return horizontalOrVerticalButton;
}
function checkIfShipInfoContainerIsAlreadyInitialized() {
  if (document.querySelector(".shipInfoContainer")) {
    let shipInfoContainer = document.querySelector(".shipInfoContainer");
    container.removeChild(shipInfoContainer);
    return shipInfoContainer;
  }
  const shipInfoContainer = document.createElement("div");
  shipInfoContainer.classList.add("sipInfoContainer");
  return shipInfoContainer;
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createShipInfoContainer() {
  let shipInfoContainer = checkIfShipInfoContainerIsAlreadyInitialized();
  removeAllChildNodes(shipInfoContainer);

  let para1 = document.createElement("p");
  para1.classList.add("para", "para1");
  para1.textContent = `Please Choose direction before clicking on a coordinate for placing the ship:`;

  let para2 = document.createElement("p");
  para2.classList.add("para", "para2");
  para2.textContent = `Ship length: ${shipsArr[shipsArr.length - 1].length}`;

  let horizontalOrVerticalButton = createHorizontalOrVerticalButton();

  shipInfoContainer.appendChild(para1);
  shipInfoContainer.appendChild(para2);
  shipInfoContainer.appendChild(horizontalOrVerticalButton);
  container.appendChild(shipInfoContainer);
}
function activateEventListenerForGameBoard() {
  const columns = document.querySelectorAll(".column");
  columns.forEach((column) => {
    column.addEventListener("click", (e) => {
      console.log(e.target);
      console.log(e.target.dataset.coordinates);
      let coordinates = e.target.dataset.coordinates;
      let direction = document.querySelector(".horizontalOrVerticalButton")
        .dataset.direction;
      if (shipsArr.length > 0) {
        let ship = shipsArr[shipsArr.length - 1];
        player1.gameBoard.placeShip(ship, coordinates, direction, shipsArr);
      }
      if (shipsArr.length > 0) {
        createShipInfoContainer();
      }
      console.log(player1.gameBoard.keepTrack);
    });
  });
}

// now we want to place the ships on game board
// to do this we need to use placeShip method of GameBoard class
/**and place ship method takes
 * 1. a ship object
 * 2. coordinates
 * 3. direction
 *
 * 1. a ship object
 *   we want the game to have 5 ships with lengths 5,4,3,2,1
 * so what we will do is we will create instances of the Ship class with ships having length 5,4,3,2,1 and we will store it in an array
 *
 * 2. coordinates
 * we will get coordinates from the player, using a event listener on click on game board.
 * 3. direction
 * we will get this from player too, but for default we will set it to horizontal and will change when ever the button is clicked
 */
export {
  createGridForGameBoard,
  createHorizontalOrVerticalButton,
  createShipInfoContainer,
};

// what do we need to make players placing ships on game board
/**
 *we need a game board
we want a button which will help player telling us that he want to place the ship horizontally or vertically
then we will tell player about the ship length in a div
then we will tell player to click on coordinate from where he wants to start placing his ship

 */
