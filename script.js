//Create grid based on user entered dimensions
function createGrid(x, y)
{
  for(let i = 0; i < (x * y); i++)
  {
    const newGridSquare = document.createElement("div");
    let squareSide = mainContainer.offsetHeight / y; 

    mainContainer.style.width = `${squareSide * x}px`;

    newGridSquare.classList.add("grid-square");
    newGridSquare.style.width = `${squareSide}px`;
    newGridSquare.style.height = `${squareSide}px`;

    newGridSquare.addEventListener("mouseover", () => {
      newGridSquare.style.backgroundColor = "black";
    });

    mainContainer.appendChild(newGridSquare);
    console.log(i + "\n");
  }
}

const mainContainer = document.querySelector("#main-container");

createGrid(50, 100);
