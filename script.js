let gridRows = 16;
let gridCols = 16;
const gridContainer = document.querySelector("div");

function createGrid() {
    for (let i = 0; i < gridRows; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        gridContainer.appendChild(gridRow);
        for (let j = 0; j < gridCols; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridRow.appendChild(gridSquare);
        }
    }
}
