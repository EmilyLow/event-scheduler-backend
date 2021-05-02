
exports.up = function(knex) {
  return knex.schema.createTable('events', function(table) {
      table.increments("id");
      table.string('event_name').notNull();
      table.text("speaker");
      table.text("summary");
      table.text("location");
      table.integer("start_time");
      table.integer("end_time");
      //Do not null AFTER basic endpoint testing
      // table.integer("start_time").notNull();
      // table.integer("end_time").notNull();

      //These may become calculated values
      table.integer("start_col");
      table.integer("span");
      table.text("color");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('events');
};
