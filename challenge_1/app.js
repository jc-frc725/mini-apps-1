
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

// click handler should update the boardModel with appropriate piece
// which is then reflected on DOM
let addXorO = (cell) => {
  if (boardModel.placeX) {
    cell.innerHTML = "&nbsp &nbsp X &nbsp &nbsp";
  } else {
    cell.innerHTML = "&nbsp &nbsp O &nbsp &nbsp";
  }
  // switch to X or O after placing
  boardModel.placeX = !boardModel.placeX;
}

// add event listeners to each cell


for (let i = 0; i < DOMrows.length; i++) {
  for (let j = 0; j < DOMrows[i].children.length; j++) {
    let cell = DOMrows[i].children[j];
    cell.addEventListener('click', event => {
      addXorO(cell);
    });
  }
}

