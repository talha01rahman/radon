const UserModel= require("../models/userModel")




const basicCode= async function(req, res, next) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    next()
    }

const createUser= async function (req, res) {   
    let data= req.body
    let tokenDataInHeaders = req.headers.token
     // Get all header
    console.log("Request headers before modification", req.headers)
    console.log(req.headers.batch)
    console.log(req.header["content-type"])
    console.log(tokenDataInHeaders)
    // Set header in request 
    req.header['months'] = 'June' ///req.
    let savedData= await UserModel.create(data)
    // set a header in response 
    res.header('year', 2022)
    // set an attribute in header
    req.anything = "everything"
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode