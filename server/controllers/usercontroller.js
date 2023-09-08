const aysnchandler = require("../middleware/aysnchandler");
const errorhandle = require("../middleware/error");
const UserModel = require('../models/usermodel')
const ErrorHandler = require("../utils/errorhandler");
const { sendtoken } = require("../utils/jsonwebtoken");
const { sendEmail } = require("../utils/sendEmails");



exports.createuser = aysnchandler(async (req, res, next) => {
    
    const user = new UserModel({
        ...req.body
    })

    await user.save()

    sendtoken(user,200 , res)

})


// login user

exports.loginuser = aysnchandler(async(req,res,next)=>{

    const { email, password } = req.body

    // check email or password is enterde or not
    if (!email || !password) {
      return next(new Errorhandler('please enter email or paswwrod', 401))
    }

    const user = await UserModel.findOne({email:email})

    if(!user){
        return next(new ErrorHandler('Wrong Email or Password',404))
    }

    const match = await user.comparepassword(password);

    if(!match){
        return next(new ErrorHandler('wrong Email or Password', 404))
    }

    sendtoken(user , 200 , res)

})


// update user 
exports.updateuser = aysnchandler(async(req,res,next)=>{
  
    const user = await UserModel.findByIdAndUpdate(req.user.id,{...req.body},{new:true})

    if(!user){
        return next(new ErrorHandler('user not found',404))
    }

    await user.save({validateBeforeSave:false})
    sendtoken(user,200,res)

})


// getuser
exports.getuser = aysnchandler(async(req,res,next)=>{


    const user = await UserModel.findById(req.user._id);

    if(!user){
        return next(new ErrorHandler('user not found', 404))
    }
     
    res.status(200).json({
        sucess:true,
        user : user
    })
})

// logoutuser
exports.logoutuser = aysnchandler(async(req,res,next)=>{

    res.cookie('token', null , {
        httpOnly: true,
        expires: new Date(Date.now())
      })

      res.json({
        success: true,
        message: "successfully loged out the user "
      })

})

// forgot password

exports.forgotpassword = aysnchandler(async(req,res,next)=>{

    const {email} = req.body

    const user = await UserModel.findOne({email:email})

    if(!user){
        return next(new ErrorHandler("user not found", 404))
    }

    


})


// Admin Routes

// admin --- update user
exports.adminupdateuser = aysnchandler(async(req,res,next)=>{
    const id = req.params.id

    const user = await UserModel.findByIdAndUpdate(id , {...req.body}, {new:true} )

    if(!user){
        return next(new ErrorHandler('user not found', 404))
    }

    res.status(200).json({
        success:true,
        user:user
    })
})

// Admin --- delete user
exports.deleteuser = aysnchandler(async(req,res,next)=>{
    const id = req.params.id

    const user = await UserModel.findByIdAndRemove(id);
    
    if(!user){
        return next(new ErrorHandler('user not found', 404))
    }

    res.status(200).json({
        success:true,
        message:"user Deleted Sucessfully"
    })
})


// getuser
exports.admingetuser = aysnchandler(async(req,res,next)=>{
    const id = req.params.id

    const user = await UserModel.findById(id);

    if(!user){
        return next(new ErrorHandler('user not found', 404))
    }
     
    res.status(200).json({
        sucess:true,
        user : user
    })
})



// Admin -- getAll

exports.getalluser = aysnchandler(async(req,res,next)=>{

    const users = await UserModel.find({})
    
    res.status(200).json({
        success:true,
        users : users
    })

})

