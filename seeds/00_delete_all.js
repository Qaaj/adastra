exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('cases').del(),
    knex('case_flags').del(),
    knex('flags').del(),
    knex('case_workflows').del(),
    knex('cases').del(),
    knex('workflows').del(),
    knex('categories').del(),
    knex('services').del(),
    knex('users').del()
  );
};
