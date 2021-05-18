import { beforeAll, describe, it } from '@jest/globals';
import loadBooksToCache from '../server/data';

const supertest = require('supertest');
const app = require('../server/app');
const request = supertest.agent(app);

beforeAll(async () => await loadBooksToCache());

describe('Ping ', () => {
  it('should get a pong', async () => {
    const response = await request.get('/api/ping');
    expect(response.status).toBe(200);
    expect(response.text).toBe('pong');
  });
});

describe('Books', () => {
  it('should get books', async () => {
    const response = await request.get('/api/books');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(211);
  });

  it('should get book by id', async () => {
    const response = await request.get('/api/books/1');
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(1);
  });

  it('should get 404 if book id does not exist', async () => {
    const response = await request.get('/api/books/9999');
    expect(response.status).toBe(404);
  });
});
