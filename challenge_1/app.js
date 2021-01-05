const DOMrows = document.querySelector('table').rows;

// Model
const boardModel = {
  _rows: [[], [], []],
  placeX: null,
  winner: ''
}

const initialize = () => {
  boardModel._rows.forEach(row => {
    row[0] = '';
    row[1] = '';
    row[2] = '';
  })

  // first move always starts on player X
  boardModel.placeX = true;
  boardModel.winner = '';

  // View
  // render DOM
  for (let i = 0; i < boardModel._rows.length; i++) {
    for (let j = 0; j < boardModel._rows[i].length; j++) {
      DOMrows[i].children[j].innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp";
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
}


document.addEventListener('DOMContentLoaded', event => {
  initialize();
});

// Controller
let check3InARow = (row) => {
  if (row === 'XXX') {
    boardModel.winner = 'X';
  } else if (row === 'OOO') {
    boardModel.winner = 'O';
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
    let vertical = '';
    for (let j = 0; j < 3; j++) {
      vertical += boardModel._rows[j][i];
    }
    check3InARow(vertical);
  }
}

let checkDiagonals = () => {
  let leftDiagonal = boardModel._rows[0][0]
    + boardModel._rows[1][1]
    + boardModel._rows[2][2];
  check3InARow(leftDiagonal);
  let rightDiagonal = boardModel._rows[0][2]
    + boardModel._rows[1][1]
    + boardModel._rows[2][0];
  check3InARow(rightDiagonal);
}

// check for any 3 in a row
let checkForWin = () => {
  checkHorizontals();
  checkVerticals();
  checkDiagonals();
}

let displayWinner = () => {
  if (boardModel.winner) {
    let message = document.getElementById('win-message');
    message.append(`${boardModel.winner} has won!`);
  }
}

let isOccupied = (cell) => {
  return cell.includes('X') || cell.includes('O');
}

let addXorO = (cell, row, col) => {
  // if game has been won, do not do allow additional input
  if (boardModel.winner) {
    return;
  }

  if (!isOccupied(boardModel._rows[row][col])) {
    if (boardModel.placeX) {
      boardModel._rows[row][col] = "X";
    } else {
      boardModel._rows[row][col] = "O";
    }
    boardModel.placeX = !boardModel.placeX;
    cell.innerHTML = `&nbsp &nbsp ${boardModel._rows[row][col]} &nbsp &nbsp`;
  }

  checkForWin();
  displayWinner();
}

// button to reset entire game state
document.querySelector('button').addEventListener('click', event => {
  document.getElementById('win-message').textContent = '';
  initialize();
});

