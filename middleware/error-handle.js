const {customAPIError} = require('../errors/error')

const errorHandler = (err,req,res,next) => {
    if(err instanceof customAPIError){
        return res.status(err.statusCode).json({msg:err.message});
    }
    return res.status(500).json({msg:'Something went wrong, Please try again !'});
}

module.exports = errorHandler;