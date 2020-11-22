'use strict';
const compraService = require('../services/compraService')
const uuid = require('uuid')
const util = require('../common/util')
const ESTADO_OPERACION = require('../common/ESTADO_OPERACION')
module.exports = {
    registrarCompra: async function(data) {
        
        try {
           let item= {
                id_transaccion: uuid.v1(),
                fecha_creacion:String(Date.now()),
                cantidad: data.cantidad,
                precio: 12.5,
                estado:1,
                cliente: data.cliente,
                codigoPelicula:data.codigoPelicula

           }

          let resultado =  await compraService.registrarCompra(item);
           
           console.log("output compra controlle:",resultado);
           return resultado;

        } catch (error) {
            console.log("errro registrar venta:",error);
            return  {
                'estado':ESTADO_OPERACION.EXCEPTION,
                'mensaje':'Ocurrion un error al procesar la operacion'
            }           
        }

    },
    
    listarCompras : async function(){
        return await compraService.listarCompras();
    },

    validarTest : function(){
        return true;
    }
}