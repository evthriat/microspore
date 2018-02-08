process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const knex = require('../src/server/db/connection');
const server = require('../src/server/index');

describe('routes : users', () => {

  describe('GET /api/v1/primeusers/:id', () => {
    it('should a single user', (done) => {
      chai.request(server)
        .get('/api/v1/primeusers/1')
        .end((err, res) => {
          // there should be no errors
          should.not.exist(err);
          // there should be a 200 status code
          res.status.should.equal(200);
          // the response should be JSON
          res.type.should.equal('application/json');
          // the JSON response body should have a
          // key-value pair of {"status": "success"}
          res.body.status.should.eql('success');
          // the JSON response body should have a
          // have the right keys
          res.body.data[0].should.include.keys(
            'userID', 'cartID', 'trialStartDate', 'membershipStartDate', 'optOut'
          );
          done();
        });
    });

    it('should throw an error if the movie does not exist', (done) => {
      chai.request(server)
        .get('/api/v1/primeusers/111111111')
        .end((err, res) => {
          // there should an error
          should.exist(err);
          // there should be a 404 status code
          res.status.should.equal(404);
          // the response should be JSON
          res.type.should.equal('application/json');
          // the JSON response body should have a
          // key-value pair of {"status": "error"}
          res.body.status.should.eql('error');
          // the JSON response body should have a
          // key-value pair of {"message": "That movie does not exist."}
          res.body.message.should.eql('That user does not exist.');
          done();
        });
    });
  });

  describe('GET /api/v1/primeusers/', () => {
    it('should a all users who have opted out', (done) => {
      chai.request(server)
        .get('/api/v1/primeusers/')
        .end((err, res) => {
          // there should be no errors
          should.not.exist(err);
          // there should be a 200 status code
          res.status.should.equal(200);
          // the response should be JSON
          res.type.should.equal('application/json');
          // the JSON response body should have a
          // key-value pair of {"status": "success"}
          res.body.status.should.eql('success');
          // the JSON response body should have a
          // have the right keys
          res.body.data[0].optOut.should.eql(true);

          res.body.data[0].should.include.keys(
            'userID', 'cartID', 'trialStartDate', 'membershipStartDate', 'optOut'
          );
          done();
        });
    });

  });

  describe('POST /api/v1/primeusers', () => {
    it('should return the user that was added', (done) => {
      chai.request(server)
        .post('/api/v1/primeusers')
        .send({
          userID: 10000001,
          cartID: 666,
          trialStartDate: '2018-03-03',
          membershipStartDate: '2018-04-03',
          optOut: false
        })
        .end((err, res) => {
          // there should be no errors
          should.not.exist(err);
          // there should be a 201 status code
          // (indicating that something was "created")
          res.status.should.equal(201);
          // the response should be JSON
          res.type.should.equal('application/json');
          // the JSON response body should have a
          // key-value pair of {"status": "success"}
          res.body.status.should.eql('success');
          // the JSON response body should have a
          // key-value pair of {"data": 1 movie object}
          res.body.data[0].should.include.keys(
            'userID', 'cartID', 'trialStartDate', 'membershipStartDate', 'optOut'
          );
          done();
        });
    });

    it('should throw an error if the payload is malformed', (done) => {
      chai.request(server)
        .post('/api/v1/primeusers')
        .send({
          name: 'Titanic'
        })
        .end((err, res) => {
          // there should an error
          should.exist(err);
          // there should be a 400 status code
          res.status.should.equal(400);
          // the response should be JSON
          res.type.should.equal('application/json');
          // the JSON response body should have a
          // key-value pair of {"status": "error"}
          res.body.status.should.eql('error');
          // the JSON response body should have a message key
          should.exist(res.body.message);
          done();
        });
    });
  });

  describe('PUT /api/v1/primeusers/:id', () => {
    it('should return the user that was updated', (done) => {
      knex('primeusers')
        .select('*')
        .where({userID: 101})
        .then((user) => {
          //const primeuser = user;
          const userObject = user[0];
          const truthy = userObject.optOut
          chai.request(server)
            .put(`/api/v1/primeusers/101`)
            .send({
              optOut: true
            })
            .end((err, res) => {
              // there should be no errors
              should.not.exist(err);
              // there should be a 200 status code
              res.status.should.equal(200);
              // the response should be JSON
              res.type.should.equal('application/json');
              // the JSON response body should have a
              // key-value pair of {"status": "success"}
              res.body.status.should.eql('success');
              // the JSON response body should have a
              // key-value pair of {"data": 1 user object}
              res.body.data[0].should.include.keys(
                'userID', 'cartID', 'trialStartDate', 'membershipStartDate', 'optOut'
              );
              // ensure the user was in fact updated
              const newUserObject = res.body.data[0];
              newUserObject.optOut.should.not.eql(userObject.optOut);
              done();
            });
        });
    });

    it('should throw an error if the user does not exist', (done) => {
      chai.request(server)
        .put('/api/v1/primeusers/99999999')
        .send({
          optOut: true
        })
        .end((err, res) => {
          // there should an error
          should.exist(err);
          // there should be a 404 status code
          res.status.should.equal(404);
          // the response should be JSON
          res.type.should.equal('application/json');
          // the JSON response body should have a
          // key-value pair of {"status": "error"}
          res.body.status.should.eql('error');
          // the JSON response body should have a
          // key-value pair of {"message": "That user does not exist."}
          res.body.message.should.eql('that user does not exist');
          done();
        });
    });
  });


});