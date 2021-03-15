const express = require('express');
const app = express();
const morgan = require('morgan');

const rotaProdutos = require('./routes/linha');



app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/produtos', rotaProdutos);

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