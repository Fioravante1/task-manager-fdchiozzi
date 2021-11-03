const connection = require('./connection');

const getAll = async () => {
  const db = await connection();
  return db.collection('Tasks').find().toArray();
};

module.exports = {
  getAll,
};
