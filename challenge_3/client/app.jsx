// Use React to build front end

// AT SOME POINT: make MySQL db to store user data
// import React from 'react';
// import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        React is working
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
