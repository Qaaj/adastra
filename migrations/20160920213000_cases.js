exports.up = function(knex, Promise) {
  return knex.schema.createTable('cases', function(t) {
    t.increments().primary();
    t.uuid('identifier').unique();
    t.string('name').notNull();
    t.string('description').notNull();
    t.integer('severity').nullable();
    t.integer('timezone').nullable();
    t.dateTime('created_at').notNull();
    t.dateTime('updated_at').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cases');
};
