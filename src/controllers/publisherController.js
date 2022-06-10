const publisherModel= require("../models/publisherModel")
const authorModel = require("../models/authorModel")


const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data: publisherCreated})
}

const getPublisherData= async function (req, res) {
    let publisher = await publisherModel.find()
    res.send({data: publisher})
}

// const getPublishersWithAuthorDetails = async function (req, res) {
//     let specificPublisher = await publisherModel.find().populate('author_id')
//     res.send({data: specificPublisher})

// }

module.exports.createPublisher= createPublisher
module.exports.getPublisherData= getPublisherData
//module.exports.getPublishersWithAuthorDetails= getPublishersWithAuthorDetails