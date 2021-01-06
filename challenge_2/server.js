const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 4000;
const url = '/csv_generator';

app.use(express.static('client'));
app.use(express.json());
app.use(express.urlencoded());

app.use('/', (req, res, next) => {
  console.log(`Incoming ${req.method} from ${req.path}`);
  next();
});


function jsonToCSV(json) {
  var result = [];
  let columnHeaders = Object.keys(json);
  columnHeaders.pop();
  result = columnHeaders.join(',') + '\n';

  function converter(obj) {
    let line = [];
    for (key in obj) {
      if (key !== 'children') {
        line.push(obj[key]);
        if (typeof obj[key] === 'number') {
          result += line.join(',');
          result += '\n';
        }
      } else {
        let children = obj[key]
        for (let i = 0; i < children.length; i++) {
          converter(children[i]);
        }
      }
    }
  }
  converter(json)
  return template(result);
}

function template(responseData) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Challenge 2: CSV Report Generator</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <h1>CSV Report Generator</h1>
      <form method="POST" action="/csv_generator">
        <textarea id="data" name="jsonData"></textarea>
        <input type="submit" value="Submit">
      </form>
      <div classname="server-response">
        ${responseData}
      <div>
    </body>
    <script src="app.js"></script>
  </html>
  `
}

const readJSON = (filepath, callback) => {
  fs.readFile(filepath, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

app.post(url, (req, res) => {
  // convert req.body to csv format, then send it back
  var filepath = path.resolve(__dirname, 'samples', req.body.jsonData);

  readJSON(filepath, (err, rawJSON) => {
    if (err) {
      console.log('read file error', err);
    } else {
      var parsedJSON = JSON.parse(rawJSON)
      var csv = jsonToCSV(parsedJSON);
      res.send(csv);
    }
  })


});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
