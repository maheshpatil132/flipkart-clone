const express = require('express');
const { createorder, updateorder, deleteorder, myorder, getorder, getallorder } = require('../controllers/ordercontroller');
const {Authorization, authorizerole } = require('../middleware/auth')
const app = express.Router()



exports.CreateOrder = app.post('/create/order', Authorization , createorder)
exports.UpdateOrder = app.put('/update/order/:id', Authorization , updateorder)
exports.DeleteOrder = app.delete('/delete/order/:id', Authorization , authorizerole('admin'), deleteorder)
exports.MyOrders = app.get('/get/myorders', Authorization , myorder)
exports.Getorder = app.get('/order/:id', Authorization , getorder)
exports.GetAllOrders = app.get('/getall/orders', Authorization , authorizerole('admin'), getallorder)
