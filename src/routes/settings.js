const express = require('express');
const router = express.Router();

const Settings = require('../models/settings');

router.get('/', async function(req, res, next) {
    try {
        res.json(await Settings.find())
    } catch(err) {
        console.log(err);
    }
});

router.get('/:id', async function(req, res, next) {
    const id = req.params.id;

    try {
        res.json(await Settings.findById(id))
    } catch(err) {
        //Need to fix this? Or add something elsewhere?
        next(err);
    }

});

router.put('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        res.json(await Settings.updateSettings(req.body, id));
    } catch(err) {
        next(err);
    }
})

module.exports = router;