
exports.up = function(knex) {
  return knex.schema.createTable('events', function(table) {
      table.increments();
      table.string('event_name');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('events');
};
