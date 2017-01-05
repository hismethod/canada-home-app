var mongoose = require('mongoose');

module.exports = mongoose.model('room', {
    index: Number,
    title: String,
    author: String,
    datetime: Date,
    contents: String,
    link: String,
    linkcmt: String,
    hidden: { type: Boolean, default: false }
});