const conn = require('../connection.js');
const request = require('supertest')(`${conn.url}`);

describe('/api/getRelatedPurchases end point:', () => {
  it('Should fetch related data when given an ID', (done) => {
    request.get('/api/getRelatedPurchases?id=1').expect(200).expect((res) => {
      expect(res.text).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('Should fail when not given an ID, and retrurn a 401.', (done) => {
    request.get('/api/getRelatedPurchases').expect(401).expect((res) => {
      expect(res.status).toEqual(401);
    }).end(done);
  });
});

describe('/api/getratingavg end point:', () => {
  it('Should fetch an average for a given item ID', (done) => {
    request.get('/api/getratingavg?id=1').expect(200).expect((res) => {
      expect(JSON.parse(res.text)[0].score).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('Should fail when not given an ID, and retrurn a 401.', (done) => {
    request.get('/api/getratingavg').expect(401).expect((res) => {
      expect(res.status).toEqual(401);
    }).end(done);
  });
});

describe('/api/getratingcount end point:', () => {
  it('Should fetch a count of all ratings for a given item ID', (done) => {
    request.get('/api/getratingcount?id=1').expect(200).expect((res) => {
      expect(JSON.parse(res.text)[0].score).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('Should fail when not given an ID, and retrurn a 401.', (done) => {
    request.get('/api/getratingcount').expect(401).expect((res) => {
      expect(res.status).toEqual(401);
    }).end(done);
  });
});

describe('/api/getitem end point:', () => {
  it('Should fetch an id, title, description, cost, image_url, overview, specifications, and coverage for a given item ID', (done) => {
    request.get('/api/getitem?id=1').expect(200).expect((res) => {
      expect(JSON.parse(res.text)[0].id).toBeDefined();
      expect(JSON.parse(res.text)[0].title).toBeDefined();
      expect(JSON.parse(res.text)[0].description).toBeDefined();
      expect(JSON.parse(res.text)[0].cost).toBeDefined();
      expect(JSON.parse(res.text)[0].image_url).toBeDefined();
      expect(JSON.parse(res.text)[0].overview).toBeDefined();
      expect(JSON.parse(res.text)[0].specifications).toBeDefined();
      expect(JSON.parse(res.text)[0].coverage).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('Should return all items when not given an ID.', (done) => {
    request.get('/api/getitem').expect(200).expect((res) => {
      expect(JSON.parse(res.text).length).toBeGreaterThanOrEqual(1);
    }).end(done);
  });
});

describe('/api/getdetails end point:', () => {
  it('Should fetch overview details for an item when given an ID', (done) => {
    request.get('/api/getdetails?id=1').expect(200).expect((res) => {
      expect(JSON.parse(res.text)[0].overview).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('Should fetch specification details for an item when given an ID', (done) => {
    request.get('/api/getdetails?id=1').expect(200).expect((res) => {
      expect(JSON.parse(res.text)[0].specifications).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('Should fetch coverage details for an item when given an ID', (done) => {
    request.get('/api/getdetails?id=1').expect(200).expect((res) => {
      expect(JSON.parse(res.text)[0].coverage).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('Should fail when not given an ID, and retrurn a 401.', (done) => {
    request.get('/api/getdetails').expect(401).expect((res) => {
      expect(res.status).toEqual(401);
    }).end(done);
  });
});

let relatedPurchaseId = 0; // used in deleterelatedpurchase

describe('/api/addrelatedpurchase end point:', () => {
  it('Should post data when given a pid and iid', (done) => {
    request.post('/api/addrelatedpurchase?pid=1&iid=1').expect(200).expect((res) => {
      relatedPurchaseId = res.text.insertId;
      expect(res.text).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('Should fail when not given enough information, and return a 401.', (done) => {
    request.post('/api/addrelatedpurchase').expect(401).expect((res) => {
      expect(res.status).toEqual(401);
    }).end(done);
  });
});


describe('/api/deleterelatedpurchase end point:', () => {
  it('Should delete a related purchase when given an id', (done) => {
    if (relatedPurchaseId !== 0) {
      request.post(`/api/deleterelatedpurchase?id=${relatedPurchaseId}`).expect(200).expect((res) => {
        expect(res.text).toBeDefined();
        expect(res.status).toEqual(200);
      }).end(done);
    } else {
      expect(relatedPurchaseId).not.toBe(0);
    }
  });

  it('Should fail when not given an ID, and return a 401.', (done) => {
    request.post('/api/addrelatedpurchase').expect(401).expect((res) => {
      expect(res.status).toEqual(401);
    }).end(done);
  });
});