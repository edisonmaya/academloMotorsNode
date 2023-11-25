const express = require('express');
const app = express();
const userRoute = require('./users/user.route')
const repairRoute = require('./repairs/repair.route')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', userRoute);
app.use('/api/v1', repairRoute);

module.exports = app;