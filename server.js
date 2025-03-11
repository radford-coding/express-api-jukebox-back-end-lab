const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const methodOverride = require('method-override');

const port = process.env.PORT ? process.env.PORT : '3000';
const trackRouter = require('./controllers/tracks.js');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(cors({ origin: /http:\/\/localhost:\d+$/ }));

app.use('/tracks', trackRouter);



app.listen(port, () => {
    console.log(`The express app is ready on port ${port}!`);
});