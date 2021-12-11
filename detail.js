var json = require('./listpet.json')
var fs = require('fs')
module.exports = function (req, res) {
  var id = parseInt(req.params.id)
  var check = false
  fs.readFile('listpet.json',function (err, data){
    var jsonData = JSON.parse(data)
    var list = jsonData.listPet
    const detail = list.find(pet=> pet.id === id)
    check = true;
    res.send(`
    name: ${detail.name} <br/>
    available: ${detail.available} <br/>
    <br/>
    `)
    if(check == false){
      res.send("lỗi")
    }
})
  }