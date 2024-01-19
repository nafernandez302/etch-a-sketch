const CONTAINER_SIZE = 480;
function createGrid(size){
    const grid = document.createElement("div");
    grid.classList.add("tile");
    grid.style.width = size + "px";
    grid.style.height = size + "px";
    return grid;
}

function cleanContainer() {
    const output = document.querySelector(".container");
    output.innerHTML = ""; // Limpiar el contenido anterior
}

const container = document.querySelector(".container");
const buttonAdd = document.querySelector(".button");
const input = document.querySelector("#inputTile");

buttonAdd.addEventListener("click", function(){
    cleanContainer();
    let n = input.value;
    let size = CONTAINER_SIZE/n;
    console.log(size);
    for (let i = 0; i< n*n; i++) {
        container.appendChild(createGrid(size));
    }
    let classTile = document.querySelector(".tile");
});