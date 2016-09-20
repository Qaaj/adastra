exports.seed = function (knex, Promise) {
  return Promise.all([
    // Inserts seed entries
    knex('services').insert({
      id: 1,
      name: "Analog Shade",
      description: 'Look for hidden stuff on the internet',
      url: 'http://www.analogsha.de',
      created_at:  new Date('05/04/2016')
    }),
    knex('services').insert({
      id: 2,
      name: "Erased Past",
      description: 'What happened ages ago on the internet',
      url: 'http://www.ep.com',
      created_at:  new Date('05/04/2016')
    })
  ]);
};
