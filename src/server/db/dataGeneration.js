const fs = require('fs');
//const file = fs.createWriteStream('./big.file');
const { Writable } = require('stream');
//const server = require('http').createServer();

// server.on('request', (req, res) => {
//   fs.readFile('./big.file', (err, data) => {
//     if (err) throw err;
  
//     res.end(data);
//   });
// });

//server.listen(8000);

// const outStream = new Writable({
//   write(chunk, encoding, callback) {
//     console.log(chunk.toString());
//     callback();
//   }
// });

//var randomizedDate;

var generatePrimeUsers = function(amount) {
  for (var i = 1; i <= amount; i++) {
    var now = Date.now();
    var date = new Date(now).toLocaleDateString();
    var memberStart = new Date(now + 2592000000).toLocaleDateString();
    fs.appendFileSync('testDataSmall.text', `${i},${amount - i},${date},${memberStart},${false}\n`);
  }

};
//console.log()
//generatePrimeUsers(10000000);

// var optOutgeneration = function(amount) {
//   var result = [];
//   for (var i = 1; i <= amount; i = i + 3) {
//     result.push({
//       userID: i,
//       optOut: false
//     });
//   }
//   return result;
// }
//console.log(optOutgeneration(100))

//copy users from '/Users/acme/Documents/microspore/src/server/db/testDataSmall.text' delimiter ',';
