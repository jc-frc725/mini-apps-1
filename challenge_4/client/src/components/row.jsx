import React from 'react';
import Square from './square.jsx';

const Row = (props) => {
  const squares = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className='rows' style={{display: 'flex'}}>
      {squares.map(x =>
        <Square x={x} y={props.y} />
      )}
    </div>
  )
}

export default Row;