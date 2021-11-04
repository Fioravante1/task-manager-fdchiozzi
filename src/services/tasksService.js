const Model = require('../models/tasksModel');

const findById = async (id) => {
  const card = await Model.findById(id);
  if (!card) {
    return null;
  }
  return card;
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
  const cardUpdate = await Model.update(id, task);
  return cardUpdate;
};

const deleteTask = async (id) => {
  const card = await Model.deleteTask(id);
  return card;
};

module.exports = {
  getAll,
  create,
  update,
  findById,
  deleteTask,
};
