exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('cheese')
    .truncate()
    .then(function() {
      return knex('cheese').insert([
        { type: 'Cheddar' },
        { type: 'Mozzarella' },
        { type: 'Parmesan' },
        { type: 'Gouda' },
      ]);
    });
};
