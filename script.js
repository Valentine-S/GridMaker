let numRows = 0;
let numCols = 0;
let colorSelected;
var grid = document.getElementById('grid')

/* Button Functions: */

// Add Row
function addRow() {
    var row = document.createElement('tr');
    row.className = "row"
    if (numCols == 0) {
        let cell = document.createElement('td')
        cell.onclick = function () {
            this.style.backgroundColor = colorSelected;
        }
        row.appendChild(cell)
        numCols++
    }
    else {
        for (let i = 0; i < numCols; i++) {
            let cell = document.createElement('td')
            cell.onclick = function () {
                this.style.backgroundColor = colorSelected;
            }
            row.appendChild(cell)
        }
    }
    grid.appendChild(row)
    numRows++
}
// adds a row of cells when button is clicked on webpage 

// Add Column
function addColumn() {
    if (numRows == 0) {
        addRow()
    }
    else {
        let rows = document.querySelectorAll('.row');
        rows.forEach(function (row) {
            let col = document.createElement('td')
            col.onclick = function () {
                this.style.backgroundColor = colorSelected;
            }
            row.appendChild(col)
        })
        numCols++;
    }
}
// adds a column of cells and cycles through rows to add appropriate num 
// of cells to make a column 

// Remove Row
function removeRow() {
    if (numRows > 0) {
        grid.lastElementChild.remove()
        numRows--;
    }
    if (numRows == 0) {
        numCols = 0
    }

}
// removes a row of cells

// Remove Column
function removeColumn() {
    if (numCols > 0) {
        let rows = document.querySelectorAll('.row')
        rows.forEach(function (row) {
            row.lastElementChild.remove()
        })
        numCols--;
    }
    if (numCols == 0) {
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild)
        }
        numRows = 0
    }

}
// removes a column of cells

// Fill All Uncolored
function fillAllUncolored() {
    var cells = grid.getElementsByTagName("td")
    for (let i = 0; i < cells.length; i++) {
        currentStyle = getComputedStyle(cells[i])
        currentColor = currentStyle.backgroundColor
        if (currentColor == "rgb(255, 255, 255)") {
            cells[i].style.backgroundColor = colorSelected
        }
    }
}
// changes the color of all uncolored cells to a color chosen from dropdown
// b determini g if cells are white from rgb value

// Fill
function fillAll() {
    var cells = grid.getElementsByTagName("td")
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = colorSelected
    }
}
// fills all cells with a clor chosen form the color select dropdown 


// Clear All
function clearAll() {
    var cells = grid.getElementsByTagName("td")
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "white"
    }
}
// makes all cells revert to having no color by cycling through all 
// of the cells

// Select a Color (Changes glob var colorSelected)
function selected() {
    let optionSelected = document.getElementById("selectedID");
    let color = optionSelected.value;
    if (color == "Red") {
        colorSelected = "#FF0000";
    }
    else if (color == "Yellow") {
        colorSelected = "#FFFF00";
    }
    else if (color == "Green") {
        colorSelected = "#00FF00";
    }
    else if (color == "Blue") {
        colorSelected = "#0000FF";
    }
}

function changeBackground() {
    this.style.backgroundColor = colorSelected;
}
// changeBackgorund is used in addRow and addColumn to enable the changing 
// of an individual cell's color


// Change Cell Color(change color By clicking)
function changeCell() {
    var clicked = document.getElementById("box").click;
    if (clicked == true) {
        alert("box clicked")
        document.getElementById("box").background = colorSelected;
    }
    // mouse clicks on cell change to colorSelecetd value
}
// implements a dropdown to choose color options for the cells
