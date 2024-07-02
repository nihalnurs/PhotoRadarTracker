const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const radars = require('./routes/radars');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/radartracker', {
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Could not connect to MongoDB", err);
});

app.use('/api/radars', radars);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
