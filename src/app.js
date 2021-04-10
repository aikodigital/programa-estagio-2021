const app=require("express")()

const {sequelize} =require("./database/connection")
sequelize.authenticate().then(isso=>{console.log('connected to database!!!');sequelize.sync();}).catch(error=>console.log(error))
const relations = require("./database/relations")

app.use("/linha",require("./routes/linha"))
app.use("/linha",require("./routes/parada"))
app.use("/linha",require("./routes/veiculo"))
app.use("/linha",require("./routes/posicao"))

module.exports=app