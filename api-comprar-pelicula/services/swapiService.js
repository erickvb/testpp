'use strict';

const fetch = require('node-fetch');
const util =  require('../common/util');

module.exports = {
   
    obtenerDetalle: async function(entidad, id) {
        let url = util.obtenerTipoEntidad(entidad).uri;
        url =`${url}${id}`;
        console.log("Uri get:"+url);
        try {
            console.log(url);
            let response = await fetch(url);

            if(response.status ==200){
                return await response.json();
            }
            else{
                return null; 
            } 
                
            
           
        
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }        
    },

    buscarEntiddad :  async function(entidad, busqueda) {
        
        let url = `https://swapi.py4e.com/api/${entidad}/?search=${busqueda}`;
        try {
            console.log(url);
            let resp = await fetch(url);

            if(resp.status !==200)
                return [];
            else 
                resp = await resp.json();
            
            return Promise.resolve([resp]);
        
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }        
    },

}
