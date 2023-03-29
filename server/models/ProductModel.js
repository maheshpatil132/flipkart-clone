const mongoose = require('mongoose');

const ProductModel = new mongoose.Schema({
    title:{
        type:String,
        required :true
    },
    decr:{
        type:String,
    },
    rating:{
        type:Number,
        default:0
    },
    numrev :{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:1
    },
    images:[{
        url:{
            type:String
        },
        id:{
            type:String
        }
    }],
    reviews:[{
        user:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:'user',
            required:true
        },
        rate:{
            type:Number,
            required:true
        },
        Comment:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now()
        }
    }],
    sell:{
        type:Number,
        default:0
    },
    discount:{
        type:Number
    },
    price:{
      type:Number,
      required:true
    },
    features:[],
    category:{
        type:String,
        required:true
    }
})



module.exports = mongoose.model('product',ProductModel)