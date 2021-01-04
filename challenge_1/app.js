
// access all board cells directly
// array-like format
var cells = document.getElementsByTagName('td');
console.log(cells);

// access the entire board
const board = document.querySelector('table');
// HTMLTableElement methods apply to tables only

// access board rows
const rows = board.rows;
console.log(rows);

// add event listeners to each cell
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', event => {
    console.log('event listner test');
  })
}