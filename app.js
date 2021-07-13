const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const posicoesVeiculos = require('./rotas/PosicaoVeiculo')
const veiculos = require('./rotas/Veiculo')

//Configurações
    //bodyParser
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())

//Listando rotas
app.use('/vehicle-position',posicoesVeiculos)
app.use('/veiculos',veiculos)

//Colocando server no ar
app.listen(PORT,()=>{
    console.log('Servidor no ar')
})


