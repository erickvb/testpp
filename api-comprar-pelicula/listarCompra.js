const compraController = require('./controller/compraController')
const ESTADO_OPERACION = require('./common/ESTADO_OPERACION')

 
exports.listar =  async function(event, context, callback) {
  const { body } = event;
  console.log("recive data:",body);
  let response;
  try {
    

     let resService =await  compraController.listarCompras();
      console.log("resultado final listar:",resService);
      response = {
        statusCode: 200,
        body: JSON.stringify(resService)
     }
     return callback(null,response);
   
  } catch (err) {
        console.log("exception ocurrido",err)
        response= {
            statusCode: 500,
             body: 
                JSON.stringify({estado:ESTADO_OPERACION.EXCEPTION ,
                    mensaje:'Ocurrio un error al procesar el registro '}),
        }
       
  }
  return callback(null,response);
};