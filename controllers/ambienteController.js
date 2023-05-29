const { response } = require('express')

const Ambiente = require('../models/ambienteModel')

const ambienteGet = async (req, res = response) => {
    const {numeroAmbiente} =req.query

    
    res.json({
        msg:'Ambiente encontrado satisfactoriamente',
        ambiente:numeroAmbiente
    })
}

const ambientePost = async (req, res = response) => {
    const { numeroAmbiente, temperatura, nombreUsuario } = req.query;
    const fechaNew = new Date();
    const ambientesNum = [701, 702, 703, 704, 705, 801, 802, 803, 804, 805];
  
    if (temperatura < -5 || temperatura > 50) {
      return res.status(500).json({
        msg: 'La temperatura debe estar entre -5 y 50'
      });
    } else {
      console.log('Temperatura agregada correctamente');
    }
  
    if (!ambientesNum.includes(parseInt(numeroAmbiente))) {
      return res.status(500).json({
        msg: 'El número de ambiente no es válido'
      });
    } else {
      console.log('Número de ambiente correcto');
    }
  
    try {
      const ambiente = new Ambiente({
        numeroAmbiente: numeroAmbiente,
        fecha: fechaNew,
        temperatura: temperatura,
        nombreUsuario: nombreUsuario
      });
  
      await ambiente.save();
  
      res.json({
        msg: 'La inserción se hizo correctamente'
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: 'Ocurrió un error al realizar la inserción del ambiente'
      });
    }
  };
  

const ambientePut = async (req, res = response) => {
    const { numeroAmbiente, } = req.query;
    const { nuevoAmbiente, temperatura, nombreUsuario } = req.query; // Campos a actualizar
  
    try {
      const ambienteActualizado = await Ambiente.findOneAndUpdate(
        { numeroAmbiente:numeroAmbiente },
        { numeroAmbiente:nuevoAmbiente, temperatura, nombreUsuario },
        { new: true }
      );
  
      if (!ambienteActualizado) {
        return res.status(404).json({
          msg: 'Ambiente no encontrado',
        });
      }
  
      res.json({
        msg: 'PUT API',
        usuario: ambienteActualizado,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: 'Error en el servidor',
      });
    }
  };

  const ambienteDelete = async (req, res = response) => {
    const { numeroAmbiente } = req.query;
    try {
      const result = await Ambiente.deleteOne({ numeroAmbiente });
  
      if (result.deletedCount === 0) {
        return res.json({
          msg: 'No se encontró ningún ambiente con el nombre proporcionado'
        });
      }
  
      res.json({
        msg: 'El ambiente ha sido eliminado correctamente'
      });
    } catch (error) {
      // Manejo de la excepción
      console.error(error);
      res.status(500).json({
        msg: 'Ocurrió un error al eliminar el ambiente'
      });
    }
  };

module.exports = {
    ambienteGet,
    ambientePost,
    ambientePut,
    ambienteDelete
}