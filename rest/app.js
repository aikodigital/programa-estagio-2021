const express = require('express');
const app = express();
const morgan = require('morgan');

const rotaLinha = require('./routes/linha');
const rotaParada = require('./routes/parada');
const rotaPosicaoVeiculo = require('./routes/posicaoveiculo');
const rotaVeiculo = require('./routes/veiculo');

const rotaLinhaParada = require('./routes/linhaparada');
const rotaVeiculoLinha = require('./routes/veiculolinha');
const rotaParadasPosicao = require('./routes/paradasposicao');


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/linha', rotaLinha);
app.use('/parada', rotaParada);
app.use('/posicaoveiculo', rotaPosicaoVeiculo);
app.use('/veiculo', rotaVeiculo);

app.use('/linhaparada', rotaLinhaParada);
app.use('/veiculolinha', rotaVeiculoLinha);
app.use('/paradasposicao', rotaParadasPosicao);


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