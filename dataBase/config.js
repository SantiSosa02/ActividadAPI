const mongoose = require('mongoose');

const dbConnection = () =>{
    try{
        mongoose.connect(process.env.MONGO_CNN)
        console.log('La conexion se realizo exitosamente')
    }
    catch(error){
        throw error('Error conectando a la base de datos')
    }
}
mongoose.set('strictQuery', false);
module.exports= {dbConnection};