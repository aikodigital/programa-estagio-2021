const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste_estagio','root','',{
    host:'localhost',
    dialect:'mysql'
})


sequelize.authenticate().then(()=>{
    console.log('conectado com sucesso ao database!')
}).catch((err)=>{
    console.log('falha ao conectar o database: '+err)
})
module.exports = {sequelize,Sequelize}