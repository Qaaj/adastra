const debug = console.log;
/**
 * General util class to easily fetch env variables from anywhere in the app and enforce defaults and requirements.
 *
 */
let space = (key) => ' '.repeat(Math.max(1, 48 - key.length));

class EnvHelper {
  /**
   * Fetches an environment variable. Returns a default value when not found.
   * @param {String} key
   * @param {String} defaultValue
   */
  static get (key, defaultValue) {
    if (key === undefined) {
      return process.env;
    }

    let value = process.env[key];

    if (value !== undefined) {
      debug(`${key}${space(key)}${value}`);
      return value;
    }

    if (defaultValue === undefined) {
      debug(`${key}${space(key)}(not set)`);
    } else {
      debug(`${key}${space(key)}(default) ${defaultValue}`);
    }

    return defaultValue;
  }
  static force (key, value) {
    debug(`${key}${space(key)}(override) ${value}`);
    return value;
  }
  /**
   * Fetches an environment variable and throws an exception if it does not exist
   * @param {String} key
   */
  static require (key) {
    let value = process.env[key];

    debug(`${key}${space(key)}(required) ${value}`);
    if (value === undefined) {
      throw new Error('environment variable' + key + ' is required');
    }
    return value;
  }
}

exports = module.exports = EnvHelper;
