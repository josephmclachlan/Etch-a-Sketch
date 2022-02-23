let gridInner= document.getElementById('grid_inner');

let style = document.createElement('style');

let head = document.head;

let btn = document.querySelectorAll('button');

let colorSelection = "rgba(57,50,154,1)"

let slider = document.getElementById("slider")

let gridSize = document.getElementById("grid-size")

let cyberpunkColor = ["#ff124f", "#ff00a0", "fe75fe", "#7a04eb", "#120458"]

for (const i of btn) {
i.addEventListener('click', changeColor)
}

slider.addEventListener('input', sliderEvent)

function sliderEvent() {
    updateCounter(this.value);
    clearGrid();
    createGrid(this.value);
}

function changeColor() {
    colorSelection = this.value;
}

head.appendChild(style);

function styleGrid(size) {
    style.innerHTML = `#grid_inner {grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);}`;
}

function createCell() {
    const div = document.createElement('div');
    div.classList.add("cell")
    return div;
}

function clearGrid() {
    gridInner.innerHTML = "";
}

function createGrid(size) {
    let gridSize = size * size;
    let cellFrag = document.createDocumentFragment();
    styleGrid(size);
    for (let i = 0; i < gridSize; i++) {
        cellFrag.appendChild(createCell());
    }
    gridInner.appendChild(cellFrag)
    let cellColor = document.getElementsByClassName("cell");
    addPen(cellColor);
    updateCounter(size);
} 

function updateCounter(size) {
    let sizeValue = size.toString();
    gridSize.innerHTML = `${sizeValue}x${sizeValue}`;
}

function addPen(value) {
    for( const i of value) {
       i.addEventListener('mouseover', paintColor)
       
    }
}

function paintColor(){
    if (colorSelection === "cyberpunk") {
        this.classList.remove('grey')
        this.style.backgroundColor = cyberpunkColorSelector();
    } else if (colorSelection === "greyscale") {
        rgbDarken(this);
    } else{
        this.classList.remove('grey')
        this.style.backgroundColor = `${colorSelection}`;
    }
}

function rgbDarken(value) {
    let cellData = value;
    if (cellData.classList.contains('grey')) {
        let rgbValue = cellData.style.backgroundColor.toString().slice(-3,-1);
        rgbValue = Number(rgbValue);
        rgbValue += .1;
        cellData.style.backgroundColor = `rgb(0,0,0,${rgbValue}`;
    }else {
        cellData.classList.add("grey");
        cellData.style.backgroundColor = "rgb(0,0,0,.1)"
    }
}

function cyberpunkColorSelector() {
    return cyberpunkColor[Math.floor(Math.random() * cyberpunkColor.length)]
}
