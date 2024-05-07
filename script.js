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
            let timesCalled = 0;
            gridSquare.addEventListener("mouseover", () => {
                const randomRedValue = Math.floor(Math.random() * 256);
                const randomGreenValue = Math.floor(Math.random() * 256);
                const randomBlueValue = Math.floor(Math.random() * 256);
                const opacityValue = lowerOpacity(++timesCalled);
                gridSquare.style.backgroundColor =
                    "rgba(" +
                    randomRedValue +
                    ", " +
                    randomGreenValue +
                    ", " +
                    randomBlueValue +
                    ", " +
                    opacityValue +
                    ")";
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

function lowerOpacity(timesCalled) {
    if (timesCalled <= 10) {
        return parseFloat(1 - parseFloat(0.1 * timesCalled)).toFixed(1);
    } else return 0.0;
}
