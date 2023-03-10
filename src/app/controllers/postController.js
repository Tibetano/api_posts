const router = require('express').Router()
const auth = require('../middlewares/auth')
const { post, like, comment, likeComment } = require('../models')

router.use(auth)

router.post('/', async (req, res) => {

    const postTemp = {
        user: req.userId,
        content: req.body.content,
        deletedAt: null
    }

    try {
        await post.create(postTemp)
        return res.status(200).json({ message: "Postagem criada com sucesso!" })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: "Erro na criação da postagem." })
    }

})

router.get('/', async (req, res) => {

    try {
        const posts = await post.findAll()
        if(!posts){
            return res.status(200).json({message: "Não existem comentários."})
        } else {
            return res.status(200).json({ posts })
        }
    } catch (error) {
        return res.status(400).json({ error: "Erro ao buscar postagens." })
    }

})


router.get('/:id', async (req, res) => {

    const {id} = req.params

    try {
        const postRes = await post.findByPk(id)
        if(!postRes){
            return res.status(200).json({message: "Postagem não encontrada!"})
        } else{
            return res.status(200).json({postRes})
        }
    } catch (error) {
        return res.status(400).json({ error: "Erro ao buscar postagem" })
    }

})


router.put('/', async (req, res) => {
    return res.status(200).json({ OK: true })
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params

    try {
        const postRes = await post.findByPk(id)
        if(!postRes){
            return res.status(200).json({message: "Postagem não encontrada!"})
        }
    } catch (error) {
        return res.status(400).json({ error: "Erro ao buscar postagem" })
    }

    try {
        post.destroy({
            where: {
                id: id
            }
        })
        return res.status(200).json({ message: "Postagem excluida com sucesso!" })
    } catch (error) {
        return res.status(200).json({ error: "Erro ao deletar postagem." })
    }

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
        return res.status(400).json({ error: "Erro na criação ao curtir postagem" })
    }
})

router.post('/lc', async (req, res) => {

    //adicionar as verificações

    const likeCommentTemp = {
        isLike: req.body.isLike,
        comment: req.body.comment,
        user: req.userId,
        deletedAt: null
    }

    try {
        const likeCommentRes = await likeComment.create(likeCommentTemp)
        return res.status(200).json(likeCommentRes)
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: "Erro na criação ao curtir commentário" })
    }
})


router.post('/c', async (req, res) => {


    //adicionar as verificações


    const commentTemp = {
        content: req.body.content,
        post: req.body.post,
        user: req.userId,
        deletedAt: null
    }

    try {
        const commentRes = await comment.create(commentTemp)
        return res.status(200).json(commentRes)
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: "Erro na criação do comentário da postagem" })
    }
})



module.exports = app => app.use('/posts', router)