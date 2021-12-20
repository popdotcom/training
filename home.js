const {MongoClient} = require('mongodb');
var json = require('./listpet.json')
var fs = require('fs')
const { Mongoose } = require('mongoose')
const mongo = require('./mongo')
const petSchema = require('./schemas/pet-schema')


module.exports = function (req, res) {
const connectToMongoDB = async () => {
    await mongo().then(async(Mongoose) => {
        try {
            console.log('conected')
            const result = await petSchema.find()
            res.send(result)
        } finally {
            Mongoose.connection.close()
        }
    })
}

connectToMongoDB()

}