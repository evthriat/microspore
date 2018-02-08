require('newrelic');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

//const pg = require('pg');

const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/primeusers');


const app = new Koa();
const PORT = process.env.PORT || 1337;

app.use(bodyParser());
app.use(indexRoutes.routes());
app.use(userRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server; 