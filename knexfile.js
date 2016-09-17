// Update with your config settings.


module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'adastra',
      user:     'docker',
      password: 'docker'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      host: process.env.AMAZON_RDS,
      database: 'amboss',
      user:     process.env.PG_USER,
      password: process.env.PG_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  test: {
    client: 'pg',
    connection: {
      host: "localhost",
      port: 5432,
      database: 'test',
      user:     'docker',
      password: 'docker',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
