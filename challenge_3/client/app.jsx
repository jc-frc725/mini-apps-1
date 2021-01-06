// Use React to build front end
// AT SOME POINT: make MySQL db to store user data

// Homepage. When initiating Checkout, F1-3 is rendered?
// go to next form by clicking "Next"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleClickCheckout(event) {
    fetch('/f1', {
      method: 'GET'
    }).then(response => {
      console.log(response);
      // if the response is successful, render F1 to DOM?
      ReactDOM.render(<F1 />, document.getElementById('app'))
    });
  }

  render() {
    return (
      <div className="homepage">
        <h1>Homepage</h1>
        React is working.
        <div>
          <button onClick={this.handleClick}>Checkout</button>
        </div>
      </div>
    )
  }
}

// F1 - collect user info {name, email, password}
class F1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <div className="f1">
        <h2>Please create an account.</h2>
        <form>
          <label>Name:</label>
          <input type="text" value={this.state.name}></input>
          <label>Email:</label>
          <input type="text" value={this.state.name}></input>
          <label>Password:</label>
          <input type="text" value={this.state.name}></input>
        </form>
      </div>
    )
  }
}

// F2 - collect address {line1, line2, city, state, zip} + phone

// F3 - credit card #, expiry date, CVV, billing zip

// Confirmation. Summarize all previous data. When "purchase" completes, return to Homepage

ReactDOM.render(<App />, document.getElementById('app'))
