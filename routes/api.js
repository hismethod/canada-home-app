var express = require('express');
var router = express.Router();
var Room = require('../models/room');
var mongoose = require('mongoose');
var db       = require('../config/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/room/insert', function (req, res) {
    var data = req.body;
    var datetime = new Date(data.datetime);
    datetime.setHours(datetime.getDate() - 14);

    mongoose.connect(db.url);

    var room = new Room({
        index: data.index,
        source: data.source,
        title: data.title,
        author: data.author,
        datetime: datetime,
        contents: data.contents,
        link: data.link,
        linkcmt: data.linkcmt
    });
    
    room.save(function (err) {
        if(err) {
            console.log("something wrong");
        }
        else {
            console.log('insert success : ', room.index);
            res.end();
        }
        mongoose.disconnect();
    });
});

router.post('/room/insertMany', function (req, res) {
    mongoose.connect(db.url);

    var rooms = req.body.map(function (post) {
        var datetime = new Date(post.datetime);
        datetime.setHours(datetime.getDate() - 14);

        return new Room({
            index: post.index,
            source: post.source,
            title: post.title,
            author: post.author,
            datetime: datetime,
            contents: post.contents,
            link: post.link,
            linkcmt: post.linkcmt
        });
    });

    Room.insertMany(rooms, function () {
        console.log('insert success : ', rooms.length);
        res.end();
        mongoose.disconnect();
    });
});

module.exports = router;
