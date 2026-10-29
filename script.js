//Create grid based on user entered dimensions
function createGrid(x, y)
{
  for(let i = 0; i < (x * y); i++)
  {
    //Variables
    const newGridSquare = document.createElement("div");
    let squareSide = mainContainer.offsetHeight / y; 

    //Set width of grid container
    mainContainer.style.width = `${squareSide * x}px`;

    //Style grid square and add mouseover event
    newGridSquare.classList.add("grid-square");
    newGridSquare.style.width = `${squareSide}px`;
    newGridSquare.style.height = `${squareSide}px`;

    newGridSquare.addEventListener("mouseover", () => {
      newGridSquare.style.backgroundColor = "black";
    });

    //Fill grid
    mainContainer.appendChild(newGridSquare);
    console.log(i + "\n");
  }
}

//Variables
const mainContainer = document.querySelector("#main-container");

createGrid(50, 100);
