const { Sequelize } = require('sequelize')
const DBConfig = require('./config')

const sequelize = new Sequelize(DBConfig)

module.exports = sequelize
