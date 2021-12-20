const mongoose = require('mongoose');
const {shopSchema} = require('./shop-schema')
const { Mongoose } = require('mongoose')
const mongo = require('../mongo')

const employeeSchema = mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    shopId:{
        type: Number, 
        ref: 'petShop'
    }
},{
    collection: 'petShop'
}
    
)
const petShop = mongoose.model('petShop',shopSchema)
// module.exports = mongoose.model('Employee',employeeSchema)
const employee = mongoose.model('employee',employeeSchema)


