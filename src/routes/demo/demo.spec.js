import supertest from 'supertest-as-promised';
import chai from 'chai';
import { app } from '../../app';
import Demo from './demo.model';

const request = supertest.agent(app.listen());
const expect = chai.expect;

describe('Demo', () => {
  beforeEach(() => {
    return Demo.destroy({ truncate: true });
  });

  describe('GET /demo', () => {
    it('should return a list of items', () => {
      return request.get('/demo')
        .expect(200, []);
    });
  });

  describe('GET /demo/{id}', () => {
    it('should return a 404 if object not found', () => {
      return request.get('/demo/12')
        .expect(404, 'Not Found');
    });

    it('should return a demo object', (done) => {
      Demo.create({ id: 1, name: 'Hello' }).then(() => {
        request.get('/demo/1')
        .then((res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('name');
          expect(res.body.name).to.equal('Hello');
          done();
        });
      });
    });
  });

  describe('PUT /demo/{id}', (done) => {
    Demo.create({ id: 1, name: 'Hello' }).then(() => {
      request.put('/demo/1')
      .send({ name: 'HelloWorld' })
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.equal('OK');
        Demo.find({ id: 1 }).then((demo) => {
          expect(demo.name).to.equal('HelloWorld');
          done();
        });
      });
    });
  });

  describe('DELETE /demo/{id}', (done) => {
    Demo.create({ id: 1, name: 'Hello' }).then(() => {
      request.delete('/demo/1')
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.equal('OK');
        Demo.findAll({}).then((demos) => {
          expect(demos).to.equal([]);
          done();
        });
      });
    });
  });
});
