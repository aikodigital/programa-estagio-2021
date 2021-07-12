const express = require('express')
const app = express()
const PORT = 3000
const vehiclePositionRoutes = require('./rotas/vehiclePosition')

//Listando rotas
app.use('/vehicle-position',vehiclePositionRoutes)

//Colocando server no ar
app.listen(PORT,()=>{
    console.log('Servidor no ar')
})


