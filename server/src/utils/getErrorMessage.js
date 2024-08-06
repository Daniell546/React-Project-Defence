const { MongooseError } = require("mongoose")

exports.getErrorMessage = (err) => {
    if(err instanceof MongooseError){
        return JSON.stringify(Object.values(err.errors).at(0).message);
    } else {
        return JSON.stringify(err.message);
    }
}