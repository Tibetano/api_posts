const express = require('express')
const { user, post, sequelize } = require('./app/models')
require('dotenv').config()

const app = express()

app.use(express.json())

sequelize.sync().then(() => {
    console.log("Banco de dados conectado com sucesso!")
})

require('./app/controllers/authController')(app)
require('./app/controllers/postController')(app)

app.get('/', async (req, res) => {

    try {
        const resp = await post.findAll()
        return res.status(200).json({resp})
    } catch (error) {
        return res.status(400).json({error: error})
    }

})

app.listen(process.env.HOST_PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.HOST_PORT}.`)
})