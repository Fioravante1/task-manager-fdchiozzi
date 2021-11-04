const express = require('express');
const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');

const Service = require('../services/tasksService');

const tasksRouter = express.Router();

tasksRouter.get('/', rescue(async (req, res) => {
  const tasksAll = await Service.getAll();
  return res.status(StatusCodes.OK).json(tasksAll);
}));

tasksRouter.get('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const card = await Service.findById(id);
  if (!card) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Tarefa não encontrada' });
  }
  return res.status(StatusCodes.OK).json(card);
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

tasksRouter.put('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const card = await Service.update(id, req.body);
  return res.status(StatusCodes.OK).json(card);
}));

module.exports = tasksRouter;
