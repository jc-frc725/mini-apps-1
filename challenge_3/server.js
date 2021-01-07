// Express to serve index.html + assets
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request from url ${req.url}`);
  next();
});

// checkout button request handler
app.get('/f1', (req, res) => {
  console.log(req.path);
  res.send('received');
});

// f1 next button request handler
app.post('/f2', (req, res) => {
  // {name, email, password} found in req.body
  // pass to eventual db query?
  console.log(`receiving ${JSON.stringify(req.body)}`);
  res.send('f1 form complete, f2 form next');
});

// f2 next button request handler
app.post('/f3', (req, res) => {
  // JSON data in req.body
  // pass to eventual db query?
  console.log(`receiving ${JSON.stringify(req.body)}`);
  res.send('f2 form complete, f3 form next');
});

app.listen(port, ()=> {
  console.log(`Express listening at port ${port}!`);
})
