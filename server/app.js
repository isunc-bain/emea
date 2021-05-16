const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//accept only JSON
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

module.exports = app;
