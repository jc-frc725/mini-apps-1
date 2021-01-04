
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
  // first move always starts on player X
  boardModel.placeX = true;

  // initialize boardModel rows, contains no X or O, blank
  for (let i = 0; i < boardModel._rows.length; i++) {
    for (let j = 0; j < boardModel._rows[i].length; j++) {
      let blank = "&nbsp &nbsp &nbsp &nbsp &nbsp"
      boardModel._rows[i][j] = blank;
      // render boardModel's data into DOM in a pleasant way
      // fill HTML elements with blanks
      DOMrows[i].children[j].innerHTML = blank;
    }
  }
});

// View
// render boardModel's data into DOM in a pleasant way
// fill string data into <html> elements

// Controller
// add event listeners to each cell
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', event => {
    // If cell is already occupied, don't allow placing

    // ask to place X or O next
    if (boardModel.placeX) {
      cells[i].innerHTML = "&nbsp &nbsp X &nbsp &nbsp";
    } else {
      cells[i].innerHTML = "&nbsp &nbsp O &nbsp &nbsp";
    }
    // switch to X or O after placing
    boardModel.placeX = !boardModel.placeX;
  });
}

