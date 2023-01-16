//este index é responsável por carregar todos os modelos
const { Sequelize } = require('sequelize')
const sequelize = require('../../database')
const User = require('./User')

const user = User(sequelize, Sequelize.DataTypes)

const db = {
    user,
    sequelize
}

module.exports = db
