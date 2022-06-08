const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.get("/getBooksData2", BookController.getBooksData2)

router.post("/updateBooks", BookController.updateBooks)

router.post("/deleteBooks", BookController.deleteBooks)

//router.get("/getBookData3", BookController.getBookData3)

const moment = require('moment');
//const { Router } = require("express")
router.get("/dateMnipulations", function (req,res){
    const today = moment();
    console.log(today.format('DD-MM-YY'));
    res.send({msg: "All good"})

})

module.exports = router;

