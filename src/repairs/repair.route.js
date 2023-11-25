const express = require('express');
const repairController = require('./repair.controller');
const router = express.Router();

router.get('/repairs/',repairController.findAll)

router.get('/repairs/:id',repairController.findOne)

router.post('/repairs',repairController.create)

router.patch('/repairs/:id',repairController.update)

router.delete('/repairs/:id', repairController.deleteRepair)

module.exports=router;