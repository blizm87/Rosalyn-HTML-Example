const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({extended: false}));

const port = 3000;

app.listen(port, () => {
  console.log('Server is listening!!!');
})
