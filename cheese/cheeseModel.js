const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  getById,
};

async function insert(cheese) {
    return db('cheese')
      .insert(cheese)
      .then(ids => {
        return getById(ids[0]);
      });
  }

async function update(id, changes) {
    return db('cheese')
      .where({ id })
      .update(changes);
  }

function remove(id) {
    return db('cheese')
      .where('id', id)
      .del();
  }
  

function getAll() {
  return db('cheese');
}

function getById(id) {
    return db('cheese')
      .where({ id })
      .first();
  }