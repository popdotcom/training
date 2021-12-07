const pet = new Array
(
    {
        id: 1,
        name: 'chó',
        available: true
    },
    {
        id: 2,
        name: 'mèo',
        available: true
    } ,
    {
        id: 3,
        name: 'sneak',
        available: false
    }
)

module.exports = function (req, res) {
    // var info =''
    // for(var i = 0;i<pet.length;i++)
    // {
    //     info +=`
    //     id: ${pet[i].id} <br/>
    //     name: ${pet[i].name} <br/>
    //     available: ${pet[i].available} <br/>
    //     `
    // }
    var myJson = JSON.stringify(pet)
    res.redirect('/detail?x=' + myJson);
  }