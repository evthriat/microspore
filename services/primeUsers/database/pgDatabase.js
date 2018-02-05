const { Pool, Client } = require('pg');


const pool = new Pool({
  user: 'acme',
  host: 'localhost',
  database: 'primeusers',
  password: ''
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});

const client = new Client({
  user: 'acme',
  host: 'localhost',
  database: 'primeusers',
  password: ''
});

client.connect();

client.query('SELECT * FROM ', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message); // Hello World!
  client.end();
});






// CREATE TABLE IF NOT EXISTS users (
//   id SERIAL,
//   userID SERIAL,
//   cartID SERIAL,
//   trialStartDate TIMESTAMP,
//   membershipStartDate TIMESTAMP,
//   optOut BOOLEAN,
//   PRIMARY KEY (id)  
// )
