const INITIAL_GRID_WIDTH = 16;

const container = document.querySelector("#container");

const changeGridSizeBtn = document.querySelector("button");
changeGridSizeBtn.addEventListener("click", changeGridSize);

function clearGrid()
{
    while (container.firstChild)
    {
        container.removeChild(container.lastChild);
    }
}

function createGrid(gridWidth)
{
    for (let i = 0; i < gridWidth; i++)
    {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let j = 0; j < gridWidth; j++)
        {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            tile.addEventListener("mouseenter", (e) => changeTileColor(e));
            row.appendChild(tile);
        }
    }
}

function changeTileColor(event)
{
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;
    event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function changeGridSize()
{
    
    let gridWidth = Math.floor(+prompt(
        "Enter the number of squares per side for this new grid: "
    ));

    gridWidth = gridWidth > 100 ? 100 : gridWidth;

    clearGrid();
    createGrid(gridWidth);
}

createGrid(INITIAL_GRID_WIDTH);