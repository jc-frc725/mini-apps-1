
// access all DOM board cells directly
// array-like format
var cells = document.getElementsByTagName('td');

// access the entire DOM board
const board = document.querySelector('table');
// HTMLTableElement methods apply to tables only

// access DOM board rows
const rows = board.rows;

// Model - board's internal state for rows and cells, win checking
const boardModel = {
  rows: [[], [], []],
  placeX: true
  // threeInRow: 'something',
  // checkForWin: function(rows) {
  //   'checks for a win'
  // }
}
// initialize board?
document.addEventListener('DOMContentLoaded', event => {
  boardModel.rows.forEach(row => {
    // initialize model rows, contains no X or O, blank
    row[0] = '1';
    row[1] = '2';
    row[2] = '3';
  });

  // first move always starts at player X
  boardModel.placeX = true;

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].children.length; j++) {
      rows[i].children[j].innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp";
    }
  }
});

// boardModel.rows.forEach(row => {
//   console.log(row);
// })

// View
// render boardModel's data into DOM in a pleasant way
// fill string data into <html> elements


// Controller
// add event listeners to each cell
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', event => {
    cells[i].innerHTML = "&nbsp &nbsp X &nbsp &nbsp";
  });
}

