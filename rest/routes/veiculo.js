const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//INSERE UM VEÍCULO
router.post('/', (req,res,next) => {
    mysql.getConnection(function (error, conn) {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            'INSERT INTO veiculo (nome, modelo, idLinha) VALUES (?,?,?)',
            [req.body.nome, req.body.modelo, req.body.idLinha],
            (error, resultado, field) => {
                conn.release();
                if(error){
                    return res.status(500).send({
                        error: error,
                        response: null
                    })
                }
                res.status(201).send({
                    response: 'Veículo inserido com sucesso.'
                });
            }
        );
    });
});

//RETORNA TODOS OS VEÍCULOS
router.get('/', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            'SELECT * FROM veiculo;',
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(200).send({response: resultado});
            }
        );
    })
});

//RETORNA UM VEÍCULO
router.get('/:idVeiculo', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            'SELECT * FROM linha WHERE idVeiculo= ?;',
            [req.params.idVeiculo],
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(200).send({response: resultado});
            }
        );
    })
});


//ATUALIZA UM VEÍCULO
router.put('/', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            `UPDATE veiculo 
                SET nome = ?,
                    modelo = ?,
                    idLinha = ?
             WHERE idVeiculo = ?`,
            [req.body.nome, req.body.modelo, req.body.idLinha, req.body.idVeiculo],
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(202).send({response: 'Veículo atualizado com sucesso'});
            }
        );
    })
});

//DELETA UM VEÍCULO
router.delete('/', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            `DELETE FROM veiculo WHERE idVeiculo = ?`,
            [req.body.idVeiculo],
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(202).send({response: 'Veículo removido com sucesso'});
            }
        );
    })
});

module.exports = router;