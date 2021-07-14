const express = require('express')
const routes = express.Router()
const paradaDB = require('../models/Parada')

//Rotas
    //Enviar todas as paradas registradas
    routes.get('/',(req,res)=>{
        paradaDB.findAll().then((paradas)=>{
            res.send({paradas:paradas})
        })
    })
    
    //Achar e enviar 1 veiculo pelo id
    routes.get('/find/:id',(req,res)=>{
        paradaDB.findOne({where:{id:req.params.id}}).then((paradas)=>{
            res.send({paradas:paradas})
        })
    })

    //Cadastrar Nova Posição
    routes.post('/registrar',(req,res)=>{
        paradaDB.create({
            name: req.body.nome,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        }).then(()=>{
            res.send({message:'success'})
        }).catch((err)=>{
            res.send({message: 'error'})
        })
    })

    //Editar
    routes.put('/atualizar/:id',(req,res)=>{
        if(req.body.latitude){
            if(req.body.longitude){
                if(req.body.nome){
                    paradaDB.update({
                        latitude:req.body.latitude,
                        longitude:req.body.longitude,
                        name:req.body.nome
                    },{where:{
                        id: req.params.id
                    }})
                }else{
                    paradaDB.update({
                        latitude:req.body.latitude,
                        longitude:req.body.longitude
                    },{where:{
                        id: req.params.id
                    }})
                }
            }else{
                paradaDB.update({
                    latitude:req.body.latitude
                },{where:{
                    id: req.params.id
                }})
            }
        }else{
            if(req.body.longitude){
                if(req.body.nome){
                    paradaDB.update({
                        longitude:req.body.longitude,
                        name:req.body.nome
                    },{where:{
                        id: req.params.id
                    }})
                }else{
                    paradaDB.update({
                        longitude:req.body.longitude
                    },{where:{
                        id: req.params.id
                    }})
                }
            }else{
                if(req.body.nome){
                    console.log('entrou')
                    paradaDB.update({
                        name: req.body.nome
                    },{where:{
                        id: req.params.id
                    }})
                }
            }
        }
        setTimeout(()=>{
            paradaDB.findOne({where:{id:req.params.id}}).then((parada)=>{
                res.send({parada:parada})
            })
        },100)

    })

    //Deletar Posição
    routes.delete('/remove/:id',(req,res)=>{
        paradaDB.destroy({
            where:{
                id: req.params.id
            }
        }).then(()=>{
            res.send({message:'success'})
        }).catch((err)=>{
            res.send({message:'error'})
        })
    })
    
module.exports = routes