const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//MÉTODO
//RETORNA AS LINHAS A PARTIR DE UMA PARADA
router.get('/:idParada', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            'SELECT * FROM linha_has_parada WHERE idParada= ?;',
            [req.params.idParada],
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(200).send({response: resultado});
            }
        );
    })
});

module.exports = router;