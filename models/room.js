var mongoose = require('mongoose');

module.exports = mongoose.model('room', {
    index: Number,
    source: String,
    title: String,
    author: String,
    datetime: Date,
    contents: String,
    link: String,
    linkcmt: String,
    hidden: { type: Boolean, default: false }
});