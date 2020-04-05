const express = require('express');

const app = new express(); // eslint-disable-line new-cap

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server up!'); // eslint-disable-line no-console
});
