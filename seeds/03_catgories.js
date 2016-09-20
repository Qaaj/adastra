exports.seed = function (knex, Promise) {
  return Promise.all([
    // Inserts seed entries
    knex('categories').insert({
      id: 1,
      name: "Defacement",
      description: 'Defacing of website',
      created_at:  new Date('05/04/2016')
    }),
    knex('categories').insert({
      id: 2,
      name: "Hacked Server",
      description: 'Server has been hacked',
      created_at:  new Date('05/04/2016')
    }),
    knex('categories').insert({
      id: 3,
      name: "DDOS",
      description: 'Denial Of Service Attack',
      created_at:  new Date('05/04/2016')
    })
  ]);
};
