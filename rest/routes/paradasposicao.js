const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//MÉTODO
//RETORNA AS PARADAS MAIS PRÓXIMAS DADA UMA LATITUDE E LONGITUDE
router.get('/', (req,res,next) => {
    mysql.getConnection((error,conn) => {
        if(error){ return res.status(500).send({error:error})}
        conn.query(
            `SELECT *, calculaDistancia(?,?,pr.latitude, pr.longitude) as distancia
                FROM parada pr
            ORDER BY distancia;`,
            [req.body.latitude, req.body.longitude],
            (error, resultado, fields) => {
                if(error){ return res.status(500).send({error:error})}
                return res.status(200).send({response: resultado});
            }
        );
    })
});

module.exports = router;