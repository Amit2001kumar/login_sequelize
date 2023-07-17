const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test', 'root', '2001', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
