const router = require('express').Router()
const auth = require('../middlewares/auth')
const { post } = require('../models')

router.use(auth)

router.post('/', async (req, res) => {

    const postTemp = {
        user: req.userId, 
        content: req.body.content,
        deletedAt: null
    }
    
    try {
        const postRes = await post.create(postTemp)
        return res.status(200).json(postRes)
    } catch (error) {
        console.log(error)
        return res.status(200).json({erro: "erro na criação da postagem"})
    }
    
})

router.get('/', async (req, res) => {
    return res.status(200).json({OK: true})
})


router.get('/:id', async (req, res) => {
    return res.status(200).json({OK: true})
})


router.put('/', async (req, res) => {
    return res.status(200).json({OK: true})
})

router.delete('/', async (req, res) => {
    return res.status(200).json({OK: true})
})

module.exports = app => app.use('/posts', router)