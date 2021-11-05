const Model = require('../models/tasksModel');
const Error = require('../helpers/errors');

const findById = async (id) => {
  const task = await Model.findById(id);
  if (!task) {
    return Error.notFound('Tarefa não encontrada');
  }
  return task;
};

const getAll = async () => {
  const tasks = await Model.getAll();
  return tasks;
};

const create = async (tasks) => {
  const newTasks = await Model.create(tasks);
  return newTasks;
};

const update = async (id, task) => {
  const taskId = await findById(id);
  if (!taskId) {
    return Error.notFound('Tarefa não encontrada');
  }
  const taskUpdate = await Model.update(id, task);
  return taskUpdate;
};

const deleteTask = async (id) => {
  const task = await Model.deleteTask(id);
  return task;
};

module.exports = {
  getAll,
  create,
  update,
  findById,
  deleteTask,
};
