const knex = require('../db/connection');

const Router = require('koa-router');
const queries = require('../db/queries/users');
console.log('this query: ', queries.getUsers())
const router = new Router();
const BASE_URL = `/api/v1/primeusers`;

router.get(`${BASE_URL}/:userID`, async (ctx) => {
  try {
    const user = await queries.getUsers(ctx.params.userID);
    if(user.length) {
      ctx.body = {
        status: 'success',
        data: user 
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That user does not exist.'
      };
    }
    }catch (err) {
      console.log(err)
    }
})


module.exports = router;