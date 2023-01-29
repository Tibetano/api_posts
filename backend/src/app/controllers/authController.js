const router = require('express').Router()
const { user } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

function generateToken(params = {}) {
    return jwt.sign(params, process.env.HASH, { expiresIn: 60 * 30 })
}

router.post('/register', async (req, res) => {
    try {
        const userTemp = { firstName, lastName, email, password } = req.body
        const salt = await bcrypt.genSalt(10)
        userTemp.password = await bcrypt.hash(userTemp.password, salt)
        const userRes = await user.create(userTemp)
        userRes.password = undefined
        return res.status(200).json({ userRes, token: generateToken({ id: userRes.id }) })
    } catch (error) {
        return res.status(400).json({error: "Erro ao cadastrar usuario!"})
    }
})

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body

    const userTemp = await user.findAll({
        where: {
            email: email
        }
    })

    if (!userTemp) {
        return res.status(400).json({error: "Usuario não encontrado!"})
    }

    if (await bcrypt.compare(password, userTemp[0].password)) {
        userTemp[0].password = undefined
        return res.status(200).json({ userTemp, token: generateToken({ id: userTemp[0].id }) })
    }
    
    return res.status(400).json({error: "Erro na autenticação!"})
})

module.exports = app => app.use('/auth', router)
