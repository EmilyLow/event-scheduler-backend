
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, event_name: 'Event 1'},
        {id: 2, event_name: 'Event 2'},
        {id: 3, event_name: 'Event 3'}
      ]);
    });
};
