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
            type:String,
            required:true
        },
        public_id:{
            type:String
        }
    }],
    reviews:[{
        user:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:'user',
            required:true
        },
        name:{
          type :String,
          required : true
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
    waranty:{
        type:String
    },
    brand:{
        type:String
    },
    cureted_price:{
        type:Number,
        required:true
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