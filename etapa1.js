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
     
     auto.vendido = true
   },
   autosParaLaVenta: function(){ resultadoV = this.autos.filter((check) => { return check.vendido == false})
   return resultadoV
   },
   
   autosNuevos: function(){ resultadoN = this.autosParaLaVenta().filter((checks) => {return checks.km <100 })
   return resultadoN
   },
        
   listaDeVentas: function(){ resultadoVent = this.autos.filter((check) => { return check.vendido == true})
    const lDv = resultadoVent.map(function(valor){
       return valor.precio
    });
    return lDv

},
totalDeVentas: function(){ suma = [0]
  for ( let i = 0 ; i < this.listaDeVentas().length; i++){
    suma.push(this.listaDeVentas()[i])}

   totalVent = suma.reduce(function(acum,num){
   return acum + num });
   
   return totalVent
}, 

  puedeComprar: function (auto,persona){
    let cuenta = auto.precio / auto.cuotas
    if ((auto.precio <= persona.capacidadDePagoTotal) && (cuenta <= persona.capacidadDePagoEnCuotas)){
return true
    }
    else return false
          
    
    },

   autosQuePuedeComprar: function(persona){
      busquedaA = this.autosParaLaVenta().filter((check) => { return check.precio <= persona.capacidadDePagoTotal && check.precio / check.cuotas <= persona.capacidadDePagoEnCuotas}); return busquedaA
   }
   
}