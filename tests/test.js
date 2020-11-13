const conn = require('../connection.js');
const request = require('supertest')(`${conn.url}`);

describe('/api/getRelatedPurchases1 end point:', () => {
  it('Should fetch related data when given an ID', (done) => {
    request.get('/api/getRelatedPurchases?id=1').expect(200).expect((res) => {
      expect(res.text).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('Should fail when not given an ID', (done) => {
    request.get('/api/getRelatedPurchases').expect(401).expect((res) => {
      expect(res.status).toEqual(401);
    }).end(done);
  });
});

describe('/api/addrelatedpurchase end point:', () => {
  it('Should post data when given a pid and iid:', (done) => {
    request.post('/api/addrelatedpurchase?pid=1&iid=1').expect(200).expect((res) => {
      expect(res.text).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('Should fail when not given enough information:', (done) => {
    request.post('/api/addrelatedpurchase').expect(401).expect((res) => {
      expect(res.status).toEqual(401);
    }).end(done);
  });
});