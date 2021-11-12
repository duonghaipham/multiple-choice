require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URI = 'mongodb://localhost:27017/multichoice';
const PORT = process.env.port || 5000;

mongoose.connect(CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!!`);
});

const loginApi = require('./src/apis/login.api');
const examApi = require('./src/apis/exam.api');

// API
app.use('/login', loginApi);
app.use('/exam', examApi);