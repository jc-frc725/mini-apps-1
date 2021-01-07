import React from 'react';
import Row from './row.jsx';

const CheckerBoard = (props) => {
  let rows = [0, 1, 2, 3, 4, 5];
  return (
    <div className='board'>
      {rows.map(y =>
        <Row y={y} />
      )}
    </div>
  )
}

export default CheckerBoard;