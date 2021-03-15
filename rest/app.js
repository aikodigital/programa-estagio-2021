const express = require('express');
const app = express();
const morgan = require('morgan');

const rotaLinha = require('./routes/linha');
const rotaLinhaParada = require('./routes/linha_has_parada');
const rotaParada = require('./routes/parada');
const rotaPosicaoVeiculo = require('./routes/posicaoveiculo');
const rotaVeiculo = require('./routes/veiculo');


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/linha', rotaLinha);
app.use('/linhaparada', rotaLinhaParada);
app.use('/parada', rotaParada);
app.use('/posicaoveiculo', rotaPosicaoVeiculo);
app.use('/veiculo', rotaVeiculo);


app.use((req,res,next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});


app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro : {
            response: error.message
        }
    });
});


module.exports = app;