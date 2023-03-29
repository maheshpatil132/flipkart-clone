const mongoose = require('mongoose');


const OrderModel = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user",
        require: true
    },
    shipinginfo: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required:true
        },
        state: {
            type: String,
            required:true

        },
        country: {
            type: String,
            required:true
        },
        pincode:{
            type:Number,
            length:6,
            required:true
        }
    },
    orderitems:[{
        name:{
            type:String,

        },
        image:{
          type:String,
          required:true
        },
        product:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:"product",
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        quantity:{
            type:Number,
            default:1
        },
        
    }],
    paymentinfo:{
        id:{
            type:String,
            required:true
        },
        status:{
            type:String
        }
    },
    orderstatus:{
        type:String,
        default:'processing'
    },
    itemsprice:{
        type:Number,
        required:true
    },
    shipingprice:{
        type:Number,
        required:true
    },
    taxprice:{
        type:Number,
        required:true
    },
    totalprice:{
        type:Number,
        required:true
    },
    paidAt:{
        type:Date,
        default:Date.now(),
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    deliveredAt:{
        type:Date
    }
})




module.exports = mongoose.model('order',OrderModel)