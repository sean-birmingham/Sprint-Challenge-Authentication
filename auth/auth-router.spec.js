const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

describe('auth', () => {
  describe('POST /api/auth/register', () => {
    it('should register user with 201 status', () => {
      return request(server)
        .post('/api/auth/register')
        .send({ username: 'test', password: 'password' })
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });
    it('should return a 500 status', () => {
      return request(server)
        .post('/api/auth/register')
        .send({ username: 'username', password: null })
        .then((res) => {
          expect(res.status).toBe(500);
        });
    });
  });

  describe('POST /api/auth/login', () => {
    it('should return 401 status', () => {
      return request(server)
        .post('/api/auth/login')
        .send({ username: '', password: '' })
        .then((res) => {
          expect(res.status).toBe(401);
        });
    });
  });
});

beforeEach(async () => {
  await db('users').truncate();
});
