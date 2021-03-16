const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//MÉTODO
//RETORNA OS VEÍCULOS PERTENCENTE A UMA LINHA
router.get('/:idLinha', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            'SELECT * FROM veiculo WHERE idLinha= ?;',
            [req.params.idLinha],
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(200).send({response: resultado});
            }
        );
    })
});

module.exports = router;