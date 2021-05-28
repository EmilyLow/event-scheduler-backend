
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('settings').del()
    .then(function () {
      // Inserts seed entries
      return knex('settings').insert([
        {id: 1, day_number: 3, hour_number: 13, start_hour: 9, start_date: new Date(2021, 4, 7).toISOString().replace('T', ' ')},
      ]);
    });
};

