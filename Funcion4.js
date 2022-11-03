function obtenerEnergias(listaEnergias){
    console.log(listaEnergias);
    var negativos = 0;
    
    for (var i = 0; i < listaEnergias.length; i++) {
        if (listaEnergias[i] < 0) {
            negativos = negativos + 1;
        }
    }
    
    console.log("Sables negativos: " + negativos);
}

obtenerEnergias([5,9,-7,4,-10,2,-1]);

