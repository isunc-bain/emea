import { describe, it } from '@jest/globals';

const supertest = require('supertest');
const app = require('../server/app');
const request = supertest(app);

describe('Get pong', () => {
  it('should get a pong', async () => {
    const response = await request.get('/api/ping');
    expect(response.status).toBe(200);
    expect(response.text).toBe('pong');
  });
});
