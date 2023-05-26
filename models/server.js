const express=require ('express');
const { dbConnection } =require('../dataBase/config')

class Server{
        constructor (){
        this.app=express()
        this.port=process.env.PORT  //capturando la variables del puerto
        this.ambientePath = '/api/ambientes'  // ruta publica
        this.routes();
        this.middlewares();//intermediario
        this.conectarDB();
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(express.static(__dirname + '/public'))
    }

    routes() {
       this.app.use(this.ambientePath,require('../routes/ambientes'))
    }
    conectarDB(){
        dbConnection()
    }
    
}

module.exports= Server
