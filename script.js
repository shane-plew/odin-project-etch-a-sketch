//Create grid based on user entered dimensions
function createGrid(x, y)
{
  //Variables
  let tileSide = (body.offsetHeight * 0.9) / y;

  if((tileSide * x) > (body.offsetWidth * 0.9))
  {
    tileSide = (body.offsetWidth * 0.9) / x;
  }

  //Fill grid
  for(let i = 0; i < x; i++)
  {
    const newGridColumn = document.createElement("div");

    for(let j = 0; j < y; j++)
    {
      const newGridTile = document.createElement("div");

      //Add class to new grid tile
      newGridTile.classList.add("grid-tile");

      //Set tile dimensions
      newGridTile.style.width = `${tileSide}px`;
      newGridTile.style.height = `${tileSide}px`;

      newGridTile.addEventListener("mouseover", () => {
        newGridTile.style.backgroundColor = "black";
      });

      newGridColumn.appendChild(newGridTile);
    }

    mainContainer.appendChild(newGridColumn);
  }
}

function clearGrid()
{
  mainContainer.innerHTML = "";
}

function newGrid()
{
  let x = prompt("Please enter the width, number must be between 1 and 100");

  while(x < 1 || x > 100)
  {
    if(x < 1)
    {
      x = prompt("Width entered is too low!\nPlease enter a number between 1 and 100");
    }
    else if(x > 100)
    {
      x = prompt("Width entered is too high!\nPlease enter a number between 1 and 100");
    }
  }

    let y = prompt("Please enter the height, number must be between 1 and 100");

  while(y < 1 || y > 100)
  {
    if(y < 1)
    {
      y = prompt("Height entered is too low!\nPlease enter a number between 1 and 100");
    }
    else if(y > 100)
    {
      y = prompt("Height entered is too high!\nPlease enter a number between 1 and 100");
    }
  }

  clearGrid();

  createGrid(x, y);
}

//Variables
const body = document.querySelector("body");
const mainContainer = document.querySelector("#main-container");
const newGridBtn = document.querySelector("#new-grid");

//Create new grid when button is clicked
newGridBtn.addEventListener("click", newGrid);

//Create default grid
createGrid(16, 16);
