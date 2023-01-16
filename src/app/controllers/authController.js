const router = require('express').Router()
const { user } = require('../models')
const bcrypt = require('bcryptjs')

router.post('/register', async (req, res) => {
    try {
        const userTemp = { firstName, lastName, email, password } = req.body
        const salt = await bcrypt.genSalt(10)
        userTemp.password = await bcrypt.hash(userTemp.password, salt)
        const userRes = await user.create(userTemp)
        userRes.password = undefined
        res.status(200).json(userRes)
    } catch (error) {
        //console.log(error)
        res.status(400).json("Erro no cadastro do usuario!")
    }
})


module.exports = app => app.use('/auth', router)
