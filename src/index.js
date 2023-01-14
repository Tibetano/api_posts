const express = require('express')
require('dotenv').config()

const app =  express()

app.use(express.json())

require('./app/controllers/authController')(app)


app.get('/', (req, res) => {
    res.status(200).send("<h1>Bem vindo a api!</h1>")
})

app.listen(process.env.HOST_PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.HOST_PORT}.`)
})