const express = require('express');
const dotenv = require('dotenv');
const body = require('body-parser')
const cors = require('cors')
const cloudinary = require('cloudinary').v2 ;
const fileUpload = require('express-fileupload')

const { connect } = require('./config/database');
const errorhandle = require('./middleware/error');
const cookieParser = require('cookie-parser');
const { CreateUser, UpdateUser, LoginUser, LogoutUser, AdminUpdateuser, GetAllUSer } = require('./routes/userroutes');
const { CreateProduct, GetAllProduct, AddReview, UpdateProduct, GetProduct, DeleteReview , GetAllReview ,DeleteProduct, AdminGetAllProducts, GetTopSellProducts} = require('./routes/productroutes');
const { CreateOrder, UpdateOrder, DeleteOrder, MyOrders, Getorder, GetAllOrders } = require('./routes/orderroutes');
const { ProcessPayment, PublishKey, PaymentVerification, GenerateIvoice } = require('./routes/paymentroute');
const bodyParser = require('body-parser');

const app = express();

const corsOptions ={
    origin:'https://flipkart-api.vercel.app', 
    // origin:'http://localhost:3000', 
    credentials:true,            
    optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json()); 
 

if(process.env.Node_Env !== 'Production'){
    dotenv.config({path:'./config/app.env'})
}


app.use(fileUpload( {
    limits: { fileSize: 100 * 1024 * 1024 },
  }));

cloudinary.config({ 
    cloud_name: `${process.env.cloud_name}`, 
    api_key: `${process.env.api_key}`, 
    api_secret: `${process.env.api_secret}` 
  });



const Port = process.env.PORT || 4000




// connect with the datbase
connect();

// routes

// 1. user routes
app.use(CreateUser)
app.use(UpdateUser)
app.use(LoginUser)
app.use(LogoutUser)
app.use(AdminUpdateuser)
app.use(AdminUpdateuser)
app.use(GetAllUSer)


// 2. product routes
app.use(CreateProduct)
app.use(GetAllProduct)
app.use(AddReview)
app.use(UpdateProduct)
app.use(GetProduct)
app.use(DeleteReview)
app.use(GetAllReview)
app.use(DeleteProduct)
app.use(AdminGetAllProducts)
app.use(GetTopSellProducts)


// 3. order routes
app.use(CreateOrder)
app.use(UpdateOrder)
app.use(DeleteOrder)
app.use(MyOrders)
app.use(Getorder)
app.use(GetAllOrders)

// Pament
app.use(ProcessPayment)
app.use(PaymentVerification)
app.use(PublishKey)
app.use(GenerateIvoice)


app.get('/' ,(req,res,next)=>{
    console.log("server in running");
    // console.log(req);
    res.send("Hi, From bacakend")
})

app.use(errorhandle)

app.listen(Port , (err)=>{
    if(err){
        console.log("error in setup") 
    }
    console.log(`server is running on ${Port}...`);
})