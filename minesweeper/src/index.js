/*-----Header-----*/
let header = document.createElement('h1');
header.classList.add("header");
header.innerHTML = "Minesweeper";
document.body.append(header);

import { createMatrix } from "../utils/matrix.mjs";

function startGame() {
  createMatrix();
}

startGame();