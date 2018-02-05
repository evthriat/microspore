var fs = require("fs");
var es = require('event-stream');
//----will read small files
var content = fs.readFileSync("./testDataSmall.file");
//console.log("Output Content : \n"+ content);
//console.log("\n *EXIT* \n");
module.exports = content;