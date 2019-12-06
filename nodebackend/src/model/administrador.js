const Sequelize = require('sequelize');
var sequelize = require('./database');
// import Role for FK roleId
var Role = require('./Role');
// name table
var ntAdmin = 'administrador';

var Administrador = sequelize.define(ntAdmin, {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING
})

module.exports= Administrador