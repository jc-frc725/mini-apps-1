// Express to serve index.html + assets
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

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
  console.log(req.path);
  res.send('f1 form complete, f2 form next');
});


app.listen(port, ()=> {
  console.log(`Express listening at port ${port}!`);
})
