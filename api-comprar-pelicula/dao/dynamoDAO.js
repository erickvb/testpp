const AWS = require('aws-sdk');
const ESTADO_OPERACION = require('../common/ESTADO_OPERACION')
const dynamodb = new AWS.DynamoDB();
const TABLA_COMPRA ='api-comprar-dev';
var documentClient = new AWS.DynamoDB.DocumentClient();

module.exports = {

    registrarCompra: async function(item){
      console.log('input dao:',item);

      

       
        let result= await dynamodb.putItem({
            TableName: TABLA_COMPRA,
            Item: item
          }).promise();
          console.log("resultado reg comprar:",result);
          console.log("ESTADO_OPERACION.EXITO:"+ESTADO_OPERACION.EXITO);
          return ESTADO_OPERACION.EXITO;
    },
    listarCompras: async function(){
      let params = {
        TableName: TABLA_COMPRA,
        Select: 'ALL_ATTRIBUTES'
      };

    
      let result = await documentClient.scan(params).promise()
      console.log(result);
      return result;
    }
}