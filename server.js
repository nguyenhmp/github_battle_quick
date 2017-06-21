const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const port = process.env.PORT || '3000';
const app = express();
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
require('./server/config/mongoose.js')
require("./server/config/routes.js")(app);
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.redirect('/')
});
app.listen(port, () => console.log(`API running on localhost:${port}`));