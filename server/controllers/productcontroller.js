const aysnchandler = require("../middleware/aysnchandler");
const ProductModel = require('../models/ProductModel');
const ApiFeatures = require("../utils/apifeatures");
const ErrorHandler = require('../utils/errorhandler')
const cloudinary = require('cloudinary').v2


exports.createproduct = aysnchandler(async(req,res,next)=>{
    let images = [];
    if (typeof req.body.images === "string") {
        images.push(req.body.images);
    } else {
        images = req.body.images;
    }

    const imagesLink = [];

    for (let i = 0; i < images.length; i++) {

        const result = await cloudinary.uploader.upload(images[i], {
            folder: "products",
        });

        imagesLink.push({
            public_id: result.public_id,
            url: result.secure_url,
        });
    }

     req.body.images = imagesLink
     
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

    const product = await ProductModel.findById({_id :id}).populate('reviews.user' , { name : true})

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
    const resultperpage = 10
    
    const featured = new ApiFeatures( ProductModel.find(), querystr).search().filter()
    
    const apifeatures = new ApiFeatures( ProductModel.find(), querystr).search().filter().pagination(resultperpage)

    const featuredproducts = await featured.query;

    const productCount = featuredproducts.length

    const products = await apifeatures.query

    // const productCount = products.length
    
    if(!products){
        return next(new ErrorHandler('no products found',404))
    }

    res.status(200).json({
        sucess:true,
        products:products,
        productCount
    })
})

// Add or update the reviews

exports.addreview = aysnchandler(async(req,res,next)=>{
    const {comment , rating , productid , name} = req.body

    const review = {
        user : req.user._id,
        rate : rating ,
        Comment : comment ,
        name : name
    }
    const product = await ProductModel.findById(productid)

    if(!product){
        return next(new ErrorHandler("product not found", 404))
    }
    const isReviewed = product.reviews.find((elem)=> elem.user.toString() === req.user._id.toString())


    
    if(!isReviewed){
        product.reviews.push(review)
    }else{
        const index = product.reviews.findIndex(elem => elem.user.toString() === req.user._id.toString())
        product.reviews[index] = review
    }
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
      let prod = await ProductModel.findById(req.params.id);
      
    //   console.log(req.body);
    if (req.body.images !== undefined) {
        let images = [];

        if (typeof req.body.images === "string") {
            images.push(req.body.images);
        } else {
            images = req.body.images;
        }

        // for (let i = 0; i < prod.images.length; i++) {
        //     await cloudinary.v2.uploader.destroy(product.images[i].public_id);
        // }

        const imagesLink = [];

        for (let i = 0; i < images.length; i++) {
            await cloudinary.uploader.upload(images[i]).then((res)=>{
                imagesLink.push({
                    public_id: res.public_id,
                    url: res.secure_url,
                });
            }).catch((err)=>{
                console.log(err);
            });

            
        }
        req.body.images = [...prod.images , ...imagesLink];
    }

    const product = await ProductModel.findByIdAndUpdate(id,{...req.body}, {new:true} )

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
        message:"product deleted successfully",
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

exports.Admingetallproducts = aysnchandler(async(req,res,next)=>{

    const products = await ProductModel.find({});


    const productCount = products.length
    
    if(!products){
        return next(new ErrorHandler('no products found',404))
    }

    res.status(200).json({
        sucess:true,
        productCount,
        products:products,
    })
})




// get to selled products
exports.gettopproducts = aysnchandler(async(req,res,next)=>{

const products = await ProductModel.find({}).sort({'sell' : -1})

if(!products){
    return next(new ErrorHandler('no products found',404))
}


res.json({
    sucess:true,
    products
})
})