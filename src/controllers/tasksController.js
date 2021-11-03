const express = require('express');
const rescue = require('express-rescue');

const tasksRouter = express.Router();

tasksRouter.get('/', rescue(async (req, res) => res.status(200).json({ Nome: 'Fioravante Chiozzi' })));

module.exports = tasksRouter;
