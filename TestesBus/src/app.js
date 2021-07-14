const express = require('express');
const routes = require('./routes');
const cors = require('cors');
require('./database/index');

//classe para trabalhar uma instancia do server
class App {
    constructor(){
        this.server = express();
        this.middlewares()
        this.routes()
    }

    //Onde será configurado nossas rotas
    routes(){
        this.server.use(routes)
    }

    middlewares(){
        this.server.use(cors())
        this.server.use(express.json())
    }
}

module.exports = new App().server;