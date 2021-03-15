const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//INSERE UMA LINHA
router.post('/', (req,res,next) => {
    mysql.getConnection(function (error, conn) {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            'INSERT INTO linha (nome) VALUES (?)',
            [req.body.nome],
            (error, resultado, field) => {
                conn.release();
                if(error){
                    return res.status(500).send({
                        error: error,
                        response: null
                    })
                }
                res.status(201).send({
                    response: 'Linha inserida com sucesso.',
                    idLinha: resultado.insertId
                });
            }
        );
    });
});

//RETORNA TODAS AS LINHAS
router.get('/', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            'SELECT * FROM linha;',
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(200).send({response: resultado});
            }
        );
    })
});

//RETORNA UMA LINHA
router.get('/:idLinha', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            'SELECT * FROM linha WHERE idLinha= ?;',
            [req.params.idLinha],
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(200).send({response: resultado});
            }
        );
    })
});


//ATUALIZA UMA LINHA
router.put('/', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            `UPDATE linha 
                SET nome = ?
             WHERE idLinha = ?`,
            [req.body.nome, req.body.idLinha],
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(202).send({response: 'Linha atualizada com sucesso'});
            }
        );
    })
});

//DELETA UMA LINHA
router.delete('/', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            `DELETE FROM linha WHERE idLinha = ?`,
            [req.body.idLinha],
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(202).send({response: 'Linha removida com sucesso'});
            }
        );
    })
});

module.exports = router;