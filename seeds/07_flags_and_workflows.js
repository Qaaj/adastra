exports.seed = function (knex, Promise) {
  return Promise.all([
    // Case related workflows and flags
    knex('case_workflows').insert({
      workflow: 1,
      case: 1,
      created_at:  new Date('06/04/2016'),
    }),
    knex('case_workflows').insert({
      workflow: 3,
      case: 2,
      created_at:  new Date('06/04/2016'),
    }),
    knex('case_flags').insert({
      flag: 2,
      case: 1,
      created_at:  new Date('06/04/2016'),
    }),
  ]);
};
