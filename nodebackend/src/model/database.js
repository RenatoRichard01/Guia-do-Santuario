var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'node', // database
  'root', // user / usuario
  'root', //password
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;
