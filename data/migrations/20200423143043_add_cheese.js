exports.up = function(knex, Promise) {
    return knex.schema.createTable('cheese', tbl => {
      tbl.increments();
  
      tbl.string('type', 255).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cheese');
  };
  