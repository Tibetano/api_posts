const router = require('express').Router()


router.post('/register', async (req, res) => {
    return res.status(200).json({message: "OK!"})
})







module.exports = app => app.use('/auth', router)
