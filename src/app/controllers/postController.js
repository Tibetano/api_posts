const router = require('express').Router()
const auth = require('../middlewares/auth')
const { post, like } = require('../models')

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
        return res.status(400).json({error: "Erro na criação da postagem"})
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

router.post('/l', async (req, res) => {


    //adicionar as verificações


    const likeTemp = {
        isLike: req.body.isLike, 
        post: req.body.post,
        user: req.userId,
        deletedAt: null
    }
    
    try {
        const likeRes = await like.create(likeTemp)
        return res.status(200).json(likeRes)
    } catch (error) {
        console.log(error)
        return res.status(400).json({error: "Erro na criação ao curtir postagem"})
    }
})

module.exports = app => app.use('/posts', router)