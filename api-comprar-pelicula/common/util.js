'use strict';
module.exports = {
    obtenerTipoEntidad: function(key) {
        console.log("util validando entidad:"+key);
        let tipo = [
            { codigo: 'people', uri: 'https://swapi.py4e.com/api/people/' },
            { codigo: 'planets', uri: 'https://swapi.py4e.com/api/planets/' },
            { codigo: 'films',   uri: 'https://swapi.py4e.com/api/films/' },
            { codigo: 'species', uri: 'https://swapi.py4e.com/api/species/' },
            { codigo: 'vehicles', uri: 'https://swapi.py4e.com/api/vehicles/'},
            { codigo: 'starships', uri: 'https://swapi.py4e.com/api/starships/'}
        ]

       
        for (var i =0;i< tipo.length; i++) {
            if (tipo[i].codigo == key) {
                return tipo[i];
            }
        }
        return null;
    },
    obtenerTipoConsulta : function(key){
        console.log("util validando key:"+key);
        let tipo = [
            {'codigo':'busqueda'},
            {'codigo':'listarTodos'},
            {'codigo':'detalle'}
        ];
        for (var i =0;i< tipo.length; i++) {
            if (tipo[i].codigo == key) {
                return tipo[i];
            }
        }
        return null;
    },

    ramdomNumero:function (min, max) {  
        return Math.floor(
          Math.random() * (max - min) + min
        )
      }
   
    
    
    
}