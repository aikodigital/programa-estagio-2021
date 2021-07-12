const express = require('express')
const routes = express.Router()

routes.get('/',(req,res)=>{
    res.send('exibir conteudo aqui')
})
routes.post('/registrar',(req,res)=>{
    res.send('Cadastrar conteudo aqui')
})
routes.put('/atualizar',(req,res)=>{
    res.send('Atualizar aqui')
})
routes.delete('/remove',(req,res)=>{
    res.send('remover aqui')
})