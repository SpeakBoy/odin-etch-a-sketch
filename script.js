const gridContainer = document.querySelector(".grid-container");
const newGridBtn = document.querySelector("button");

newGridBtn.addEventListener("click", createNewGrid);

function createGrid(gridRows) {
    for (let i = 0; i < gridRows; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let j = 0; j < gridRows; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridRow.appendChild(gridSquare);
            gridSquare.addEventListener("mouseover", () => {
                gridSquare.style.backgroundColor = "black";
            });
            gridContainer.appendChild(gridRow);
        }
    }
}

function clearGrid() {
    gridContainer.innerHTML = "";
}

function createNewGrid() {
    const gridRows = prompt(
        "Please input the number of rows you would like your grid to contain (max 100):"
    );

    if (
        !isNaN(gridRows) &&
        gridRows % 1 === 0 &&
        gridRows <= 100 &&
        gridRows > 0
    ) {
        clearGrid();
        createGrid(gridRows);
    } else {
        alert("Invalid input. Please try again.");
    }
}
