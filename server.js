require('babel-core/register');

// We can use debug for now and re-use it later with a package of our own.
global.debug = require('debug')('adastra')

// Start in windows with "./start.cmd"
// Start on mac with "npm start"

// We want to be able to use ES6/ES2015 so use babel-core to enable these features
var app = require('./src/server/index.js');