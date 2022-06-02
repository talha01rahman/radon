const express = require('express');
const res = require('express/lib/response');
const logger = require('./logger')



const router = express.Router();

router.get('/test-me', function (req, res) {
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
module.exports = router;
// adding this comment for no reason