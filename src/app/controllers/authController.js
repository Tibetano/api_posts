const router = require('express').Router()
const {user} = require('../models')

router.post('/register', async (req, res) => {
    try {
        const userTemp = { firstName, lastName, email, password } = req.body
        const userRes = await user.create(userTemp)
        res.status(200).json(userRes)
    } catch (error) {
        console.log(error)
        res.status(400).json("Erro no cadastro do usuario!")
    }
})


module.exports = app => app.use('/auth', router)
