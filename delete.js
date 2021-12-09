var json = require('./listpet.json')
const fs = require('fs')
module.exports = function (req,res){
    var id = req.params.id
    var array = {listPet:[]}
    fs.readFile('listpet.json',function (err, data)
    {
        var jsonData = JSON.parse(data)
        var listPet = jsonData.listPet
    for(var i = 0;i<listPet.length;i++)
    {
        if(listPet[i].id != id)
        {
            array.listPet.push(listPet[i])
        } 
    }
    fs.writeFile("listpet.json", JSON.stringify(array),function(err, result) {
        if(err) console.log('error', err)
      })
      res.send('done')
    })
}

