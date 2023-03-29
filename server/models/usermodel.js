const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true,
        length:10
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    role:{
        type:String,
        default:'user'
    }

})

UserModel.pre('save', async function (next) {
    if (!this.isModified('password')) {
      next()
    }
    this.password = await bcrypt.hash(this.password, 10)
  })

UserModel.methods.generatetoken = function(){
    const token = jwt.sign({id:this._id}, process.env.JWT)
    return token
}


UserModel.methods.comparepassword = function(enteredpassword){
    return bcrypt.compare(enteredpassword , this.password)
}



module.exports = mongoose.model('user',UserModel)