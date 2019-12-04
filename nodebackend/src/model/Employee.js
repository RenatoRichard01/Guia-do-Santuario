const Sequelize = require('sequelize');
var sequelize = require('./database');
// import Role for FK roleId
var Role = require('./Role');
// name table
var nametable = 'empleado';
var ntAdmin = 'administrador';

var Employee = sequelize.define(nametable,{

  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  name:  Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.BIGINT,
  // LLAVE FORANEA
  roleId:{
    type: Sequelize.INTEGER,
    allowNull: false,
    // this is a refence to another model
    refences: {
      model: Role,
      key: 'id'
    }
  }
})

var Administrador = sequelize.define(ntAdmin,{
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  senha: Sequelize.STRING
})

Employee.belongsTo(Role);

module.exports = Employee, Administrador
