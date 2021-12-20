const mongoose = require('mongoose');
const customer = mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('customerSchema',customer)