/**
 * Created by Jaaq on 9/21/2016.
 */

import Models from './index.js';
var uuid = require('node-uuid');
var Checkit = require('checkit');

var validationRules = new Checkit({
  email: ['required', 'email'],
  identifier: ['required', 'uuid'],
});

function User(bookshelf){

  return bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,

    constructor: function() {
      bookshelf.Model.apply(this, arguments);
      this.on('creating', function(model, attrs, options) {
        model.set("identifier", uuid.v4());
      });
    },
    serialize: function(request) {
      return {
        id: this.get('id'),
        uuid: this.get('identifier'),
        email: this.get('email'),
        first_name: this.get('first_name'),
        last_name: this.get('last_name'),
        created_at: this.get('created_at'),
      };
    },
    initialize: function() {
      this.on('saving', this.validateSave);
      // this.on('created', doSomething);
    },
    validateSave: function() {
      if(this.attributes.email) this.attributes.email = this.attributes.email.trim();
      return validationRules.run(this.attributes);
    },
  });
}

module.exports = User;

// Docs

/**
 * Returns a user object from the database
 *
 * @return {User}
 *         The User model.
 */

/**
 *
 * You can retrieve the properties below by calling message.get( prop ).
 S
 * @typedef Models.User
 * @type Object
 * @property {Number} id The internal primary key for this message.
 * @property {String} identifier The public UUID of this message.
 * @property {Date} created_at The date when this user was created.
 * @property {Date} updated_at The date when this user was last updated.
 * @property {String} email The user's email address. When a user has not completed his/her registration this will be a random value. eg: 1593759@tessa.nl
 * @property {String} Gender The gender of our user (male, female, m, f, ..)
 * @property {String} first_name The user's first name
 * @property {String} last_name The user's last name
 */
