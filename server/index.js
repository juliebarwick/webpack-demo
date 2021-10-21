const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const root = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(root));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`React app listening at http://localhost:${port}`)
});