const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    },
    available: {
        type: Number,
        required: true
    },
    detail: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('pet', petSchema);

