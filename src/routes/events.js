const express = require('express');
const router = express.Router();

//Import Users from models, and use to access database
//The try and catch stuff belongs here

const Events = require('../models/events')

router.get('/', async function(req, res, next) {
    try {
        res.json(await Events.find())
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;