import request from 'supertest';
import app from '../src/app';
import '../src/database';
interface ProfessionalTypeProp {
  descricao?: string;
  situacao?: boolean;
  id?: string;
}

describe('Professional Type', function () {
  const ProfessionalType: ProfessionalTypeProp = {
    descricao: 'Testing Description',
    situacao: true,
  };

  it.only('should create new Professional Type', async function (done) {
    const response = await request(app)
      .post('/professionalType')
      .send(ProfessionalType);
    console.log('PROFESSIONAL TYPE', response.body);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    ProfessionalType.id = response.body.id;
    done();
  });

  it('should list Professional Type', async function (done) {
    const response = await request(app).get('/profesionalType');
    expect(response.status).toBe(200);
    done();
  });

  it('should request Professional Type', async function (done) {
    const response = await request(app).get(
      `/profesionalType/${ProfessionalType.id}`,
    );
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    done();
  });

  it('should update Professional Type', async function (done) {
    const response = await request(app)
      .put(`/profesionalType/${ProfessionalType.id}`)
      .send({
        descricao: 'NEW DESCRIPTION TEST',
      });

    expect(response.status).toBe(201);
    done();
  });

  it('should delete Professional Type', async function (done) {
    const response = await request(app).delete(
      `/profesionalType/${ProfessionalType.id}`,
    );
    expect(response.status).toBe(201);
    done();
  });
});
