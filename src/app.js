const express = require('express');
const app = express();
const userRoute = require('./users/user.route')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', userRoute);

module.exports = app;