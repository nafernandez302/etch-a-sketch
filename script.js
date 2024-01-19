function createGrid(){
    const grid = document.createElement("div");
    grid.classList.add("tile");
    return grid;
}

function cleanContainer() {
    const output = document.querySelector(".container");
    output.innerHTML = ""; // Limpiar el contenido anterior
}

function appendGrid(container){
    container.appendChild(createGrid());
}

const container = document.querySelector(".container");
const buttonAdd = document.querySelector(".button");
const input = document.querySelector("#inputTile");
buttonAdd.addEventListener("click", function(){
    cleanContainer();
    let n = input.value;
    for (let i = 0; i<n; i++) {
        appendGrid(container);
    }
});