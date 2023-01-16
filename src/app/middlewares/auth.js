const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) => {
    
    const authHeader = req.headers.authorization
    
    if(!authHeader){
        return res.status(400).json({error: "token não informado"})
    }
    
    const parts = authHeader.split(" ")
    
    if(!parts.length == 2){
        return res.status(400).json({error: "token inválido!"})
    }
    
    const [scheme, token] = parts
    
    if(!/Bearer/i.test('Bearer')){
        return res.status(400).json({error: "token mau formatado!"})
    }
    
    jwt.verify(token, process.env.HASH, (err, decoded) => {
        if(err){
            return res.status(401).json({error: "Token inválido"})
        }

        console.log(decoded)

        req.userId = decoded.id

        return next()
    })

}