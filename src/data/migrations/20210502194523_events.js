
exports.up = async function(knex) {
     await knex.schema.createTable('events', function(table) {
      table.increments("id");
      table.string('event_name').notNull();
      table.text("speaker");
      table.text("summary");
      table.text("location");
      table.integer("start_time").notNull();
      table.integer("end_time").notNull();
      table.integer("start_col");
      table.integer("span");
      table.text("color");
  })

  await knex.schema.createTable('settings', function(table) {
    //Perhaps could limit to one row with id
    table.increments("id");
    table.integer("day_number");
    table.integer("hour_number");
    table.integer("start_hour");
    table.integer("start_date");
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('events');
  await knex.schema.dropTableIfExists('settings');
};

