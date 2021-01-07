const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./client/dist'));

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request from ${req.path}`);
  next();
});



app.listen(port, () => {
  console.log(`Express listening on port ${port}!`);
});

