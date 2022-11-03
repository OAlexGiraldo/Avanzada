//DECLARANDO LA FUNCION
/*function obtenerNombre(codigo){
    let resultado= codigo.split(":")[1]+codigo.split(":")[0]

    return resultado
}

//LLAMADO A LA FUNCION
let resultado=obtenerNombre("1000757848:ALEXANDER GIRALDO")
console.log(resultado)*/

//funcion flecha

let obtenerNombre = codigo=>codigo.split(":")[1]+codigo.split(":")[0] 

let resultado=obtenerNombre("1000757848:ALEXANDER GIRALDO")
console.log(resultado)