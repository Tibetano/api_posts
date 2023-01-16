const router = require('express').Router()
const auth = require('../middlewares/auth')

router.use(auth)

router.post('/', async (req, res) => {
    return res.send("Objeto criado!")
})

module.exports = app => app.use('/posts', router)