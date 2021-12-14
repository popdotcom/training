var json = require('./listpet.json')
var fs = require('fs')
module.exports = function (req, res) {
  var id = parseInt(req.params.id)
  fs.readFile('listpet.json',function (err, data){
    var jsonData = JSON.parse(data)
    var list = jsonData.listPet
    const detail = list.find(pet=> pet.id === id)
    if(detail !== undefined){
      res.send(`
    name: ${detail.name} <br/>
    available: ${detail.available} <br/>
    <br/>
    `)
    } else 
    {
      res.send("404 not found")
    }
})
  }