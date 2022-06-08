const { model } = require("mongoose")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find()
    res.send({msg: allBooks})
}

const getBooksData2= async function (req, res) {
    let allBooks= await BookModel.find({authorName: "Talha Rahman"}).count()
    console.log(allBooks)
    if (allBooks.length > 0) res.send({msg: allBooks, condition: true})
    else res.send({msg: "No Book found", condition: false})
}

const updateBooks= async function (req, res) {
    //let data = req.body // {sales:1200}
    //let allBooks= await BookModel.updateMany(
     //   {authorName: "Talha Rahman"}, //condition
      //  {$set:data} //update om date 
  //  )
  let data = req.body 
  let allBooks = await BookModel.findOneAndUpdate( 

    {"authorName":"ABC"}, // condition
    {$set:data}, // update in data
    {new:true, upsert:true} // new: true - will give u back the updated document 
    // upsert : it finds and updates the document but if not found the it creates a new document i.e Update or Insert 
    
     // new: 
  )
    res.send({msg:allBooks})
}

const deleteBooks= async function (req, res) {
    
    let allBooks= await BookModel.updateMany(
        {authorName:"ABC"},
        {$set: {isDeleted:true}},
        { new: true}
    )
    res.send({msg: allBooks})
}

//const getBookData3 = async  function (req, //res) {
// let allBooks = await BookModel.find()
     //{$or:[
        //{authorName:"TR"},{isPublished:false},{sales:2700}   //{sales:2200},{sales:3200}
        //{$or:[{authorName:"JK Rowling"},{authorName:"SRK"}]}
        //]}).count()
        //]}).select({bookName:1,authorName:1,_id:0})
        //]}).sort({sales:1}).select({sales:1,_id:0})
        //}).limit(2)
        //}).sort({sales:1}).limit(3).select({sales:1,_id:0})
        //}).sort({sales:-1}).limit(3).select({sales:1,_id:0})
        //}).skip(5)
        //}).skip(2*page)

        //{authorName:{$eq:"Talha"}}).count() //
         // {sales:{$gt:1000}},{authorName://////{$eq:}}).count()
 //res.send({msg:allBooks}) 
//}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksData2= getBooksData2
module.exports.updateBooks= updateBooks
module.exports.deleteBooks=deleteBooks
//module.exports.getBookData3=getBookData3

//CRUD operation
//CREATE
//READ
//UPDATE
//DELETE
//Moment JS
 
