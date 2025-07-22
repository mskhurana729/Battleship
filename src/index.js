import { createGridForGameBoard, createShipInfoContainer } from "./js/dom.js";
import { Player } from "./js/player.js";
import "./style.css";
const player1 = new Player();
const player2 = new Player();
createGridForGameBoard();
createShipInfoContainer();

// createHorizontalOrVerticalButton();
