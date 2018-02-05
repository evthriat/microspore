const knex = require('../connection');


// client.query('SELECT * FROM ', ['Hello world!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message); // Hello World!
//   client.end();
// });

var getUsers = function(userID) {
  return knex('primeusers')
    .select('*')
    .where( { userID: parseInt(userID) } );
};
module.exports = {
  getUsers
};