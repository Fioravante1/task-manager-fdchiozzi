const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const tasksController = require('../controllers/tasksController');

app.use(bodyParser.json());

app.use('/', tasksController);

module.exports = app;
