/**
 * Created by Jaaq on 9/21/2016.
 */

const Models = {
  init (bookshelf) {
    this.User = require('./user')(bookshelf);
  }
};

module.exports = Models;