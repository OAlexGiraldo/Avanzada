let salarioMensual = (licenciasVendidas = 0) => {
    const salario = (3500000 + 1500000*licenciasVendidas)*0.95
    console.log(salario)
    return salario
 }
 
 console.log("el salario mesual sin licencia vendedidas es "+salarioMensual())
 console.log("el salario mesual con licencias es  "+salarioMensual(2))