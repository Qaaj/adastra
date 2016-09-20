import env from '../EnvHelper';

exports = module.exports = {
  
  database: {
    client: 'pg',
    connection: {
      database: 'adastra',
      host: env.get('AMAZON_RDS'),
      user: env.get('PG_USER'),
      password: env.get('PG_PASSWORD')
    }
  },

  redis: {
    url: env.require('REDIS_URL') + '?no_ready_check=true'
  },
  
};
