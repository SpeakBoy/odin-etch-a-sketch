const gridContainer = document.querySelector("div");

function createGrid(gridRows) {
    for (let i = 0; i < gridRows; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        gridContainer.appendChild(gridRow);
        for (let j = 0; j < gridRows; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridRow.appendChild(gridSquare);
        }
    }
}

function clearGrid() {
    gridContainer.innerHTML = "";
}
