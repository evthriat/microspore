const knex = require('../db/connection');

const Router = require('koa-router');
const queries = require('../db/queries/users');
//console.log('this query: ', queries.getUsers())
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

router.get(BASE_URL, async (ctx) => {
  try {
    const users = await queries.getAllOptOut(ctx.request.body);
    if(users.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: users
      }
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'There are no users of that have opted out.'
      }
    }
  }catch(err) {
    console.log(err)
  }
})

// router.get(BASE_URL, async (ctx) => {
//   try {
//     const users = await queries.getAllOptOut();
//     if(users.length) {
//       ctx.body = {
//         status: "success",
//         data: users
//       }
//     } else {
//       status = 404;
//       ctx.body = {
//         status: 'error',
//         message: 'No one has opted out'
//       }
//     }
//     } catch (error) {
//         console.log(error);
//   }
// })

router.put(`${BASE_URL}/:userID`, async (ctx) => {
  try {
    const user = await queries.optOut(ctx.params.userID, ctx.request.body);
    if(user.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: user
      }
    } else {
    ctx.status = 404;
    ctx.body = {
      status: 'error',
      message: 'that user does not exist'
    }
  }
  } catch (err) {
    ctx.status = 400
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry! an error occured.'
    };
  }
})

router.post(BASE_URL, async (ctx) => {
  try {
    const user = await queries.addUser(ctx.request.body)
    if(user.length) {
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        data: user
      }
    } else {
      ctx.status = 400;
      ctx.body = {
        status: "error",
        message: 'ohhhh noooo!'
      }
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: "error",
      message: err.message || "noooo ohhhhh!"
    }
  }
})

module.exports = router;

