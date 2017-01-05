var express = require('express');
var router = express.Router();
var Room = require('../models/room');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/room/insertMany', function (req, res) {

    var rooms = req.body.map(function (post) {
        var datetime = new Date(post.datetime);
        datetime.setHours(datetime.getDate() - 14);

        return new Room({
            index: post.index,
            title: post.title,
            author: post.author,
            datetime: datetime,
            contents: post.contents,
            link: post.link,
            linkcmt: post.linkcmt
        });
    });

    Room.insertMany(rooms, function () {
        res.end();
    });
});

module.exports = router;
