import React from 'react';
import Row from './row.jsx';

class CheckerBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerX: true
    }
    this.placePiece = this.placePiece.bind(this);
  }

  // handle a square click
  placePiece(square) {
    console.log(`its ${this.state.playerX}`);
    this.setState({playerX: !this.state.playerX})
  }

  render() {
    let rows = [0, 1, 2, 3, 4, 5];
    return (
      <div className='board'>
        {rows.map(y =>
          <Row y={y} placePiece={this.placePiece}/>
        )}
      </div>
    )
  }
}

export default CheckerBoard;