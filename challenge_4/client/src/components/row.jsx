import React from 'react';
import Square from './square.jsx';

const Row = ({y, placePiece}) => {
  const squares = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className='rows' style={{display: 'flex'}}>
      {squares.map(x =>
        <Square x={x} y={y} placePiece={placePiece}/>
      )}
    </div>
  )
}

export default Row;