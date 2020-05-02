const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

describe('jokes-router', () => {
  describe('GET /api/jokes', () => {
    it('should return 401 status', () => {
      return request(server)
        .get('/api/jokes')
        .then((res) => {
          expect(res.status).toBe(401);
        });
    });

    it('should return JSON type', async () => {
      const res = await request(server).get('/api/jokes');
      expect(res.type).toBe('application/json');
    });
  });
});

beforeEach(async () => {
  await db('users').truncate();
});
