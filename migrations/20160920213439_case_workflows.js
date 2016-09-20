exports.up = function(knex, Promise) {
  return knex.schema.createTable('case_workflows', function(t) {
    t.increments().primary();
    t.uuid('identifier').unique();
    t.integer('workflow').references('workflows.id').notNull();
    t.integer('case').references('cases.id').notNull();
    t.dateTime('created_at').notNull();
    t.dateTime('updated_at').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('case_workflows');
};
