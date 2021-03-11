let numRows = 0;
let numCols = 0;
let colorSelected;

/* Button Functions: */

// Add Row
function addRow() {
    var row = document.createElement('div');
    row.className = "row";
    row.id = numRows;
    if (numCols == 0) {
        var box = document.createElement('div');
        box.className = "box";
        row.appendChild(box);
        numCols++;
    }
    else {
        for (var j = 0; j < numCols; j++) {
            var box = document.createElement('div');
            box.className = "box";
            row.appendChild(box);
        }
    }
    numRows++;
    document.getElementById('grid').appendChild(row);
}

// Add Column
function addColumn() {
    let curRow = 0;

    if (numRows == 0) {
        var row = document.createElement('div');
        row.className = "row";
        row.id = numRows;
        numRows++;
        var box = document.createElement('div');
        box.className = "box";
        row.appendChild(box);
        document.getElementById('grid').appendChild(row);
    }
    else {
        for (var j = 0; j < numRows; j++) {
            var box = document.createElement('div');
            box.className = "box";
            box.id = curRow + "," + numCols; //The id of a box would be in the form of "Row,Col" Ex. "5,3"
            document.getElementById(curRow).appendChild(box);
            curRow++;
        }
    }
    numCols++;
}

// Remove Row
function removeRow() {
    for (var j = 0; j < numCols; j++) {
        document.getElementById(numRows - 1).lastElementChild.remove();
    }
    document.getElementById(numRows - 1).remove();
    numRows--;
}

// Remove Column
function removeColumn() {
    for (var j = 0; j < numRows; j++) {
        document.getElementById(j).lastElementChild.remove();
    }
    numCols--;
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
function fillAll() {
    var cells = grid.getElementsByTagName("td")
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = colorSelected
    }
}

// Clear All
function clearAll() { }

// Select a Color (Changes glob var colorSelected)
function selected() {
    let optionSelected = document.getElementById("selectedID"); //select onchange componnet's option value strings
    let color = optionSelected.option.getElementById("value"); // ?
    switch (color) {
        case "Red":
            colorSelected = "rgb(255, 0, 0)";
        case "Yellow":
            colorSelected = "rgb(255, 255, 0)";
        case "Blue":
            colorSelected = "rgb(0, 0, 255)";
        case "Green":
            colorSelected = "rgb(0, 255, 0)";
    }
}

// Change Cell Color(change color By clicking)
function changeCell() {
    document.getElementById("box").click;
    // mouse clicks on cell change to colorSelecetd value
} $("#box").animate().css({
    background: colorSelected
}, 2500);