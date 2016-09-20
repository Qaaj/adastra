exports.seed = function (knex, Promise) {
  return Promise.all([
    // Inserts seed entries
    knex('users').insert({
      id: 1,
      first_name: "John",
      last_name: 'Doe',
      email: 'john.doe@adast.ra',
      created_at:  new Date('05/04/2016')
    }),
    knex('users').insert({
      id: 2,
      first_name: "Jane",
      last_name: 'Doe',
      email: 'jane.doe@adast.ra',
      created_at:  new Date('05/05/2016')
    })
  ]);
};
