// Express to serve up index.html and assets
console.log('Hello world');

// Client should be able to submit JSON data to server, receive response of CSV-format

// obtain user input from form element
var userData = document.getElementById('data');
const button = document.querySelector('input');

button.addEventListener('submit', event => {
  // send userData.value to api
  console.log(userData.value);
})