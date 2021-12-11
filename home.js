var json = require('./listpet.json')
var fs = require('fs')

module.exports = function (req, res) {
    var info ='';
    var search = req.query.search
    fs.readFile('listpet.json',function (err, data){
        var jsonData = JSON.parse(data)
        var listPet = jsonData.listPet
        var info =''
    if(search !== undefined&&search !==''){
        const listPets = listPet.find(pet => pet.name === search)
        if (listPets !== undefined)
        {
            res.send(`
            name: ${listPets.name} <br/>
            available: ${listPets.available} <br/>
            <br/>
            `) 
        } else 
        {
            res.send("cannot find ")
        }
    } else {
        for(var i = 0;i<listPet.length;i++)
    {
        info +=`
        name: ${listPet[i].name} <br/>
        available: ${listPet[i].available} <br/>
        <br/>
        `
    }
    res.send(info)
    }
    })
}