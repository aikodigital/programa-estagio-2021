const app=require("express")()

app.use("/linha",require("./routes/linha"))
app.use("/linha",require("./routes/parada"))
app.use("/linha",require("./routes/veiculo"))
app.use("/linha",require("./routes/posicao"))

module.exports=app