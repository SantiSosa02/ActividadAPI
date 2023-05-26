require('dotenv').config();
const Server =require('./models/server')
const { dbConnection } = require('./dataBase/config');

const server = new Server() //importamos el objeto

server.listen()