const express = require('express');
const res = require('express/lib/response');
const logger = require('./logger')



const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortDate()
    let firstElement = underscore.first(['Talha','Rahman','Hey'])
    console.log('The first element recieved frm underscore function is' +firstElement)
    console.log('The constant in logger route has a value '+logger.url)
    res.send('My first API')
});

router.get('/test-me1', function (req, res) {
    console.log('Thr constant in logger route has a value '+endpoint)
    res.send('My 2nd API')
});
router.get('/test-me2', function (req, res) {
    res.send('My 3rd API')
});
router.get('/test-me3', function (req, res) {
    res.send('My 4th API')
});
router.get('/test-me4', function (req, res) {
    res.send('My 5th API')
});
router.get('/test-me5', function (req, res) {
    res.send('My 6th API')
});

router.get('/help', function(req,res){
    res.send('Hello there!')
})
router.get('/candidates', function(req, res){
    let candidates = ['Talha', 'Rahman']
    res.send(candidates)
})

router.get()



module.exports = router;
// adding this comment for no reason