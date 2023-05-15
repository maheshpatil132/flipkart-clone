const express = require('express');
const dotenv = require('dotenv');
const body = require('body-parser')
const cors = require('cors')

const { connect } = require('./config/database');
const errorhandle = require('./middleware/error');
const cookieParser = require('cookie-parser');
const { CreateUser, UpdateUser, LoginUser, LogoutUser, AdminUpdateuser, GetAllUSer } = require('./routes/userroutes');
const { CreateProduct, GetAllProduct, AddReview, UpdateProduct, GetProduct, DeleteReview , GetAllReview ,DeleteProduct} = require('./routes/productroutes');
const { CreateOrder, UpdateOrder, DeleteOrder, MyOrders, Getorder, GetAllOrders } = require('./routes/orderroutes');

const app = express();

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(cookieParser())

dotenv.config({path:'./config/app.env'})
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


// 3. order routes
app.use(CreateOrder)
app.use(UpdateOrder)
app.use(DeleteOrder)
app.use(MyOrders)
app.use(Getorder)
app.use(GetAllOrders)




app.use('/' ,(req,res,next)=>{
    console.log("server in running");
})

app.use(errorhandle)

app.listen(Port , (err)=>{
    if(err){
        console.log("error in setup") 
    }
    console.log(`server is running on ${Port}...`);
})