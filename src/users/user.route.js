const express = require('express');
const userController = require('./user.controller');
const router = express.Router();

router.get('/users/',userController.findAll)

router.get('/users/:id',userController.findOne)

router.post('/users',userController.create)

router.patch('/users/:id',userController.update)

router.delete('/users/:id', userController.deleteUser)

module.exports=router;