const express = require('express');
const bodyParser = require('body-parser');

const app = new express(); // eslint-disable-line new-cap
// register JSON parser middlewear
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server up!'); // eslint-disable-line no-console
});
