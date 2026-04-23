const request = require('supertest');
const app = require('../src/app');
const db = require('../src/db');

describe('Authors API', () => {
  test('GET /authors', async () => {
    const res = await request(app).get('/authors');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /authors', async () => {
    const res = await request(app)
      .post('/authors')
      .send({
        name: 'Test',
        email: `test${Date.now()}@mail.com`,
        bio: 'bio'
      });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Test');
  });

  test('DELETE author inexistente', async () => {
    const res = await request(app).delete('/authors/9999');

    expect([404, 204]).toContain(res.status);
  });
});

// cerrar conexión a la base de datos después de todas las pruebas
afterAll(async () => {
  await db.end();
});