const express = require('express')
require('dotenv').config()

const app =  express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({OK: true})
})

app.listen(process.env.HOST_PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.HOST_PORT}.`)
})