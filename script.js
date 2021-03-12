let numRows = 0;
let numCols = 0;
let colorSelected;

/* Button Functions: */

// Add Row
function addRow() {
}

// Add Column
function addColumn() {
}
// Remove Row
function removeRow() {
}

// Remove Column
function removeColumn() {
}

// Fill All Uncolored
function fillAllUncolored() {
}

// Fill
function fill() {
}

// Clear All
function clearAll() {
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
}


// Change Cell Color(change color By clicking)
function changeCell() {
    var clicked = onClick();
    if (clicked == true) {
        document.getElementById("box").background = colorSelected;
    }
    // mouse clicks on cell change to colorSelecetd value
}
/*
$("#box").animate().css({
    background: colorSelected
}, 2500);
*/