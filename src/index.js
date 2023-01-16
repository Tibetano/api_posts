const express = require('express')
const { user, sequelize } = require('./app/models')
require('dotenv').config()

const app = express()

app.use(express.json())

sequelize.sync().then(() => {
    console.log("Banco de dados conectado com sucesso!")
})

require('./app/controllers/authController')(app)

app.get('/', (req, res) => {
    res.status(200).send("<h1>Bem vindo a api!</h1>")
})

app.listen(process.env.HOST_PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.HOST_PORT}.`)
})