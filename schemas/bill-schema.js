const mongoose = require('mongoose');
const shop = require('./shop-schema')
const employee = require('./employee-schema')
const petlist = require('./pet-schema')
const customer = require('./customer-schema')


const bill = mongoose.Schema({
    _id: Number,
    total: {
        type: Number,
        required: true
    },
    employee:{
        type: Number,
        ref: 'Employee'
    },
    shop:{
        type: Number,
        ref: 'petShop'
    },
    pet: [{
        type: Number,
        ref: 'pet',
        required: true
    }],
    customer: {
        type: Number,
        ref: 'customerSchema',
        required: true
    }
})
const petShop = mongoose.model('petShop', shop);
const Employee = mongoose.model('Employee', employee)
const pet = mongoose.model('pet',petlist)
const customerSchema = mongoose.model('customerSchema',customer)
module.exports = mongoose.model('bill',bill)