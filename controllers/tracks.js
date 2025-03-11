const Track = require('../models/track.js');
const express = require('express');
const router = express.Router();

// POST /tracks

router.post('/', async (req, res) => {
    try {
        const createdTrack = await Track.create(req.body);
        res.status(201).json(createdTrack);
    } catch (error) {
        res.status(500).json({ err: error.message });
    };
});


// GET /tracks
router.get('/', async (req, res) => {
    res.json({res: `this is the index route`});
});

// GET /tracks/:trackId
router.get('/:trackId', async (req, res) => {
    res.json({res: `this is the get route for ${req.params.trackId}`});
});


// PUT /tracks/:trackId
router.put('/:trackId', async (req, res) => {
    res.json({res: `this is the put route for ${req.params.trackId}`});
});


// DELETE /tracks/:trackId
router.delete('/:trackId', async (req, res) => {
    res.json({res: `this is the delete route for ${req.params.trackId}`});
});




module.exports = router;