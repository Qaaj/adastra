import env from './EnvHelper';

exports = module.exports = {
  default_language: 'en',
  port: env.get('PORT', 3000),
  database: {
    client: 'pg',
    connection: {
      host: env.get('PG_HOST', 'localhost'),
      database: env.get('PG_DB', 'adastra'),
      user: env.get('PG_USER', 'docker'),
      password: env.get('DB_PW', 'docker'),
      port: env.get('PG_PORT', 5432)
    }
  },

  redis: {
    url: env.get('REDIS_URL', 'redis://localhost:6379') + '?no_ready_check=true'
  },

};
