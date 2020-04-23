const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(cheese) {
  return db('cheese')
  .insert(cheese, 'id')
  .then(([id]) => get(id));
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('cheese');
}

function findById(id) {
  return null;
}
