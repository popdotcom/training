const { Mongoose } = require('mongoose')
const mongo = require('./mongo')
const petSchema = require('./schemas/pet-schema')

const connectToMongoDB = async () => {
    await mongo().then(async(Mongoose) => {
        try {
            console.log('conected')
            //===========find data============
            // const result = await petSchema.findOne({
            //     name: 'cat'
            // })
            // console.log('Result',result)
            //======insert data=================
            // const pet = {
            //     name: 'cat',
            //     available: 10,
            //     detail: 'its a cat'
                // increase or decrease
                    // $inc:{
                    //     petId: 1
                    // }
            // }
            // await new petSchema(pet).save()
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
            await petSchema.findOneAndUpdate({
                name:'sneak'
            },{
                name:'dog',
                detail:'its a dog'
            },
            {
                upsert: true,
                new: true
            })
        } finally {
            Mongoose.connection.close()
        }
    })
}

connectToMongoDB()