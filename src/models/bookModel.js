const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10},
    summary: mongoose.Schema.Types.Mixed,//"best book on earth" ["Node.js in detail ", "mongodb in detail", ]
    //{
      //  "ch1": "awesome intro to JS",
       // "ch2": "intro to node.js",
      //  "ch3": "intro to db"
    //}
    isDeleted:Boolean //true on book deletion


}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

