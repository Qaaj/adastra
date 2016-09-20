exports.seed = function (knex, Promise) {
  return Promise.all([
    // Inserts seed entries
    knex('workflows').insert({
      id: 1,
      name: "Rollback Website",
      description: 'Rollback URL to previous version',
      created_at:  new Date('05/04/2016')
    }),
    knex('workflows').insert({
      id: 2,
      name: "Takedown URL",
      description: 'Issue takedown for certain website',
      created_at:  new Date('05/04/2016')
    }),
    knex('workflows').insert({
      id: 3,
      name: "Reboot Server",
      description: 'Restart server after DDOS Attack',
      created_at:  new Date('05/04/2016')
    })
  ]);
};
