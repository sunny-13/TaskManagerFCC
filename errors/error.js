
class customAPIError extends Error {
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}

const customError = (message,statusCode) => {
    return new customAPIError(message,statusCode);
}

module.exports = {customAPIError,customError};