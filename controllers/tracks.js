const Track = require('../models/track.js');
const express = require('express');
const router = express.Router();

// POST /tracks (201)

router.post('/', async (req, res) => {
    res.json({ res: `this is the post route`});
});


// GET /tracks


// GET /tracks/:trackId


// PUT /tracks/:trackId


// DELETE /tracks/:trackId




module.exports = router;