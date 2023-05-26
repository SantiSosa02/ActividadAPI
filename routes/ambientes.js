const {Router} = require('express');

const route = Router();

const {ambienteGet, ambientePost, ambientePut, ambienteDelete} = require('../controllers/ambienteController');

route.get('/',ambienteGet)

route.post('/',ambientePost)

route.put('/',ambientePut)

route.delete('/',ambienteDelete)



module.exports=route;