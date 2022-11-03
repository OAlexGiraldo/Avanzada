function datos(nombre,planeta,edad,estatura){
    
     let padaw={'nombre':nombre,'Planeta':planeta,'edad':edad,'estatura':estatura}
     return padaw
}

function actividad(padaw){
    
    if(padaw.edad>=15){
        console.log("Manejo de la fuerza")
    }else{
        console.log("manejo sable de luz")
    }
}
let objetopadaw=datos('juan','nabbo',21,25.4)
console.log(objetopadaw)
actividad(objetopadaw)