const autos = require("./autos");



const concesionaria = {
    autos : autos,
    buscarAuto : function (pate){
      for ( let i = 0 ; i < this.autos.length; i++){
          
         if (this.autos[i].patente == pate) {
          return this.autos[i];
        }
      }
      return null;
    },
     venderAuto : function (pat){
       const auto = this.buscarAuto(pat)
       if (auto == true )
       auto.vendido = true
     },
     autosNuevos: function(){
        let autosN = []
        const resul = this.autosParaLaVenta()
        for ( let i = 0 ; i < resul; i++){
          if (resul[i].km <= 100 && resul[i].vendido == false){
          autosN = resul[i]  }
        }
  return autosN

}}
console.log(concesionaria.autosNuevos())

     
