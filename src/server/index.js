var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var express = require('express');
var graphqlHTTP = require('express-graphql');

import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql';

import Config from './config';
import Models from './models';

const config = Config.get();

// TODO: Use https://github.com/brysgo/graphql-bookshelf

var userType = new GraphQLObjectType({
  name: "User",
  description: "Users of the application",
  fields: {
    first_name: {
      type: GraphQLString,
      description: "First Name of the user",
    },
    last_name: {
      type: GraphQLString,
      description: "Actor playing the character",
    },
    email: {
      type: GraphQLString,
      description: "Family role"
    },
    id: {
      type: GraphQLInt,
      description: "ID of this User"
    },
    identifier: {
      type: GraphQLString,
      description: "UUID of this User"
    }
  }
});

var queryType = new GraphQLObjectType({
  name: "query",
  description: "User query",
  fields: {
    user: {
      type: userType,
      args: {
        id: {
          type: GraphQLInt
        },
        identifier: {
          type: GraphQLString
        }
      },
      resolve: function (_, args) {
        return getUser(args.id)
      }
    }
  }
});

function getUser(id) {
  return Models.User.where({id}).fetch().then(function (user) {
    if (user) {
      return user.serialize();
    }
    return "Not found";
  }).catch(function (err) {
    return "Error " + err
  });
}

var schema = new GraphQLSchema({
  query: queryType
});

var graphQLServer = express();
graphQLServer.use('/', graphqlHTTP({schema: schema, graphiql: true}));
graphQLServer.listen(8080);
debug("The GraphQL Server is running.")

var compiler = webpack({
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/static/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
});

var app = new WebpackDevServer(compiler, {
  contentBase: "/public/",
  proxy: {"/graphql": `http://localhost:${8080}`},
  publicPath: "/static/",
  stats: {colors: true, chunks: false}
});
app.use("/", express.static("static"));
app.listen(3000);
debug("The App Server is running.");

debug('Connecting to Knex..');

var knex = require('knex')(config.database);
var bookshelf = require('bookshelf')(knex);

Models.init(bookshelf);

debug("Knex up and running.")