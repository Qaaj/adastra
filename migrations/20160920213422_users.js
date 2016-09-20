exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t) {
    t.increments().primary();
    t.uuid('identifier').unique();
    t.string('first_name').notNull();
    t.string('last_name').notNull();
    t.string('email').notNull();
    t.dateTime('created_at').notNull();
    t.dateTime('updated_at').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
