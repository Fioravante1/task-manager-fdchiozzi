const express = require('express');
const rescue = require('express-rescue');

const Service = require('../services/tasksService');

const tasksRouter = express.Router();

tasksRouter.get('/', rescue(async (req, res) => {
  const tasksAll = await Service.getAll();
  return res.status(200).json(tasksAll);
}));

module.exports = tasksRouter;
