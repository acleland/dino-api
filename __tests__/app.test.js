const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/dinos should return list of dinosaurs', async () => {
    const expected = [{ id: '1', name: 'Iguanodon' }];
    const res = await request(app).get('/dinos');
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
