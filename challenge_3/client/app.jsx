// Use React to build front end
// AT SOME POINT: make MySQL db to store user data

// Homepage. When initiating Checkout, F1-3 is rendered?
// go to next form by clicking "Next"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleClickCheckout = this.handleClickCheckout.bind(this);
  }

  // instantiate a new 'session' to save data to db
  handleClickCheckout(event) {
    // seperation: make below a seperate function?
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
          <button onClick={this.handleClickCheckout}>Checkout</button>
        </div>
      </div>
    );
  }
}

// F1 - collect user info {name, email, password}
class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleF1Next = this.handleF1Next.bind(this);
  }

  handleF1Next(event) {
    // to send F1's state as JSON to be sent as request to server,
    // setState would have to be invoked everytime each input element was changed
    // bc that's too tedious, just construct the JSON body here, then try to send request
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let data = { name, email, password };
    //console.log(data);

    fetch('/f2', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
    }).then(response => {
      console.log(response);
      // successful response, render F2
      ReactDOM.render(<F2 />, document.getElementById('app'));
    });

    event.preventDefault();
  }

  // Does state matter? Final check happens when submit button is pressed
  // later, some TODOs:
    // replace email input type="email"
    // replace password input type="password"
  render() {
    return (
      <div className="f1">
        <h2>Please create an account.</h2>
        <form className="f1-form">
          <label>Name: </label>
            <input id="name" type="text"></input>
          <label>Email: </label>
            <input id="email" type="text"></input>
          <label>Password: </label>
            <input id="password" type="text"></input>
          <button onClick={this.handleF1Next}>Next</button>
        </form>
      </div>
    )
  }
}

// F2 - collect address {line1, line2, city, state, zip} + phone
class F2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        F2
      </div>
    )
  }
}
// F3 - credit card #, expiry date, CVV, billing zip
// Confirmation. Summarize all previous data. When "purchase" completes, return to Homepage

ReactDOM.render(<App />, document.getElementById('app'))
