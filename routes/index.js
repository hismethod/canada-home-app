var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', { title: '캐나다 모든방' });
});

router.get('/test', function(req, res, next) {
  res.send('test');
});

router.get('/rooms', function(req, res, next) {
    res.render('home/index');
});

module.exports = router;
