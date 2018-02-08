const knex = require('../connection');

var getUsers = function(userID) {
  return knex('primeusers')
    .select('*')
    .where( { userID: parseInt(userID) } );
};

var addUser = function(user) {
  return knex('primeusers')
    .insert(user)
    .returning('*');
};

var getAllOptOut = function() {
  return knex('primeusers')
    .select('*')
    .where({/* userID: 2, */optOut: true })
    .returning('*');
};
//need to fix so optOut is set to true 
var optOut = function(userID, user) {
  //console.log('userID ', userID, ' user ', user)
  return knex('primeusers')
    .update(user)
    .where({ userID: parseInt(userID) })
    .returning('*');
};

var deleteUser = function(userID) {
  return knex('primeusers')
    .del()
    .where({ userID: parseInt(userID) })
    .returning('*');
};

//doptOut(1, {optOut: true});
module.exports = {
  addUser,
  deleteUser,
  optOut,
  getAllOptOut,
  getUsers
};

