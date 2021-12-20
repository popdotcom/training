var json = require('./listpet.json')
const fs = require('fs')
const { Mongoose } = require('mongoose')
const mongo = require('./mongo')
const petSchema = require('./schemas/pet-schema')
module.exports = function (req,res){
    var id = parseInt(req.params.id)
    var fixname = req.query.name
    var fixavailable = req.query.available
    var fixdetail = req.query.detail
    // var array = {listPet:[]}
    // fs.readFile('listpet.json',function (err, data)
    // {
    //     var jsonData = JSON.parse(data)
    //     var listPet = jsonData.listPet
    // for(var i = 0;i<listPet.length;i++)
    // {
    //     if(listPet[i].id == id)
    //     {
    //         listPet[i].name = fixname
    //         listPet[i].available = fixavailable
    //         listPet[i].detail = fixdetail
    //         array.listPet.push(listPet[i])
    //     } 
    //     else 
    //     {
    //         array.listPet.push(listPet[i])
    //     }
    // }
    // fs.writeFile("listpet.json", JSON.stringify(array),function(err, result) {
    //     if(err) console.log('error', err)
    //   })
    //   res.send('done')
    // })
    const connectToMongoDB = async () => {
        await mongo().then(async(Mongoose) => {
            try {
                console.log('conected')
                await petSchema.updateOne({
                    _id: id,
                },{
                    name: fixname,
                    available: fixavailable,
                    detail: fixdetail
                })
                res.send('done')
            } catch{
                res.send('something went wrong!')
            } finally {
                Mongoose.connection.close()
            }
        })
    }
    connectToMongoDB()
}

