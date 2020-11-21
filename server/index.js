const express = require('express');
const app = express();
const path = require('path');
const db = require('./database.js');
const conn = require('../connection.js');

app.use(express.static(__dirname + '/../public'));



app.get('/api/related/getratingavg/:item_id', (req, res) => {
  const id = req.params.item_id;
  if (id) {
    // single item
    return db.getRatingAvg(id, (results) => {
      res.status(200).send(results);
    }, (error) => {
      res.status(401).send('Server error');
    });
  } else {
    res.status(401).send('Bad arguments');
  }
});

app.get('/api/related/getratingcount/:item_id', (req, res) => {
  const id = req.params.item_id;
  if (id) {
    // single item
    return db.getRatingCount(id, (results) => {
      res.status(200).send(results);
    }, (error) => {
      res.status(401).send('Server error');
    });
  } else {
    res.status(401).send('Bad arguments');
  }
});

app.get('/api/related/getitem/:item_id', (req, res) => {
  const id = req.params.item_id;
  if (id) {
    // single item
    return db.getItem(id, (results) => {
      res.status(200).send(results);
    }, (error) => {
      res.status(401).send('Server error');
    });
  }
});

app.get('/api/related/getitem', (req, res) => {
  // all items
  return db.getItem(null, (results) => {
    res.status(200).send(results);
  }, (error) => {
    res.status(401).send('Server error');
  });
});

app.get('/api/related/getrelatedpurchases/:item_id', (req, res) => {
  const id = req.params.item_id;
  if (id) {
    return db.getRelatedPurchases(id, (results) => {
      res.status(200).send(results);
    }, (error) => {
      res.status(401).send(error);
    });
  } else {
    res.status(401).send('Bad arguments');
  }
});

app.post('/api/related/addrelatedpurchase', (req, res) => {
  if (req.query.pid && req.query.iid) {
    const pid = req.query.pid;
    const iid = req.query.iid;

    return db.addRelatedPurchase(pid, iid, (results) => {
      res.status(200).send(results);
    }, (error) => {
      res.status(401).send(error);
    });
  } else {
    res.status(401).send('Bad arguments');
  }
});

app.post('/api/related/deleterelatedpurchase', (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    return db.getRelatedPurchases(id, (results) => {
      res.status(200).send(results);
    }, (error) => {
      res.status(401).send(error);
    });
  } else {
    res.status(401).send('Bad arguments');
  }
});

app.get('/api/related/getdetails/:item_id', (req, res) => {
  const id = req.params.item_id;
  if (id) {

    return db.getDetails(id, (results) => {
      res.status(200).send(results);
    }, (error) => {
      res.status(401).send(error);
    });
  } else {
    res.status(401).send('Bad arguments');
  }
});

app.post('/api/related/adddetails', (req, res) => {
  if (req.query.iid && req.query.overview && req.query.specs && req.query.coverage) {
    const iid = req.query.iid;
    const overview = req.query.overview;
    const specs = req.query.specs;
    const coverage = req.query.coverage;

    return db.addDetails(iid, overview, specs, coverage, (results) => {
      res.status(200).send(results);
    }, (error) => {
      res.status(401).send(error);
    });
  } else {
    res.status(401).send('Bad arguments');
  }
});

app.listen(conn.port, () => {
  console.log(`App listening on ${conn.port}`)
});