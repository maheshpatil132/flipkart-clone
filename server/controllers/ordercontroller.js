const aysnchandler = require("../middleware/aysnchandler");
const OrderModel = require('../models/ordermodel');
const ProductModel = require("../models/ProductModel");
const ErrorHandler = require("../utils/errorhandler");

exports.createorder = aysnchandler(async(req,res,next)=>{
    
    const { shipinginfo , orderitems , paymentinfo , itemsprice , taxprice , totalprice , shipingprice} = req.body 

    const orderinfo = {
        user : req.user._id,
        shipinginfo,
        orderitems,
        paymentinfo,
        itemsprice,
        taxprice,
        totalprice,
        shipingprice
    }
    
    const order = new OrderModel({
          ...orderinfo
    })

    await order.save()

    res.status(200).json({
        sucess:true, 
        message:"order Created Successfully",
        order
    })

})

// get single order 
exports.getorder = aysnchandler(async(req,res,next)=>{
    const id = req.params.id

    const order = await OrderModel.findById(id).populate('user', {name : true})

    if(!order){
        return next(new ErrorHandler("order not found", 404))
    }

    res.status(200).json({
        sucess:true,
        order
    })
})

// get my order
exports.myorder =  aysnchandler(async(req,res,next)=>{

  const orders = await OrderModel.find({user:req.user._id})

  res.status(200).json({
    sucess:true,
    orders
  })
    
}) 

// Admin Routes

// get all order
exports.getallorder = aysnchandler(async(req,res,next)=>{
    
    const orders = await OrderModel.find({}).populate('user','name email')

    res.status(200).json({
        sucess:true,
        orders
    })
})

// update order status
exports.updateorder = aysnchandler(async (req,res,next)=>{
    const id  = req.params.id

    const order = await OrderModel.findById(id) 

    if(!order){
        return next(new ErrorHandler("order not found",404))
    }


    if(order.orderstatus === 'delivered'){
        return next(new ErrorHandler("Product Alredy Delivered",202))
    }
    
    order.orderitems.forEach(async(elem,index)=>{
        await updatestock(elem.product , elem.quantity)
    })
   
    order.orderstatus = req.body.orderstatus

    if(req.body.status === 'delivered'){
        order.deliveredAt = Date.now()
    }
    
    await order.save()

    res.status(200).json({
        sucess:true,
        order,
        message:"order updated successfully"
    })
})

// delete order
exports.deleteorder = aysnchandler(async (req,res,next)=>{
    const id  = req.params.id

    const order = await OrderModel.findByIdAndRemove(id)

    if(!order){
        return next(new ErrorHandler("order not found",404))
    }

    res.status(200).json({
        sucess:true,
        message:"order deleted successfully"
    })
})


const updatestock = async(id,quantity)=>{
    const product = await ProductModel.findById(id)

    product.stock -= quantity
    product.sell += quantity

    await product.save()
}



// cancel order 
// payment refund