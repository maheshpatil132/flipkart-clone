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
const { CreateProduct, GetAllProduct, AddReview, UpdateProduct, GetProduct, DeleteReview , GetAllReview ,DeleteProduct, AdminGetAllProducts} = require('./routes/productroutes');
const { CreateOrder, UpdateOrder, DeleteOrder, MyOrders, Getorder, GetAllOrders } = require('./routes/orderroutes');
const { ProcessPayment, PublishKey, PaymentVerification, GenerateIvoice } = require('./routes/paymentroute');

const app = express();

const corsOptions ={
    // origin:'https://flipkart-clone-ui.vercel.app', 
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200,
    //access-control-allow-credentials:true
}
app.use(cors(corsOptions));
app.use(cookieParser())

dotenv.config({path:'./config/app.env'})

app.use(fileUpload({
    useTempFiles : true,
}));

cloudinary.config({ 
    cloud_name: `${process.env.cloud_name}`, 
    api_key: `${process.env.api_key}`, 
    api_secret: `${process.env.api_secret}` 
  });



const Port = process.env.PORT
app.use(body.urlencoded({extended:false}))
app.use(body.json())
express.json()



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
    
})

app.use(errorhandle)

app.listen(Port , (err)=>{
    if(err){
        console.log("error in setup") 
    }
    console.log(`server is running on ${Port}...`);
})