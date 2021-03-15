const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//INSERE UMA PARADA
router.post('/', (req,res,next) => {
    mysql.getConnection(function (error, conn) {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            'INSERT INTO parada (nome, latitude, longitude) VALUES (?,?,?)',
            [req.body.nome, req.body.latitude, req.body.longitude],
            (error, resultado, field) => {
                conn.release();
                if(error){
                    return res.status(500).send({
                        error: error,
                        response: null
                    })
                }
                res.status(201).send({
                    response: 'Parada inserida com sucesso.'
                });
            }
        );
    });
});

//RETORNA TODAS AS PARADAS
router.get('/', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            'SELECT * FROM parada;',
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(200).send({response: resultado});
            }
        );
    })
});

//RETORNA UMA PARADA
router.get('/:idParada', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            'SELECT * FROM parada WHERE idParada= ?;',
            [req.params.idParada],
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(200).send({response: resultado});
            }
        );
    })
});


//ATUALIZA UMA PARADA
router.put('/', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            `UPDATE parada 
                SET nome = ?,
                    latitude = ?,
                    longitude = ?
             WHERE idLParada = ?`,
            [req.body.nome, req.body.latitude, req.body.longitude, req.body.idParada],
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(202).send({response: 'Parada atualizada com sucesso'});
            }
        );
    })
});

//DELETA UMA PARADA
router.delete('/', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            `DELETE FROM parada WHERE idParada = ?`,
            [req.body.idParada],
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(202).send({response: 'Parada removida com sucesso'});
            }
        );
    })
});

module.exports = router;