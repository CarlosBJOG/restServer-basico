const express = require('express');
const cors = require('cors');

class Server {

    constructor(  ) {
        this.app  = express();
        this.port = process.env.PORT;

        //rutas
        this.usuariosPath = '/api/usuarios';

        //MIDDLEWARES
        this.middlewares();

        //RUTAS DE MI APP

        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use( cors() ); //para evitar y limitar los endpoints de nuestra app como ciertas paginas puedan tener acceso a nuestro rest server

        //LECTURA Y PARSEO
        this.app.use( express.json() );

        //directorio publico
        this.app.use( express.static('public') );
        

    }

    //metodo para llamar rutas
    routes() {
         
       this.app.use(this.usuariosPath, require('../routes/user.routes') );

    }

    //metodo donde esta escuchando el server
    listen() {

        this.app.listen( this.port , () => {       
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;