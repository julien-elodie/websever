var express = require('express');
var pg = require('pg');
var router = express.Router();

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
  client.query('select * from videoadvanceinfo;',function (err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    // return result.rows[0];
    router.get('/', function (req, res, next) {
      res.render('videos', result.rows[0]);
    });
  })
});

module.exports = router;