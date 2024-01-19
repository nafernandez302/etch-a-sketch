function createGrid(){
    const grid = document.createElement("div");
    grid.classList.add("tile");
    return grid
}


const container = document.querySelector(".container");

let n = 300;
for (let index = 0; index < n; index++) {
    container.appendChild(createGrid());  
}