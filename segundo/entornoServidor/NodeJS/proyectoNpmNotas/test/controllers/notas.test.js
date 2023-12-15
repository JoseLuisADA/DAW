import supertest from 'supertest';
import app from '../../src/app.js'; // Asegúrate de exportar tu aplicación Express

let token;

beforeAll(async () => {
  const response = await supertest(app)
    .post('/login')
    .send({
      username: 'admin',
      password: 'admin123'
    });
  token = response.body.token;
});

test('Listar notas', async () => {
    const response = await supertest(app)
      .get('/notas')
      .set('authorization', token);
    expect(response.statusCode).toBe(200);
    // Otras aserciones...
  });

  test('Leer nota', async () => {
    const nombreNota = 'NombreNotaAqui';
    const response = await supertest(app)
      .get(`/notas/${nombreNota}`)
      .set('authorization', token);
    expect(response.statusCode).toBe(200);
    // Otras aserciones...
  });

  test('Crear nota', async () => {
    const nuevaNota = {
      nombreArchivo: 'Nombre de la nota',
      contenido: 'Contenido de la nota'
    };
    const response = await supertest(app)
      .post('/notas')
      .set('authorization', token)
      .send(nuevaNota);
    expect(response.statusCode).toBe(200);
    // Otras aserciones...
  });

  
  test('Borrar nota', async () => {
    const nombreNota = 'NombreNotaAqui';
    const response = await supertest(app)
      .delete(`/notas/${nombreNota}`)
      .set('authorization', token);
    expect(response.statusCode).toBe(200);
    // Otras aserciones...
  });

  test('Editar nota', async () => {
    const nombreNota = 'NombreNotaAqui';
    const datosNota = {
      contenido: 'Nuevo contenido de la nota'
    };
    const response = await supertest(app)
      .put(`/notas/${nombreNota}`)
      .set('authorization', token)
      .send(datosNota);
    expect(response.statusCode).toBe(200);
    // Otras aserciones...
  });
  