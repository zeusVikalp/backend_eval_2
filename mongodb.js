const mongoose = require('mongoose')

class mongo{
    constructor(){
        this.createMongoConnection();
    }

    createMongoConnection(){
        mongoose.connect(`mongodb://bankinguser:bankingpassword@localhost:27017/banking`)

        mongoose.connection.once('open',() =>{
            console.log("MongoDb is Connected")

        })
        mongoose.connection.on('error',() => {
            console.log("Error occured in mongodb connection")
        })
    }
}
module.exports = mongo;