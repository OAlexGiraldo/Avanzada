
//DECLARAR UN FUNCION QUE ME DETERMINE LA DISTANCIA ENTRE DOS PUNTOS

//Funcion flecha 
let calcularDistancia=(x1,y1,x2,y2)=> Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2))


/*function calcularDistancia(x1,y1,x2,y2){
    return (Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2)))
}*/

//LLAMANDO FUNCION

console.log("La distancia de la ruta N-14 al planeta NABBO es "+calcularDistancia(0,0,16,0))