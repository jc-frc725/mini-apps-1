// Express to serve index.html + assets
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request from url ${req.url}`);
  next();
})

// checkout request handler
app.get('/f1', (req, res) => {
  console.log(req.path)
  res.send('received')
})


app.listen(port, ()=> {
  console.log(`Express listening at port ${port}!`);
})
