const Model = require('../models/tasksModel');

const getAll = async () => {
  const tasks = await Model.getAll();
  return tasks;
};

module.exports = {
  getAll,
};
