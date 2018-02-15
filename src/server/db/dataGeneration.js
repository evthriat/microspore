const fs = require('fs');
const faker = require('faker');
//const file = fs.createWriteStream('./big.file');
const { Writable } = require('stream');


var randomDate = faker.date.between('1/1/2016','1/1/2017');
console.log(Date.parse(randomDate));
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

var random = function(arr) {
  return arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
};
// var test = function() {
//   var arr = [];
//   for (var i = 0;  i < 25; i++) {
//     arr.push(i)
//   }
//   for(var i =0; i < 25; i++) {
//     console.log(random(arr))
//   }
// };
// test();
var generatePrimeUsers = function(amount) {
  var userID = [];
  var cartID = [];
  for (var k = 0; k < amount; k++) {
    userID.push(k);
    cartID.push(k);
  }
  for (var i = 1; i <= amount; i++) {
    var randomUser = random(userID);
    var randomCart = random(cartID);
    var randomDate = faker.date.between('1/1/2016', '1/1/2017');
    //var date = new Date(now).toLocaleDateString();
    var memberStart = new Date(Date.parse(randomDate) + 2592000000).toLocaleDateString();

    fs.appendFileSync('smalltest.text', `${randomUser},${randomCart},${randomDate.toLocaleDateString()},${memberStart},${false}\n`);
  }

};
generatePrimeUsers(100);

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
