const express = require('express');
const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');

const Service = require('../services/tasksService');

const tasksRouter = express.Router();
const validateTasks = require('../middlewares/tasksMiddlewares');

tasksRouter.get('/', rescue(async (req, res) => {
  const tasksAll = await Service.getAll();
  return res.status(StatusCodes.OK).json(tasksAll);
}));

tasksRouter.get('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const task = await Service.findById(id);
  if (!task) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Tarefa não encontrada' });
  }
  return res.status(StatusCodes.OK).json(task);
}));

tasksRouter.post('/',
  validateTasks,
  rescue(async (req, res) => {
    const date = new Date();
    const { tasks, description, taskStatus } = req.body;
    const task = await Service.create({
      tasks,
      description,
      taskStatus,
      date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
    });
    return res.status(StatusCodes.CREATED).json({ task });
  }));

tasksRouter.put('/:id',
  validateTasks,
  rescue(async (req, res) => {
    const { id } = req.params;
    const task = await Service.update(id, req.body);
    return res.status(StatusCodes.OK).json(task);
  }));

tasksRouter.delete('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const task = await Service.deleteTask(id);
  return res.status(StatusCodes.NO_CONTENT).json(task);
}));

module.exports = tasksRouter;
