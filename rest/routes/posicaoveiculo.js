const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//INSERE UMA POSIÇÃO VEÍCULO
router.post('/', (req,res,next) => {
    mysql.getConnection(function (error, conn) {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            'INSERT INTO posicaoveiculo (latitude, longitude) VALUES (?,?)',
            [req.body.latitude, req.body.longitude],
            (error, resultado, field) => {
                conn.release();
                if(error){
                    return res.status(500).send({
                        error: error,
                        response: null
                    })
                }
                res.status(201).send({
                    response: 'Posição veículo inserida com sucesso.'
                });
            }
        );
    });
});

//RETORNA TODAS AS POSIÇÕES VEÍCULO
router.get('/', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            'SELECT * FROM posicaoveiculo;',
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(200).send({response: resultado});
            }
        );
    })
});

//RETORNA A POSIÇÃO DE UM VEÍCULO
router.get('/:idVeiculo', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            'SELECT * FROM posicaoveiculo WHERE idVeiculo= ?;',
            [req.params.idVeiculo],
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(200).send({response: resultado});
            }
        );
    })
});


//ATUALIZA UMA POSIÇÃO VEÍCULO
router.put('/', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            `UPDATE posicaoveiculo 
                SET latitude = ?,
                    longitude = ?
             WHERE idVeiculo = ?`,
            [req.body.latitude, req.body.longitude, req.body.idVeiculo],
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(202).send({response: 'Posição veículo atualizada com sucesso'});
            }
        );
    })
});

//DELETA UMA POSIÇÃO VEÍCULO
router.delete('/', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            `DELETE FROM posicaoveiculo WHERE idVeiculo = ?`,
            [req.body.idVeiculo],
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(202).send({response: 'Posição veículo removida com sucesso'});
            }
        );
    })
});

module.exports = router;