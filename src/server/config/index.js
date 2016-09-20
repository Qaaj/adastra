'use strict';
const debug = console.log;

import nconf from 'nconf';

const ENV = process.env.NODE_ENV || 'local';
debug(`App is running in ${ENV} mode`);
debug('Loading default configs');
let defaultConfig = require('./defaults');
debug('Done loading default configs');

debug(`Loading configs  for ENV = ${ENV}`);
let envConfig = require(`./environments/${ENV}`);
debug('Done loading env specific configs');

// Explicitely use environment specific configs
nconf.overrides(envConfig);

// process.env, process.argv
nconf.env().argv();

// If nothing else, use this value
nconf.defaults(defaultConfig);

const CONFIG = nconf.get();
/**
 * General util class to easily fetch env variables from anywhere in the app and enforce defaults and requirements.
 *
 */
class Config {
  /**
   * Fetches an environment variable. Returns a default value when not found.
   * @param {String} key
   * @param {String} defaultValue
   */
  static get (key, defaultValue) {
    if (key === undefined) {
      return CONFIG;
    }

    let value = nconf.get(key);

    if (value !== undefined) {
      return value;
    }

    if (defaultValue === undefined) {
      debug('environment variable %s was not set.', key);
    } else {
      debug('environment variable %s was not set. Using %s instead', key, defaultValue);
    }

    return defaultValue;
  }

  /**
   * Fetches an environment variable and throws an exception if it does not exist
   * @param {String} key
   */
  static require (key) {
    let value = nconf.get(key);

    if (value === undefined) {
      throw new Error('environment variable' + key + ' is required');
    }
    return value;
  }
}

exports = module.exports = Config;
