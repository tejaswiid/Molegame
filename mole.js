let currMoletile;

let currPlanttile;
let score = 0;
let gameOver = false;

window.onload = function () {
  setGame();
};

function setGame() {
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", SelectTile);
    document.getElementById("board").appendChild(tile);
  }
  setInterval(setMole, 1000);
  setInterval(setPlant, 2000);
}

function getRandomTile() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) {
    return;
  }
  if (currMoletile) {
    currMoletile.innerHTML = "";
  }
  let mole = document.createElement("img");
  mole.src = "./monty-mole.png";

  let num = getRandomTile();

  if (currPlanttile && currPlanttile.id == num) {
    return;
  }
  currMoletile = document.getElementById(num);
  currMoletile.appendChild(mole);
}

function setPlant() {
  if (gameOver) {
    return;
  }
  if (currPlanttile) {
    currPlanttile.innerHTML = "";
  }
  let plant = document.createElement("img");
  plant.src = "./piranha-plant.png";

  let num = getRandomTile();

  if (currMoletile && currMoletile.id == "num") {
    return;
  }
  currPlanttile = document.getElementById(num);
  currPlanttile.appendChild(plant);
}

function SelectTile() {
  if (gameOver) {
    return;
  }
  if (this == currMoletile) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  } else if (this == currPlanttile) {
    document.getElementById("score").innerText =
      "GAME OVER: " + score.toString();
    gameOver = true;
  }
}
