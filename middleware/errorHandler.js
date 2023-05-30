const {CustomAPIError} = require('../errors/custom-error');

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
// this err is specific Id number but wrong number
        return res.status(err.statusCode).json({ msg : err.message})
    }
// this err is for extra or less id number
    return res.status(500).json({msg : "Some thing went wrong!, please try again later"})
}
module.exports = errorHandlerMiddleware;