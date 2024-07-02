const express = require('express');
const router = express.Router();
const Radar = require('../models/Radar');

// Get all radars
router.get('/', async (req, res) => {
    try {
        const radars = await Radar.find();
        res.json(radars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new radar
router.post('/', async (req, res) => {
    const radar = new Radar({
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    });

    try {
        const newRadar = await radar.save();
        res.status(201).json(newRadar);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
