import request from 'supertest';
import app from '../src/app';

describe('App module', () => {
  it('should run server and return test message', async function (done) {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    done();
  });
});
