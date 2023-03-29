const aysnchandler = require("../middleware/aysnchandler");
const ProductModel = require('../models/ProductModel');
const ApiFeatures = require("../utils/apifeatures");
const ErrorHandler = require('../utils/errorhandler')


exports.createproduct = aysnchandler(async(req,res,next)=>{

    const product = new ProductModel({...req.body})
     
    await product.save();

    res.status(200).json({
        sucess:true,
        message:"product created successfully",
        product

    })
})

// get product
exports.getproduct = aysnchandler(async(req,res,next)=>{

    const id = req.params.id

    const product = await ProductModel.findById(id);

    if(!product){
        return next(new ErrorHandler('product does not exist', 404))
    }

    res.status(200).json({
        sucess:true,
        product : product
    })
})

// getall product

exports.getallproduct = aysnchandler(async(req,res,next)=>{

    const querystr = req.query

    const resultperpage = 5
    
    const apifeatures = new ApiFeatures( ProductModel.find(), querystr).search().filter().pagination(resultperpage)

    const products = await apifeatures.query

    
    if(!products){
        return next(new ErrorHandler('no products found',404))
    }

    res.status(200).json({
        sucess:true,
        products:products
    })
})

// Add or update the reviews

exports.addreview = aysnchandler(async(req,res,next)=>{
    const {comment , rating , productid} = req.body

    const review = {
        user : req.user._id,
        rate : rating ,
        Comment : comment ,
    }
    const product = await ProductModel.findById(productid)

    const isReviewed = product.reviews.find((elem)=> elem.user.toString() === req.user._id.toString())

    if(!product){
        return next(new ErrorHandler("product not found", 404))
    }

    const index = product.reviews.findIndex(elem => elem.user.toString() === req.user._id.toString())

    if(!isReviewed){
       product.reviews.push(review)
    }

    product.reviews[index] = review

        let sum = 0

        let numrevs = product.reviews.length

        product.reviews.forEach((elem,index)=>{
            sum += elem.rate;
        })

        let ratings = sum / numrevs;

        product.rating = ratings 
        product.numrev = numrevs

        await product.save()

        res.status(200).json({
            sucess:true,
            product
        })
    
})

// Admin routes

// update product
exports.updateproduct = aysnchandler(async(req,res,next)=>{
    const id = req.params.id

    const product = await ProductModel.findByIdAndUpdate(id,{...req.body},{new:true})

    if(!product){
        return next(new ErrorHandler("product not found",404))
    }

    res.status(200).json({
        sucess:true,
        message:"product updated successfully",
        product
    })
})

// delete product

exports.deleteproduct = aysnchandler(async(req,res,next)=>{
    const id = req.params.id

    const product = await ProductModel.findByIdAndRemove(id)

    if(!product){
        return next(new ErrorHandler("product not found",404))
    }

    res.status(200).json({
        sucess:true,
        message:"product deleted successfully"
    })
})


// getall reviews
exports.getallreview = aysnchandler(async(req,res,next)=>{

    const product = await ProductModel.findById(req.query.productid);

    if(!product){
        return next(new ErrorHandler("product not found",404))
    }

    const reviews = product.reviews

    res.status(200).json({
        sucess:true,
        reviews
    })
})


// remove review
exports.deletereview = aysnchandler(async(req,res,next)=>{

    const product = await ProductModel.findById(req.query.productid);

    if(!product){
        return next(new ErrorHandler("product not found",404))
    }

    const revs = product.reviews.filter((elem)=> {
         elem._id.toString() !== req.query.id.toString()
    })

    product.reviews = revs

    let sum = 0

    let numrevs = revs.length

    revs.forEach((elem,index)=>{
        sum += elem.rate;
    })
      
    let ratings = (sum && numrevs) != 0 ? sum / numrevs : 0;

    product.rating = ratings 
    product.numrev = numrevs

    await product.save();

    res.status(200).json({
        sucess:true,
        product
    })
})

