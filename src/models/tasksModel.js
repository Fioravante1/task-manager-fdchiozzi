const connection = require('./connection');

const getAll = async () => {
  const db = await connection();
  return db.collection('Tasks').find().toArray();
};

const create = async (tasks) => {
  const {
    task, description, status, date,
  } = tasks;
  const db = await connection();
  const newCard = await db.collection('Tasks').insertOne(tasks);
  const { insertedId } = newCard;
  return {
    task,
    description,
    status,
    date,
    insertedId,
  };
};

module.exports = {
  getAll,
  create,
};
