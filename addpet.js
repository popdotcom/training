var json = require('./listpet.json')
var fs = require('fs')
const { Mongoose } = require('mongoose')
const mongo = require('./mongo')
const petSchema = require('./schemas/pet-schema')
module.exports = function (req, res) {
  if(req.query.id !== undefined && req.query.name !== undefined && req.query.available !== undefined && req.query.detail !== undefined){
    var newid = parseInt(req.query.id)
    var newname = req.query.name
    var newavailable = parseInt(req.query.available)
    var newdetail = req.query.detail
    const connectToMongoDB = async () => {
      await mongo().then(async(Mongoose) => {
          try {
              console.log('conected')
              const pet = {
                _id: newid,
                name: newname,
                available: newavailable,
                detail: newdetail,
              }
              await new petSchema(pet).save()
              res.send('done')
          } finally {
              Mongoose.connection.close()
          }
      })
  }
  connectToMongoDB()
  } else {
    res.send('something went wrong!')
  }
    
//     fs.readFile('listpet.json',function (err, data){
//     var json = JSON.parse(data)
//     json.listPet.push({"id": newid,
//                        "name": newname,
//                        "available": newavailable,
//                        "detail": newdetail
//                     }) 
//     fs.writeFile("listpet.json", JSON.stringify(json),function(err, result) {
//         if(err) console.log('error', err)
//       })
// })

}