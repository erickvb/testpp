const compraController = require('./controller/compraController')
const ESTADO_OPERACION = require('./common/ESTADO_OPERACION')

 
exports.comprar =  async function(event, context, callback) {
  const { body } = event;
  console.log("recive data:",body);
  let response;
  try {
    const { cliente, codigoPelicula, cantidad } = JSON.parse(body);

    if (!cliente || !codigoPelicula || !cantidad ) {
      return {
        statusCode: 403,
        body: 'datos cliente codigoPelicula y cantidad son requeridos!'
      }
    }

     let resService =await  compraController.registrarCompra( JSON.parse(body));
      console.log("resultado final registro:",resService);
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