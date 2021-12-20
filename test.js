const { Mongoose } = require('mongoose')
const mongo = require('./mongo')
const petSchema = require('./schemas/pet-schema')
const employee = require('./schemas/shop-schema')

const connectToMongoDB = async () => {
    await mongo().then(async(Mongoose) => {
        try {
            console.log('conected')
            // //===========find data============
            const result = await petSchema.find()
            .populate({path: '_id',select:'name'})
            .exec(function (err, petSchema) {
                console.log('shop is %s', petSchema.shopId.name);
                // prints "The author is Ian Fleming"
              })
            // //======insert data=================
            // const pet = {
            //     _id: 1,
            //     name: 'raven',
            //     available: 3,
            //     detail: 'its a raven',
            //     // increase or decrease
            //     //     $inc:{
            //     //         petId: 1
            //     //     }
            // }
            // await new petSchema(pet).save()
            // const petShop = {
            //     _id: 2,
            //     name: 'second Shop',
            //     address: 'Eart'
            // }
            // await new petSchema(petShop).save()
                // const Employee = {
                //     _id:1,
                //     name: 'abc',
                //     DOB: '11/12/2000',
                //     address: 'eart',
                //     phoneNumber: '0123456789',
                //     shopId: 2
                // }
                // await new petSchema(Employee).save()

            //======update data=========
            // await petSchema.updateOne({
            //     name:'dog',
            // },{
            //     name: 'sneak',
            //     available: 20,
            //     detail: 'its a sneak'
            // })
            //=========delete data============
            // await petSchema.deleteOne({
            //     name: 'cat'
            // })
            //========find one and update======
            // await petSchema.findOneAndUpdate({
            //     name:'sneak'
            // },{
            //     name:'dog',
            //     detail:'its a dog'
            // },
            // {
            //     upsert: true,
            //     new: true
            // })
        } finally {
            Mongoose.connection.close()
        }
    })
}

connectToMongoDB()