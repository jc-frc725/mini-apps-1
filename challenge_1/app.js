
// access all DOM board cells directly
// array-like format
var cells = document.getElementsByTagName('td');

// access the entire DOM board
const board = document.querySelector('table');
// HTMLTableElement methods apply to tables only

// access DOM board rows
const DOMrows = board.rows;

// Model - board's internal state for rows and cells, win checking
const boardModel = {
  _rows: [[], [], []],
  placeX: true
  // threeInRow: 'something',
  // checkForWin: function(rows) {
  //   'checks for a win'
  // }
}
// initialize board?
document.addEventListener('DOMContentLoaded', event => {
  // verbose set up for boardModel's rows and cells
  boardModel._rows.forEach(row => {
    row[0] = '';
    row[1] = '';
    row[2] = '';
  })

  // first move always starts on player X
  boardModel.placeX = true;

  // initialize boardModel rows, contains no X or O, blank
  for (let i = 0; i < boardModel._rows.length; i++) {
    for (let j = 0; j < boardModel._rows[i].length; j++) {
      // let blank = "&nbsp &nbsp &nbsp &nbsp &nbsp"
      boardModel._rows[i][j] = "&nbsp &nbsp &nbsp &nbsp &nbsp";
      // render boardModel's data into DOM in a pleasant way
      // fill HTML elements with blanks
      DOMrows[i].children[j].innerHTML = boardModel._rows[i][j];
    }
  }

});


// View
// render boardModel's data into DOM in a pleasant way
// fill string data into <html> elements



// Controller

// can only put X/O on empty spaces
let isOccupied = (cell) => {
  return cell.includes('X') || cell.includes('O');
}

// click handler should update the boardModel with appropriate piece, then update DOM
let addXorO = (cell, row, col) => {
  // get model's cell
  // boardModel._rows[row][col];

  // check if this cell is currently occupied
  if (!isOccupied(boardModel._rows[row][col])) {
    // place X or O into boardModel cell
    if (boardModel.placeX) {
      boardModel._rows[row][col] = "&nbsp &nbsp X &nbsp &nbsp";
    } else {
      boardModel._rows[row][col] = "&nbsp &nbsp O &nbsp &nbsp";
    }
    // switch to X or O after placing
    boardModel.placeX = !boardModel.placeX;

    // update DOM to reflect boardModel
    cell.innerHTML = boardModel._rows[row][col];
  }

}

// add event listeners to each cell
for (let i = 0; i < DOMrows.length; i++) {
  for (let j = 0; j < DOMrows[i].children.length; j++) {
    let cell = DOMrows[i].children[j];
    cell.addEventListener('click', event => {
      addXorO(cell, i, j);
    });
  }
}

