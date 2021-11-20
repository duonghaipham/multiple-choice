// Environment constants
require('dotenv').config();

// Third-party packages
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Local
const loginApi = require('./src/apis/login.api');
const userApi = require('./src/apis/user.api');
const examApi = require('./src/apis/exam.api');
const adminApi = require('./src/apis/admin.api');

// Configurations
const app = express()
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cookieParser());
app.use(cors());

// Mongodb connection via Mongoose
mongoose.connect(process.env.MONGO_CONNECTION_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// Listening
app.listen(process.env.PORT, () => {
	console.log(`Server is listening on port ${process.env.PORT}!!`);
});

// APIs
app.use('/login', loginApi);
app.use('/user', userApi);
app.use('/exam', examApi);
app.use('/admin', adminApi);