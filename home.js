var json = require('./listpet.json')
var fs = require('fs')

module.exports = function (req, res) {
    var info ='';
    fs.readFile('listpet.json',function (err, data){
        var jsonData = JSON.parse(data)
        var listPet = jsonData.listPet
        var info =''
    for(var i = 0;i<listPet.length;i++)
    {
        if(listPet[i].available == true){
            var avail = 'still have'
        } else {
            var avail = 'out of pet'
        }
        info +=`
        name: ${listPet[i].name} <br/>
        available: ${avail} <br/>
        <br/>
        `
    }
    res.send(info)
    })
}