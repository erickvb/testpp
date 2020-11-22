'use strict';
const  dynamoDAO = require('../dao/dynamoDAO')
const swapiService = require('./swapiService')
const ESTADO_OPERACION = require('../common/ESTADO_OPERACION')
const util = require('../common/util')
const AWS = require("aws-sdk");

module.exports = {

    registrarCompra:  async function(item){
        /*obtiene la pelicula del swapi filtrado por id*/
        let peliculaFind = await this._obtenerPeliculaXId(item.codigoPelicula);
        console.log("pelicula encontrado:", peliculaFind);
        if(peliculaFind==null){

            return {estado:ESTADO_OPERACION.NO_EXISTE,
                     mensaje:"No existe la pelicula con el codigo:"+item.codigoPelicula};
        }

        /*ramdom precio*/
        let precio = util.ramdomNumero(20,30);

        /*parsea para momgo db*/
        let itemReg = {
               
            id_transaccion: { S: String(item.id_transaccion) },
            fecha_creacion: { N: String(Date.now()) } ,
            cantidad: {N:String(item.cantidad)} ,
            precio:{N:String(precio)},
            estado: {N:String(1)},
            cliente: { S: JSON.stringify(item.cliente)},
            pelicula:{ S: JSON.stringify(peliculaFind)}
          };
       let rsReg=  await dynamoDAO.registrarCompra(itemReg);

       let resultado;
       
       if(rsReg==ESTADO_OPERACION.EXITO){
          resultado ={
            estado:rsReg,
            mensaje:'La operacion se realizo satisfactoriamente',
            id_transaccion:item.id_transaccion
          }
        }else{
            resultado ={
                'estado':ESTADO_OPERACION.ERROR,
                'mensaje':'No se pudo realizar la operacion'
            }
        }
        return resultado;

    },

    _obtenerPeliculaXId : async function(id){
       let res = await swapiService.obtenerDetalle('films',id);
       if(null!==res){

        return {"id":id,"titulo":res.title,"id_episodio":res.episode_id,"url":res.url}

       }else{
           return null;
       }

    },

    listarCompras: async function(){

        let res =  await dynamoDAO.listarCompras();
        /*parsear la salida*/
        
        var formattedObjects = res.Items.map(function(compra) {
            return {
                "id_transaccion": compra.id_transaccion,
                "precio": compra.precio,
                "estado": compra.estado,
                "cantidad": compra.cantidad,
                "cliente": JSON.parse(compra.cliente),
                "pelicula":JSON.parse(compra.pelicula),
                "fecha_creacion":compra.fecha_creacion
                
            };
        });
        return formattedObjects;
    }

}