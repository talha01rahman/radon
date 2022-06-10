const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    //author_id check
    let authorId = req.body.author_id
    if(!authorId){
        res.send({ Error: "Enter the author_id and retry"})}
    const author_data = await authorModel.findById(authorId)
    if(!author_data){
        res.send({ Error: "Enter valid author_id"})}
    //publisher_id check 
    let publisherId = req.body.publisher_id
    if(!publisherId){
        res.send({ Error: "Enter the publisher_id and retry"})}
    const publisher_data = await publisherModel.findById(publisherId)
    if(!publisher_data){
        res.send({Error: "Enter valid publisher_id"})}
    
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books}) 
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id','publisher_id')
    res.send({data: specificBook})

}

// const rating_3_5 = async function (req,res){
//     let oldprice = req.body.price
//     let newprice = oldprice + 10
//     let ratingAbv_3_5 = await bookModel.find({rating:{$gt:3.5}}).update({price:newprice})
//     res.send({data:ratingAbv_3_5})
// }

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
//module.exports.rating_3_5 = rating_3_5

