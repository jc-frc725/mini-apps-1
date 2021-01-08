import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props)
    // should know if it's holding a piece or not
    // should know it's own position
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    //console.log(this.props);
    this.props.placePiece();
  }

  render() {
    const style = {
      border: 'solid black 2px'
    }
    return (
      <div className="square" style={style} onClick={this.handleClick}>
        {`I am a Square. These are my coordinates: ${this.props.x}, ${this.props.y}`}
      </div>
    )
  }
}

export default Square;