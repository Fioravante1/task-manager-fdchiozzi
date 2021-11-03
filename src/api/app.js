const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const tasksController = require('../controllers/tasksController');

app.use(bodyParser.json());

app.use('/tasks', tasksController);

module.exports = app;
