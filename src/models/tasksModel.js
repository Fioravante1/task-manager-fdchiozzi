const { ObjectId } = require('mongodb');
const connection = require('./connection');

const findById = async (id) => {
  const db = await connection();
  if (!ObjectId.isValid(id)) {
    return null;
  }
  return db.collection('Tasks').findOne(ObjectId(id));
};

const getAll = async () => {
  const db = await connection();
  return db.collection('Tasks').find().toArray();
};

const create = async (tasks) => {
  const {
    task, description, status, date,
  } = tasks;
  const db = await connection();
  const newTask = await db.collection('Tasks').insertOne(tasks);
  const { insertedId } = newTask;
  return {
    task,
    description,
    status,
    date,
    insertedId,
  };
};

const update = async (id, task) => {
  const db = await connection();
  if (!ObjectId.isValid(id)) {
    return null;
  }
  await db.collection('Tasks').updateOne({ _id: ObjectId(id) }, { $set: task });
  return findById(id);
};

const deleteTask = async (id) => {
  const db = await connection();
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const task = await findById(id);
  db.collection('Tasks').deleteOne({ _id: ObjectId(id) });
  return task;
};

module.exports = {
  getAll,
  create,
  update,
  findById,
  deleteTask,
};
