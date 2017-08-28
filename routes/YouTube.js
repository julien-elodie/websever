var express = require('express');
var pg = require('pg');
var router = express.Router();

/*congfig*/
var config = {
  user:'julien-elodie',
  database:'videoinfodb',
  password:'wyq2644756656',
  port:'5432'
};

var client = new pg.Client(config);

client.connect(function (err) {
  if (err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('select * from videobaseinfo;',function (err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    // return result.rows[0];
    router.get('/', function (req, res, next) {
      res.locals.datasets = result.rows.slice(0,5);
      res.render('YouTube');
    });
  })
});

/* Get YouTube's html */
/*
router.get('/', function (req, res, next) {
  res.render('YouTube');
});
*/
module.exports = router;