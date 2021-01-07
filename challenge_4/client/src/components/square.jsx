import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props)
    // should know if it's holding a piece or not
    // should know it's own position
  }

  render() {
    return (
      <div className="square">
        I am a Square. These are my coordinates: {`${this.props.x}, ${this.props.y}`}
      </div>
    )
  }
}

export default Square;