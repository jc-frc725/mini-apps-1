// Client should be able to submit JSON data to server, receive response of CSV-format

// obtain user input from form element
var userData = document.getElementById('data');
const button = document.querySelector('input');

// button.addEventListener('submit', event => {
//   // send userData.value to api
//   event.preventDefault();
//   $.ajax({
//     method: 'POST',
//     url: 'csv_generator',
//     data: userData.value
//   });
// });

$('form').on('submit', event => {
  event.preventDefault();
  $.ajax({
    method: 'POST',
    url: 'csv_generator',
    data: userData.value,
    success: (data) => {
      $('html').innerHTML = data;
    }
  });
});