

exports.sendtoken = (user, status , res)=>{

    const token = user.generatetoken();

    const options = {
        httpOnly: true,
        expires: new Date( Date.now() + process.env.Cookie_Expire * 60 * 60 * 24 * 1000),
    }

    res.status(status).cookie('token', token , options).json({
        sucess : true,
        user : user
    })
}