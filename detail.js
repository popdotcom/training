var json = require('./listpet.json')
var fs = require('fs')
module.exports = function (req, res) {
  var id = req.params.id
  var check = false
  fs.readFile('listpet.json',function (err, data){
    var jsonData = JSON.parse(data)
    var list = jsonData.listPet
    for(var i=0;i<list.length;i++){
      if(list[i].id == id){
        check = true
        res.send(`
        name: ${list[i].name} <br/>
        available: ${list[i].available} <br/>
        detail: ${list[i].detail} <br/>
        `)
      }
    }
    if(check == false){
      res.send("lỗi")
    }
})
  }