import React from 'react';
import CheckerBoard from './checkerBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <CheckerBoard />
      </div>
    )
  }
}

export default App;
