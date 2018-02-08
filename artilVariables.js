'user strict';
//const Faker = require('faker');

var randomUsers = function(userContext, events, done) {
  const id = Math.floor(Math.random() * 10000000).toString();
  userContext.vars.randomID = id;
  return done();
};

module.exports = {
  randomUsers
};