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
      ReactDOM.render(<F1Account />, document.getElementById('app'))
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
class F1Account extends React.Component {
  constructor(props) {
    super(props);
    this.handleF1Next = this.handleF1Next.bind(this);
  }

  handleF1Next(event) {
    // to send F1's state as JSON to be sent as request to server,
    // setState would have to be invoked everytime each input element was changed
    // bc that's too tedious, just construct the JSON body here, then try to send request
    // NEW NOTE: unless I remember/figure out how make something like
      // this.setState {event.target.id: event.target.value} happen
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let data = { name, email, password };
    //console.log(data);

    // later, need to try seperating fetch into another function
    fetch('/f2', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
    }).then(response => {
      console.log(response);
      // successful response, render F2
      ReactDOM.render(<F2Shipping />, document.getElementById('app'));
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
class F2Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.handleF2Next = this.handleF2Next.bind(this);
  }

  // on Next, the send something like: { address: {stuff}, phone#: 123}
  handleF2Next(event) {
    //event.preventDefault();
    let line1 = document.getElementById('line 1').value;
    let line2 = document.getElementById('line 2').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let zip = document.getElementById('zip').value;
    let phone = document.getElementById('phone-ID').value;

    // POST
    fetch('/f3', {
      method:'POST',
      body: JSON.stringify({ line1, line2, city, state, zip, phone }),
      headers: {'Content-Type': 'application/json'},
    }).then(response => {
      // next render
      console.log(response);

      ReactDOM.render(<F3Payment />, document.getElementById('app'));
    })

    event.preventDefault();
  }
  render() {
    return (
      <div className="f2">
        <h2>Please enter your address and phone number.</h2>
        <form className="f2-form">
          <div className="address">
            <label>Line 1: </label>
            <input id="line 1" type="text"></input>
            <label>Line 2: </label>
            <input id="line 2" type="text"></input>
            <label>City: </label>
            <input id="city" type="text"></input>
            <label>State: </label>
            <input id="state" type="text"></input>
            <label>Zip: </label>
            <input id="zip" type="text"></input>
          </div>
          <div className="phone-number">
            <label>Phone number: </label>
            <input id="phone-ID" type="text"></input>
          </div>
          <button onClick={this.handleF2Next}>Next</button>
        </form>
      </div>
    )
  }
}
// F3 - credit card #, expiry date, CVV, billing zip
class F3Payment extends React.Component {
  constructor(props) {
    super(props);
  }

  // on Next, send something like:

  render() {
    return (
      <div className="f3">
        <h2>Please enter your address and phone number.</h2>
        <form className="f3-form">
          <label>Line 1: </label>
            <input id="line 1" type="text"></input>
          <label>Line 2: </label>
            <input id="line 2" type="text"></input>
          <label>City: </label>
            <input id="city" type="text"></input>
          <label>State: </label>
            <input id="state" type="text"></input>
          <label>Zip: </label>
            <input id="zip" type="text"></input>
          <label>Phone number: </label>
            <input id="phone-ID" type="number"></input>
          <button onClick={this.handleF1Next}>Next</button>
        </form>
      </div>
    )
  }
}
// Confirmation. Summarize all previous data. When "purchase" completes, return to Homepage

ReactDOM.render(<App />, document.getElementById('app'))
