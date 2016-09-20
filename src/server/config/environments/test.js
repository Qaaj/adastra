import env from '../EnvHelper';

exports = module.exports = {
  database: {
    connection: {
      database: env.force('PG_DB', 'test')
    }
  },
  redis: {
    url: env.force('REDIS_URL', 'redis://localhost:6379') + '?no_ready_check=true'
  },

  TOKEN_PK: env.force('TOKEN_PK', require('node-uuid').v4())
};
