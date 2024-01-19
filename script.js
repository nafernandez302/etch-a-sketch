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
    let n = input.value;
    if(n > 50 || n < 1){
        alert("ERROR: ingrese un número entre 1 y 50");
        return;
    }

    cleanContainer();
    let size = CONTAINER_SIZE / n;
    size = size*100;
    size = Math.floor(size);
    size = size/100;
    for (let i = 0; i < n * n; i++) {
        container.appendChild(createGrid(size));
    }
    container.style.width = CONTAINER_SIZE + "px";
    container.style.height = CONTAINER_SIZE + "px";
});