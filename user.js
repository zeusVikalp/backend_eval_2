const mongoose = require('mongoose')
const user = new mongoose.Schema({
    'firstname': {type:String, required:true},
    'middlename':{type:String},
    'lastname': {type:String,required:true },
    'age':{type:Number , required: true},
    'address':{type:String,required:true},
    'gender':{type:String,required:true},
    'createdAt':{type: Date},
    'updatedAt':{type: Date}

})

const BranchDetail = new mongoose.Schema({
    'name':{type:String,required:true},
    'address':{type:String,required:true},
    'IFSC':{type:String,required:true},
    'MICR':{type:Number,required:true},
    'createdAt':{type:  Date,required:true},
    'updatedAt':{type: Date,required:true}

})

const MasterAccount = new mongoose.Schema({
    'balance':{type:Number,required:true},
    'createdAt':{type: Date,required:true},
    'updatedAt':{type: Date,required:true}

})

const SavingsAccount = new mongoose.Schema({
    'account_number':{type:Number,required:true},
    'balance':{type:Number,required:true},
    'intrestRate':{type:String,required:true},
    'createdAt':{type: Date},
    'updatedAt':{type:Date}

})

const FixedAccount = new mongoose.Schema({
    'account_number':{type:Number,required:true},
    'balance':{type:Number,required:true},
    'intrestRate':{type:String,required:true},
    'startDate':{type:  Date},
    'maturityDate':{type: Date},
    'createdAt':{type:  Date},
    'updatedAt':{type: Date}





})

// module.exports = mongoose.model('user',user)
// module.exports = mongoose.model('BranchDetail',BranchDetail)
// module.exports = mongoose.model('MasterAccount',MasterAccount)
module.exports = mongoose.model('SavingsAccount',SavingsAccount)
module.exports = mongoose.model('FixedAccount ',FixedAccount )