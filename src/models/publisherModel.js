const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
    _id: String,
    name: String,
    headquater:String

}, { timestamps: true });

module.exports = mongoose.model('Publisher', publisherSchema)
