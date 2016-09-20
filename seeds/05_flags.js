exports.seed = function (knex, Promise) {
  return Promise.all([
    // Inserts seed entries
    knex('flags').insert({
      id: 1,
      name: "Critical",
      description: 'Senior MGMT Attention',
      created_at:  new Date('05/04/2016')
    }),
    knex('flags').insert({
      id: 2,
      name: "Hot",
      description: 'Trending',
      created_at:  new Date('05/04/2016')
    })
  ]);
};
