// Express to serve up index.html and assets
const express = require('express');
const app = express();
const port = 3000;
const url = '/csv_generator';

app.use(express.static('client'));
app.use(express.json());
app.use(express.urlencoded());

app.use('/', (req, res, next) => {
  console.log(`Incoming ${req.method} from ${req.path}`);
  next();
});

app.get(url, (req, res) => {
  res.send('Testing mini app 2 server.');
});

app.post(url, (req, res) => {
  // convert req.body to csv format, then send it back
  var rawJSON = req.body.jsonData;
  var parsedJSON = JSON.parse(rawJSON);

  // all initial keys except "children" are columns for csv
  var result = [];
  let columnHeaders = Object.keys(parsedJSON);
  columnHeaders.pop();
  result = columnHeaders.join(',') + '\n';

  function jsonToCSV(obj) {
    let line = [];
    for (key in obj) {
      if (key !== 'children') {
        line.push(obj[key]);
      } else {
        let children = obj[key]
        for (let i = 0; i < children.length; i++) {
          jsonToCSV(children[i]);
        }
      }
    }
    result += line.join(',');
    result += '\n';
  }
  jsonToCSV(parsedJSON);

  // send back html template of page, but with csv also attached
  // this is very gross but works for now?
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

  res.send(template(result));
});

// Client should be able to submit JSON data to server, receive response of CSV-format

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

/*
The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
You may also assume that child records in the JSON will always be in a property called `children`.
*/
