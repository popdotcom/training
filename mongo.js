const mongoose = require('mongoose')
const mongoPath = 'mongodb+srv://admin:25251325aA@cluster0.wrceu.mongodb.net/test?retryWrites=true&w=majority'

module.exports = async () => {
    await mongoose.connect(mongoPath,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return mongoose
}