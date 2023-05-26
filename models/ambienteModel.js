const {Schema, model} = require ('mongoose');

const AmbienteSchema= new Schema({
    numeroAmbiente:{
        type:Number,
        required: [true,'El campo es requerido']
    },
    fecha:{
        type:Date,
        required:[true,'La fecha  es requerida']
    },
    temperatura:{
        type:Number,
        required:[true,'La temperatura es requerida']
    },
    nombreUsuario:{
        type:String,
        required:[true,'El nombre de usuario es obligatorio'],

    }

})
module.exports = model('Ambiente',AmbienteSchema);

