const aysnchandler = require("../middleware/aysnchandler");
const Razorpay = require('razorpay');
const crypto = require('crypto')



exports.processpayment = aysnchandler(async(req,res, next)=>{
    var instance = new Razorpay({ key_id: process.env.Razor_key , key_secret: process.env.Razor_Secure })
     
    var options = {
        amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };

   const order = await instance.orders.create(options);
  
    res.json({
        success: true,
        order
    })
})


exports.paymentverification = aysnchandler(async(req,res,next)=>{
   
    const { razorpay_order_id , razorpay_payment_id , razorpay_signature }  = req.body
     

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expected = crypto.createHmac('sha256' , process.env.Razor_Secure)
                            .update(body.toString())
                            .digest("hex")
    
    if(expected === razorpay_signature){
        res.redirect(`${process.env.Frontend_URL}/paymentsucess?reference=${razorpay_payment_id}`)
    }else{
        res.json({
            success:false
        })
    }

    
})



exports.PaymentPublishKey = aysnchandler(async(req, res, next) => {
     res.json({
        success:true,
        key : process.env.Razor_key
     })
})



// generating the invoice
exports.generateinvoice = aysnchandler(async(req,res,next)=>{
    const instance = new Razorpay({ key_id: process.env.Razor_key , key_secret: process.env.Razor_secret })
   const invoice = await instance.invoices.create({
        type: "invoice",
        date: Date.now(),
        customer_id: req.user,
        line_items: [
          ...req.body.orderitems
        ]
      })
     res.json({
        success:true,
        invoice
     })
})