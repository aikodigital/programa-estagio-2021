const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const posicoesVeiculos = require('./rotas/PosicaoVeiculo')
const veiculos = require('./rotas/Veiculo')
const paradas = require('./rotas/Parada')

//Configurações
    //bodyParser
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())

//Listando rotas
app.use('/vehicle-position',posicoesVeiculos)
app.use('/veiculos',veiculos)
app.use('/parada',paradas)

//Colocando server no ar
app.listen(PORT,()=>{
    console.log('Servidor no ar')
})


