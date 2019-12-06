const controllers ={}

var sequelize = require('../model/database');
var Administrador = require('../model/administrador');

sequelize.sync()

controllers.create = async (req, res) =>{
    const {name, email, senha}

    const data= await Administrador.create({
        name: name,
        email: email,
        senha: senha
    })

    .then(function(data){
        return data;
    })
    .catch(error=>{
        console.log(error)
        return error;
      })
      // return res
      res.status(200).json({
        success:true,
        message:"Salvo com sucesso!",
        data:data
      }) 
}

module.exports = controllers;