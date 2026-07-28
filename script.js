const GRID_WIDTH = 16;
const GRID_LENGTH = 16;

function createGrid()
{
    const container = document.querySelector("#container");

    for (let i = 0; i < GRID_WIDTH; i++)
    {
        for (let j = 0; j < GRID_LENGTH; j++)
        {
            const div = document.createElement("div");
            container.appendChild(div);
        }
    }
}