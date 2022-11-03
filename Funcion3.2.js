let promedio = (temperaturas) => {

    let tempMaxima = Math.max(...temperaturas);
    let tempMinima = Math.min(...temperaturas);


    let promedio = (tempMaxima + tempMinima) / 2;

   
    console.log("La tempertura promedio fue de: " + promedio);

}

promedio(temperaturas = [17, 35, 26, 65]);