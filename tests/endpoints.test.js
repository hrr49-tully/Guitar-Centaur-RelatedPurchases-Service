const conn = require('../connection.js');
const request = require('supertest')(`${conn.url}`);

describe('/api/related/getrelatedpurchases end point:', () => {
  it('Should fetch related data when given an ID', (done) => {
    request.get('/api/related/getrelatedpurchases/1').expect(200).expect((res) => {
      expect(res.text).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('Should fail when not given an ID, and retrurn a 404.', (done) => {
    request.get('/api/related/getrelatedpurchases').expect(404).expect((res) => {
      expect(res.status).toEqual(404);
    }).end(done);
  });
});

describe('/api/related/getratingavg end point:', () => {
  it('Should fetch an average for a given item ID', (done) => {
    request.get('/api/related/getratingavg/1').expect(200).expect((res) => {
      expect(JSON.parse(res.text)[0].score).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('Should fail when not given an ID, and retrurn a 404.', (done) => {
    request.get('/api/related/getratingavg').expect(404).expect((res) => {
      expect(res.status).toEqual(404);
    }).end(done);
  });
});

describe('/api/related/getratingcount end point:', () => {
  it('Should fetch a count of all ratings for a given item ID', (done) => {
    request.get('/api/related/getratingcount/1').expect(200).expect((res) => {
      expect(JSON.parse(res.text)[0].score).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('Should fail when not given an ID, and retrurn a 404.', (done) => {
    request.get('/api/related/getratingcount').expect(404).expect((res) => {
      expect(res.status).toEqual(404);
    }).end(done);
  });
});

describe('/api/related/getitem/# end point:', () => {
  it('Should fetch an id, title, description, cost, image_url, overview, specifications, and coverage for a given item ID', (done) => {
    request.get('/api/related/getitem/1').expect(200).expect((res) => {
      const data = JSON.parse(res.text);
      expect(data[0].id).toBeDefined();
      expect(data[0].title).toBeDefined();
      expect(data[0].description).toBeDefined();
      expect(data[0].cost).toBeDefined();
      expect(data[0].image_url).toBeDefined();
      expect(data[0].overview).toBeDefined();
      expect(data[0].specifications).toBeDefined();
      expect(data[0].coverage).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });
});

describe('/api/related/getitems end point:', () => {
  it('Should fetch many items which include id, title, description, cost, image_url, overview, specifications, and coverage for a given item ID', (done) => {
    request.get('/api/related/getitems').expect(200).expect((res) => {
      const data = JSON.parse(res.text);
      expect(data.length).toBeGreaterThan(1);
      expect(data[0].id).toBeDefined();
      expect(data[0].title).toBeDefined();
      expect(data[0].description).toBeDefined();
      expect(data[0].cost).toBeDefined();
      expect(data[0].image_url).toBeDefined();
      expect(data[0].overview).toBeDefined();
      expect(data[0].specifications).toBeDefined();
      expect(data[0].coverage).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });
});

describe('/api/related/getdetails end point:', () => {
  it('Should fetch overview details for an item when given an ID', (done) => {
    request.get('/api/related/getdetails/1').expect(200).expect((res) => {
      expect(JSON.parse(res.text)[0].overview).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('Should fetch specification details for an item when given an ID', (done) => {
    request.get('/api/related/getdetails/1').expect(200).expect((res) => {
      expect(JSON.parse(res.text)[0].specifications).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('Should fetch coverage details for an item when given an ID', (done) => {
    request.get('/api/related/getdetails/1').expect(200).expect((res) => {
      expect(JSON.parse(res.text)[0].coverage).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('Should fail when not given an ID, and retrurn a 404.', (done) => {
    request.get('/api/related/getdetails').expect(404).expect((res) => {
      expect(res.status).toEqual(404);
    }).end(done);
  });
});

let relatedPurchaseId = 0; // used in deleterelatedpurchase

describe('/api/related/addrelatedpurchase end point:', () => {
  it('Should post data when given a pid and iid', (done) => {
    request.post('/api/related/addrelatedpurchase?pid=1&iid=1').expect(200).expect((res) => {
      relatedPurchaseId = res.text.insertId;
      expect(res.text).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('Should fail when not given enough information, and return a 401.', (done) => {
    request.post('/api/related/addrelatedpurchase').expect(401).expect((res) => {
      expect(res.status).toEqual(401);
    }).end(done);
  });
});


describe('/api/related/deleterelatedpurchase end point:', () => {
  it('Should delete a related purchase when given an id', (done) => {
    if (relatedPurchaseId !== 0) {
      request.post(`/api/related/deleterelatedpurchase?id=${relatedPurchaseId}`).expect(200).expect((res) => {
        expect(res.text).toBeDefined();
        expect(res.status).toEqual(200);
      }).end(done);
    } else {
      expect(relatedPurchaseId).not.toBe(0);
    }
  });

  it('Should fail when not given an ID, and return a 401.', (done) => {
    request.post('/api/related/addrelatedpurchase').expect(401).expect((res) => {
      expect(res.status).toEqual(401);
    }).end(done);
  });
});