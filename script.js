let numRows = 0;
let numCols = 0;
let colorSelected;

/* Button Functions: */

// Add Row
function addRow() {
    var row = document.createElement('div');
    row.className = "row";
    row.id = numRows;
    if(numCols == 0){
        var box = document.createElement('div');
        box.className = "box";
        row.appendChild(box);
        numCols++;
    }
    else{
        for (var j = 0; j < numCols;j++){
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

    if(numRows == 0){
        var row = document.createElement('div');
        row.className = "row";
        row.id = numRows;
        numRows++;
        var box = document.createElement('div');
        box.className = "box";
        row.appendChild(box);
        document.getElementById('grid').appendChild(row);
    }
    else{
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
function removeRow() {}

// Remove Column
function removeColumn() {}

// Fill All Uncolored
function fillAllUncolored() {}

// Fill
function fill() {}

// Clear All
function clearAll() {}

// Select a Color (Changes glob var colorSelected)
function selected() {}
