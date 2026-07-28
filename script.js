const GRID_WIDTH = 16;
const GRID_LENGTH = 16;

function createGrid()
{
    const container = document.querySelector("#container");

    for (let i = 0; i < GRID_WIDTH; i++)
    {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let j = 0; j < GRID_LENGTH; j++)
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
    event.target.style.backgroundColor = "black";
}

createGrid();