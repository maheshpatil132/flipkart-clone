const express = require('express');
const { getallproduct, createproduct, updateproduct, deleteproduct, getproduct, addreview, getallreview, deletereview, Admingetallproducts, gettopproducts } = require('../controllers/productcontroller');
const {Authorization, authorizerole }= require('../middleware/auth')
const app = express.Router();


exports.CreateProduct = app.post('/create/product', Authorization , authorizerole('admin'), createproduct)
exports.GetAllProduct = app.get('/getall/products', getallproduct)
exports.UpdateProduct = app.put('/update/product/:id', Authorization , authorizerole('admin'), updateproduct)
exports.DeleteProduct = app.delete('/delete/product/:id', Authorization , authorizerole('admin'), deleteproduct)
exports.GetProduct = app.get('/product/:id', getproduct)
exports.AddReview = app.put('/add/review', Authorization , addreview)
exports.GetAllReview = app.get('/getall/review', getallreview)
exports.DeleteReview = app.get('/delete/review', Authorization , deletereview)
exports.AdminGetAllProducts = app.get('/admin/products', Authorization , authorizerole('admin'), Admingetallproducts)
exports.GetTopSellProducts = app.get('/top/products', gettopproducts)