var request = require('supertest');
var app = require('../app.js');

describe('GET /login', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/login')
      .expect(200, done);
  });
});

describe('GET /signup', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/signup')
      .expect(200, done);
  });
});

describe('GET /api', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/api')
      .expect(200, done);
  });
});

describe('GET /exam', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/exam')
      .expect(200, done);
  });
});

describe('GET /result/:institute/:exam/:index', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/result/1/1/20')
      .expect(200, done);
  });
});


describe('GET /random-url', function() {
  it('should return 404', function(done) {
    request(app)
      .get('/reset')
      .expect(404, done);
  });
});
