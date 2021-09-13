require('dotenv').config();

//instancia de servidor
const Server = require('./models/server');


const server = new Server();

server.listen();


 
