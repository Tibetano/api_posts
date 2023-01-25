//este index é responsável por carregar todos os modelos
const { Sequelize } = require('sequelize')
const sequelize = require('../../database')
const User = require('./User')
const Post = require('./Post')
const Like = require('./Like')

const user = User(sequelize, Sequelize.DataTypes)
const post = Post(sequelize, Sequelize.DataTypes)
const like = Like(sequelize, Sequelize.DataTypes)

const db = {
    user,
    post,
    like,
    sequelize
}

module.exports = db
