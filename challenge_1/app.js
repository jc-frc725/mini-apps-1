
// access all DOM board cells directly
// array-like format
//var cells = document.getElementsByTagName('td');

// access the entire DOM board
const board = document.querySelector('table');
// HTMLTableElement methods apply to tables only

// access DOM board rows
const DOMrows = board.rows;

// Model - board's internal state for rows and cells, win checking
const boardModel = {
  _rows: [[], [], []],
  placeX: true,
  winner: ''
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
      // boardModel._rows[i][j] = "&nbsp &nbsp &nbsp &nbsp &nbsp";
      // render boardModel's data into DOM in a pleasant way
      // fill HTML elements with blanks
      DOMrows[i].children[j].innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp"
    }
  }

});


// View
// render boardModel's data into DOM in a pleasant way
// fill string data into <html> elements

// Controller

// find any 3 in a row
let checkForWin = () => {
  // check horizontals (one row, cols 0-2)
  checkHorizontals();
  // check verticals (rows 0-2, one col)
  checkVerticals();

  // check diagonals (0,0, 1,1, 2,2 || 0,2, 1,1, 2,0 )
  // if (boardModel.winner) {
  //   console.log(`${winner} has won!`);
  // }
}

let check3InARow = (row) => {
  if (row === 'XXX') {
    // console.log('X win')
    boardModel.winner = 'X'
  } else if (row === 'OOO') {
    // console.log('O win')
    boardModel.winner = 'O'
  }
}

let checkHorizontals = () => {
  boardModel._rows.forEach(row => {
    let horizontal = row.join('');
    check3InARow(horizontal);
  });
}

let checkVerticals = () => {
  for (let i = 0; i < 3; i++) {
    let vertical = ''
    for (let j = 0; j < 3; j++) {
      vertical += boardModel._rows[j][i];
    }
    check3InARow(vertical);
  }
}
let checkDiagonals

let showWinner = () => {
  if (boardModel.winner) {
    console.log(`${boardModel.winner} has won!`);
  }
}

let isOccupied = (cell) => {
  return cell.includes('X') || cell.includes('O');
}

// click handler should update the boardModel with appropriate piece, then update DOM
let addXorO = (cell, row, col) => {
  // check if this cell is currently occupied
  if (!isOccupied(boardModel._rows[row][col])) {
    // place X or O into boardModel cell
    if (boardModel.placeX) {
      boardModel._rows[row][col] = "X";
    } else {
      boardModel._rows[row][col] = "O";
    }
    // switch to X or O after placing
    boardModel.placeX = !boardModel.placeX;

    // update DOM to reflect boardModel
    cell.innerHTML = `&nbsp &nbsp ${boardModel._rows[row][col]} &nbsp &nbsp`
  }

  // check for win condition
  checkForWin();
  showWinner();
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

