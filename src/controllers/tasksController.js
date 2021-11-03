const express = require('express');
const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');

const Service = require('../services/tasksService');

const tasksRouter = express.Router();

tasksRouter.get('/', rescue(async (req, res) => {
  const tasksAll = await Service.getAll();
  return res.status(StatusCodes.OK).json(tasksAll);
}));

tasksRouter.post('/', rescue(async (req, res) => {
  const date = new Date();
  const { task, description, status } = req.body;
  const tasks = await Service.create({
    task,
    description,
    status,
    date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
  });
  return res.status(StatusCodes.CREATED).json({ tasks });
}));

module.exports = tasksRouter;
