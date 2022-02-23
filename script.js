let gridInner= document.getElementById('grid_inner');

let style = document.createElement('style');

let head = document.head;

head.appendChild(style);

function styleGrid(size) {
    style.innerHTML = `#grid_inner {grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);}`;
}

function createCell() {
    const div = document.createElement('div');
    div.classList.add("cell")
    return div;
}

function createGrid(size) {
    let gridSize = size * size;
    let cellFrag = document.createDocumentFragment();
    styleGrid(size);
    for (let i = 0; i < gridSize; i++) {
        cellFrag.appendChild(createCell());
    }
    gridInner.appendChild(cellFrag);
} 

/* 
make function that creates grid with grid size input
create divs = to grid size squared
*/