const ErrorHandler = require("../utils/errorhandler");

const errorhandle = (err, req, res, next) => {
    err.status = err.status || 500;
    err.message = err.message || "internal server error"



    if (err.name == 'CastError') {
        err.message = "Resource not Found",
            err.status = 500
    }

    if (err.code == 11000) {
        const message = `This ${Object.keys(err.keyValue)} are alreadey Exist`
        err = new ErrorHandler(message, 400)
    }

    res.status(err.status).json({
        error: err.message,
        status: false
    })
}

module.exports = errorhandle