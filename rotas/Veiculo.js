const express = require('express')
const routes = express.Router()
const veiculoDB = require('../models/Veiculo')
//Rotas
    //Enviar todos os veiculos registrados
    routes.get('/',(req,res)=>{
        veiculoDB.findAll().then((veiculos)=>{
            res.send({veiculo:veiculos})
        })
    })

    //Achar e enviar 1 veiculo pelo id
    routes.get('/find/:id',(req,res)=>{
        veiculoDB.findOne({where:{id:req.params.id}}).then((veiculos)=>{
            res.send({veiculo:veiculos})
        })
    })

    //Cadastrar Nova Posição
    routes.post('/registrar',(req,res)=>{
        veiculoDB.create({
            nome: req.body.nome,
            modelo: req.body.modelo,
        }).then(()=>{
            res.send({message:'success'})
        }).catch((err)=>{
            res.send({message:'error'})
        })
    })

    //Editar
    routes.put('/atualizar/:id',(req,res)=>{
        if(req.body.modelo){
            if(req.body.nome){
                veiculoDB.update({
                    nome:req.body.nome,
                    modelo:req.body.modelo
                },{where:{
                    id: req.params.id
                }})
            }else{
                veiculoDB.update({
                    modelo:req.body.modelo
                },{where:{
                    id: req.params.id
                }})
            }
        }else{
            if(req.body.nome){
                console.log('entrou')
                veiculoDB.update({
                    nome: req.body.nome
                },{where:{
                    id: req.params.id
                }})
            }
        }
        setTimeout(()=>{
            veiculoDB.findOne({where:{id:req.params.id}}).then((veiculo)=>{
                res.send({veiculos:veiculo})
            })
        },100)

    })

    routes.delete('/remove/:id',(req,res)=>{
        veiculoDB.destroy({
            where:{
                id: req.params.id
            }
        }).then(()=>{
            setTimeout(()=>{
                veiculoDB.findAll().then((veiculo)=>{
                    res.send({veiculos:veiculo})
                })
            },100)
        }).catch((err)=>{
            res.send('falha ao remover, erro: '+err)
        })
    })

module.exports = routes