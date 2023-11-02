document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.e;

  if (e.keyCode == 38) {
    // up arrow
    spawnCells();
    console.log("up");
  } else if (e.keyCode == 40) {
    // down arrow
    console.log("down");
  } else if (e.keyCode == 37) {
    // left arrow
    console.log("left");
  } else if (e.keyCode == 39) {
    // right arrow
    console.log("right");
  }
}

const arrowButtons = document.querySelectorAll(".arrow-keys");

arrowButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const keyCode = parseInt(this.getAttribute("data-key"));
    const event = new KeyboardEvent("keydown", { keyCode, which: keyCode });
    document.dispatchEvent(event);
  });
});

const biome = ["forest", "mountain", "coast", "desert"];
const cellType = ["free", "wall"];
const forestFreeCell = ["grass", "mud", "leaves"];
const forestWallCell = ["tree", "rock", "pond"];

const row15InnerCells = document.querySelectorAll(".row15 span");
const row14InnerCells = document.querySelectorAll(".row14 span");
const row13InnerCells = document.querySelectorAll(".row13 span");
const row12InnerCells = document.querySelectorAll(".row12 span");
const row11InnerCells = document.querySelectorAll(".row11 span");
const row10InnerCells = document.querySelectorAll(".row10 span");
const row9InnerCells = document.querySelectorAll(".row9 span");
const row8InnerCells = document.querySelectorAll(".row8 span");
const row7InnerCells = document.querySelectorAll(".row7 span");
const row6InnerCells = document.querySelectorAll(".row6 span");
const row5InnerCells = document.querySelectorAll(".row5 span");
const row4InnerCells = document.querySelectorAll(".row4 span");
const row3InnerCells = document.querySelectorAll(".row3 span");
const row2InnerCells = document.querySelectorAll(".row2 span");
const row1InnerCells = document.querySelectorAll(".row1 span");

let row15 = [];
let row14 = [];
let row13 = [];
let row12 = [];
let row11 = [];
let row10 = [];
let row9 = [];
let row8 = [];
let row7 = [];
let row6 = [];
let row5 = [];
let row4 = [];
let row3 = [];
let row2 = [];
let newCells = [];

function spawnCells() {
  row15 = [];
  for (let i = 0; i < 15; i++) {
    const row15InnerCell = row15InnerCells[i];
    row15.push(row14[i]);
    row15InnerCell.className = `${row15[i]}`;
  }
  row14 = [];
  for (let i = 0; i < 15; i++) {
    const row14InnerCell = row14InnerCells[i];
    row14.push(row13[i]);
    row14InnerCell.className = `${row14[i]}`;
  }
  row13 = [];
  for (let i = 0; i < 15; i++) {
    const row13InnerCell = row13InnerCells[i];
    row13.push(row12[i]);
    row13InnerCell.className = `${row13[i]}`;
  }
  row12 = [];
  for (let i = 0; i < 15; i++) {
    const row12InnerCell = row12InnerCells[i];
    row12.push(row11[i]);
    row12InnerCell.className = `${row12[i]}`;
  }
  row11 = [];
  for (let i = 0; i < 15; i++) {
    const row11InnerCell = row11InnerCells[i];
    row11.push(row10[i]);
    row11InnerCell.className = `${row11[i]}`;
  }
  row10 = [];
  for (let i = 0; i < 15; i++) {
    const row10InnerCell = row10InnerCells[i];
    row10.push(row9[i]);
    row10InnerCell.className = `${row10[i]}`;
  }
  row9 = [];
  for (let i = 0; i < 15; i++) {
    const row9InnerCell = row9InnerCells[i];
    row9.push(row8[i]);
    row9InnerCell.className = `${row9[i]}`;
  }
  row8 = [];
  for (let i = 0; i < 15; i++) {
    const row8InnerCell = row8InnerCells[i];
    row8.push(row7[i]);
    row8InnerCell.className = `${row8[i]}`;
  }
  row7 = [];
  for (let i = 0; i < 15; i++) {
    const row7InnerCell = row7InnerCells[i];
    row7.push(row6[i]);
    row7InnerCell.className = `${row7[i]}`;
  }
  row6 = [];
  for (let i = 0; i < 15; i++) {
    const row6InnerCell = row6InnerCells[i];
    row6.push(row5[i]);
    row6InnerCell.className = `${row6[i]}`;
  }
  row5 = [];
  for (let i = 0; i < 15; i++) {
    const row5InnerCell = row5InnerCells[i];
    row5.push(row4[i]);
    row5InnerCell.className = `${row5[i]}`;
  }
  row4 = [];
  for (let i = 0; i < 15; i++) {
    const row4InnerCell = row4InnerCells[i];
    row4.push(row3[i]);
    row4InnerCell.className = `${row4[i]}`;
  }
  row3 = [];
  for (let i = 0; i < 15; i++) {
    const row3InnerCell = row3InnerCells[i];
    row3.push(row2[i]);
    row3InnerCell.className = `${row3[i]}`;
  }
  row2 = [];
  for (let i = 0; i < 15; i++) {
    const row2InnerCell = row2InnerCells[i];
    row2.push(newCells[i]);
    row2InnerCell.className = `${row2[i]}`;
  }
  newCells = [];

  row1InnerCells.forEach((Row1Column) => {
    const randomNum4CellFill = Math.floor(Math.random() * 101);
    // for each column of the row (15), generate random num from 1 to 100
    console.log("randomNum4CellFill:", randomNum4CellFill);

    if (randomNum4CellFill <= 80) {
      // if generated number is under 80, generate non blocking cell
      const randomNum4FreeCellFill = Math.floor(
        Math.random() * forestFreeCell.length
        // generate random number between 0 and forestFreeCell.length to pick a cell type
      );
      console.log("randomNum4FreeCellFill:", randomNum4FreeCellFill);
      {
        const selectedCell = forestFreeCell[randomNum4FreeCellFill];
        // assign cell type to selectedCell
        Row1Column.className = `${selectedCell}`;
        // assign cell type as a class name to row1Column[n]
        newCells.push(selectedCell);
        // push cell type to newCells array
      }
    } else {
      // if generated number is over 80, generate blocking cell
      const randomNum4WallCellFill = Math.floor(
        Math.random() * forestWallCell.length
        // generate random number between 0 and forestWallCell.length to pick a cell type
      );
      console.log("randomNum4WallCellFill:", randomNum4WallCellFill);
      {
        const selectedCell = forestWallCell[randomNum4WallCellFill];
        // assign cell type to selectedCell
        Row1Column.className = `${selectedCell}`;
        // assign cell type as a class name to row1Column[n]
        newCells.push(selectedCell);
        // push cell type to newCells array
      }
    }
  });
  console.log("newCells:", newCells);
}
