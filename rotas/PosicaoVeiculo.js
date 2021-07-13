const express = require('express')
const routes = express.Router()
const PosicaoVeiculoDB = require('../models/PosicaoVeiculo')


//Rotas
    //Enviar Posições cadastradas
    routes.get('/',(req,res)=>{
        PosicaoVeiculoDB.findAll().then((posicoes)=>{
            res.send({Posicao_Veiculo:posicoes})
        })
    })

    //Achar apenas uma posição
    routes.get('/find/:id',(req,res)=>{
        PosicaoVeiculoDB.findOne({where:{id:req.params.id}}).then((posicao)=>{
            res.send({Posicao_Veiculo:posicao})
        })
    })

    //Cadastrar Nova Posição
    routes.post('/registrar',(req,res)=>{
        PosicaoVeiculoDB.create({
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            VeiculoId: req.body.veiculoID
        }).then(()=>{
            res.send('Cadastrado com sucesso')
        }).catch((err)=>{
            res.send('Erro ao cadastrar '+err)
        })
    })

    //Editar Posição
    routes.put('/atualizar/:id',(req,res)=>{
        if(req.body.latitude){
            if(req.body.longitude){
                if(req.body.veiculoID){
                    PosicaoVeiculoDB.update({
                        latitude:req.body.latitude,
                        longitude:req.body.longitude,
                        VeiculoId:req.body.veiculoID
                    },{where:{
                        id: req.params.id
                    }})
                }else{
                    PosicaoVeiculoDB.update({
                        latitude:req.body.latitude,
                        longitude:req.body.longitude
                    },{where:{
                        id: req.params.id
                    }})
                }
            }else{
                PosicaoVeiculoDB.update({
                    latitude:req.body.latitude
                },{where:{
                    id: req.params.id
                }})
            }
        }else{
            if(req.body.longitude){
                if(req.body.veiculoID){
                    PosicaoVeiculoDB.update({
                        longitude:req.body.longitude,
                        VeiculoId:req.body.veiculoID
                    },{where:{
                        id: req.params.id
                    }})
                }else{
                    PosicaoVeiculoDB.update({
                        longitude:req.body.longitude
                    },{where:{
                        id: req.params.id
                    }})
                }
            }else{
                if(req.body.veiculoID){
                    console.log('entrou')
                    PosicaoVeiculoDB.update({
                        VeiculoId: req.body.veiculoID
                    },{where:{
                        id: req.params.id
                    }})
                }
            }
        }
        setTimeout(()=>{
            PosicaoVeiculoDB.findOne({where:{id:req.params.id}}).then((posicao)=>{
                res.send({Posicao_Veiculo:posicao})
            })
        },100)

    })

    //Deletar Posição
    routes.delete('/remove/:id',(req,res)=>{
        PosicaoVeiculoDB.destroy({
            where:{
                id: req.params.id
            }
        }).then(()=>{
            res.send('removido com sucesso')
        }).catch((err)=>{
            res.send('falha ao remover, erro: '+err)
        })
    })

module.exports = routes