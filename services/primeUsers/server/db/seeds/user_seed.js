//const newUsergenerator = require('./dataGenerator.js').generatePrimeUsers;
//const optOutGenerator = require('./dataGenerator.js').optOutgeneration;
//const testData = require('../testDataSmall.js');
//const Promise = require('bluebird');
//const content = require('../data.js').content;
//console.log('content: ',content)
var fs = require("fs");
var es = require('event-stream');
//----will read small files
// var content = fs.readFileSync("./testDataSmall.file");
// console.log("Output Content : \n"+ content);
// console.log("\n *EXIT* \n");
//---------------------------




// exports.seed = function(knex, Promise) {
//   return knex('users').del()
//   .then(() => {
//     return knex('users').insert(content);
//   })
//};
//   .then(() => {
//     let testPromises = [];
//     productsData.forEach((product) => {
//       let merchant = product.merchant;
//       testPromises.push(createProduct(knex, product, merchant));
//     });
//     return Promise.all(testPromises);
//   });
// };
// const createProduct = (knex, product, merchant) => {
//   //console.log('hello!')
//   return knex('users').where('name', merchant).first()
//   .then((merchantRecord) => {
//     //console.log('records: ', merchantRecord)
//     return knex('primeuser_test').insert({
//       userID: product.name,
//       price: product.price,
//       merchant_id: merchantRecord.id
//     });
//   });

// exports.seed = (knex, Promise) => {
//   return knex('users').del()
//     .then(() => {
//       return knex('users').insert({
//         userID: 1032,
//         cartID: 231,
//         trialStartDate: '2016-03-08',
//         membershipStartDate: '2016-04-08',
//         optOut: false
//       });
//     })
//     .then(() => {
//       return knex('users').insert({
//         userID: 10321,
//         cartID: 232,
//         trialStartDate: '2016-03-08',
//         membershipStartDate: '2016-04-08',
//         optOut: false
//       });
//     })
//     .then(() => {
//       return knex('users').insert({
//         userID: 1023,
//         cartID: 2312,
//         trialStartDate: '2016-03-08',
//         membershipStartDate: '2016-04-08',
//         optOut: false
//       });
//     });
// };