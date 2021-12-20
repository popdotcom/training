const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('petShop',shopSchema)