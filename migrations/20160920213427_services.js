exports.up = function(knex, Promise) {
  return knex.schema.createTable('services', function(t) {
    t.increments().primary();
    t.uuid('identifier').unique();
    t.string('name').notNull();
    t.string('description').notNull();
    t.string('url').nullable();
    t.dateTime('created_at').notNull();
    t.dateTime('updated_at').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('services');
};
