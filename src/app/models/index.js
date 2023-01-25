//este index é responsável por carregar todos os modelos
const { Sequelize } = require('sequelize')
const sequelize = require('../../database')
const User = require('./User')
const Post = require('./Post')
const Like = require('./Like')
const Comment = require('./Comment')
const LikeComment = require('./LikeComment')


//ALTERAR TODOS OS NOMES DAS TABELAS E ADICIONAR O PREFIXO "tb_" EM TODAS PRA EVITAR CONFLITO DE NOMES ENTRE OS NOMES DAS TABELAS COM PALAVRAS RESERVADAS DO BD!!!
const user = User(sequelize, Sequelize.DataTypes)
const post = Post(sequelize, Sequelize.DataTypes)
const like = Like(sequelize, Sequelize.DataTypes)
const comment = Comment(sequelize, Sequelize.DataTypes)
const likeComment = LikeComment(sequelize, Sequelize.DataTypes)

const db = {
    user,
    post,
    like,
    comment,
    likeComment,
    sequelize
}

module.exports = db
