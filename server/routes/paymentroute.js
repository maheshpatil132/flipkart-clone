const express = require('express');
const { processpayment, PaymentPublishKey, paymentverification, generateinvoice } = require('../controllers/paymentcontroller');
const {Authorization, authorizerole }= require('../middleware/auth')

const app = express.Router();


exports.ProcessPayment = app.post('/process/payment' , Authorization ,  processpayment);
exports.PaymentVerification = app.post('/paymentverification' , Authorization , paymentverification);
exports.PublishKey = app.get('/process/publishkey' , Authorization , PaymentPublishKey);
exports.GenerateIvoice = app.get('/generate/invoice' , Authorization, generateinvoice);



