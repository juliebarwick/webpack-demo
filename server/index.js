const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const staticFiles = path.join(__dirname, '..', 'client', 'dist');

// app.use + express.static will serve our static files
// INSTEAD of sending 'Hello World' when we make a GET request at '/'
app.use(express.static(staticFiles));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});