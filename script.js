let numRows = 0;
let numCols = 0;
let colorSelected;

/* Button Functions: */

// Add Row
function addRow() {
    var row = document.createElement('tr');
    row.className = "row"
    if (numCols == 0) {
        let cell = document.createElement('td')
        row.appendChild(cell)
        numCols++
    }
    else {
        for (let i = 0; i < numCols; i++) {
            let cell = document.createElement('td')
            row.appendChild(cell)
        }
    }
    grid.appendChild(row)
    numRows++
}

// Add Column
function addColumn() {
    if (numRows == 0) {
        addRow()
    }
    else {
        let rows = document.querySelectorAll('.row');
        rows.forEach(function (row) {
            let col = document.createElement('td')
            row.appendChild(col)
        })
        numCols++;
    }
}

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

// Fill
function fill() {
    var cells = grid.getElementsByTagName("td")
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = colorSelected
    }
}

// Clear All
function clearAll() {
    var cells = grid.getElementsByTagName("td")
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "white"
    }
}

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
    //changeCell(); //where to put so this is always active ? 
}


// Change Cell Color(change color By clicking)
function changeCell() {
    var clicked = document.getElementById("box").click;
    if (clicked == true) {
        alert("box clicked")
        document.getElementById("box").background = colorSelected;
    }
    // mouse clicks on cell change to colorSelecetd value
}
$("#box").animate().css({
    background: colorSelected
}, 2500);