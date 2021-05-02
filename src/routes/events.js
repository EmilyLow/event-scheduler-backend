const express = require('express');
const router = express.Router();

//Import Users from models, and use to access database
//The try and catch stuff belongs here

router.get('/', function(req, res, next) {
    res.send("events get");
});

module.exports = router;