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

router.get('/:id', async function(req, res, next) {
    const id = req.params.id;

    try {
        res.json(await Events.findById(id))
    } catch(err) {
        //Need to fix this? Or add something elsewhere?
        next(err);
    }

});

router.put('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        res.json(await Events.updateEvent(req.body, id));
    } catch(err) {
        next(err);
    }
})

router.post('/', async (req, res, next) => {
    try {
        res.json(await Events.addEvent(req.body));
    } catch(err) {
        next(err);
    }
    
})

router.delete('/:id', async (req, res, next) => {
    try {
        res.json(await Events.removeEvent(req.params.id));
    } catch(err) {
        next(err);
    }
})

module.exports = router;