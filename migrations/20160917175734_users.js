exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t) {
    t.increments().primary();
    t.string('email').notNull().unique();
    t.string('password').notNull();
    t.string('gender').nullable();
    t.string('first_name').nullable();
    t.string('last_name').nullable();
    t.integer('age').nullable();
    t.dateTime('created_at').notNull();
    t.dateTime('updated_at').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
