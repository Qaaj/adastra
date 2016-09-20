exports.seed = function (knex, Promise) {
  return Promise.all([
    // Inserts seed entries
    knex('cases').insert({
      id: 1,
      name: "Defacement by Anonymous",
      description: 'Main website was defaced by the group Anonymous',
      severity:  4,
      timezone:  12,
      reported_by_user: 1,
      category: 1,
      created_at:  new Date('05/04/2016'),
    }),
    knex('cases').insert({
      id: 2,
      name: "Server #12KAM was DDOSed",
      description: 'DDos against internal server',
      severity:  5,
      timezone:  10,
      reported_by_service: 1,
      category: 3,
      created_at:  new Date('06/04/2016'),
    })
  ]);
};
