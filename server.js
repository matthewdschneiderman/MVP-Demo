const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const opentdb = require('opentdb-api');

const port = process.env.PORT || 4100;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/opentdb', (req, res) => {
  if (req.query.method === 'categories') {
    opentdb
      .getCategories()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => console.log(err));
  } else {
    opentdb
      .getTrivia(JSON.parse(req.query.options))
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => console.log(err));
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log('listening on port: ', port, '.');
});
