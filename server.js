require('babel-core/register');

global.debug = require('debug')('adastra')

// Start in windows with "./start.cmd"
// Start on mac with "npm start"

// We want to be able to use ES6/ES2015 so use babel-core to enable these features
var app = require('./start.js');