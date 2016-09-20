exports.up = function(knex, Promise) {
  return knex.schema.table('cases', function (t) {
    t.integer('reported_by_user').references('users.id').nullable();
    t.integer('reported_by_service').references('services.id').nullable();
    t.integer('category').references('categories.id').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('cases', function (t) {
    t.dropColumn('reported_by_user');
    t.dropColumn('reported_by_service');
    t.dropColumn('category');
  });
};
