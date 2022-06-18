
const salariosYC = startuMetrics.map(colaborator => colaborator.salary)

const salariosSorted = salariosYC.sort((a,b) => a-b);
const salariosSortedForTopTen = salariosYC.sort((a,b) => a-b);

/* Saber si un numero es par o impar */
const esPar = (num) => {
    if (num % 2 === 0) {
        return true
    }else{
        return false
    }
}

/* Calcular mediana */
const calculaMediaAritmetica = (arr) =>{
    const sumaElementos = arr.reduce((valorAcumulado=0, nuevoElemento) => valorAcumulado+nuevoElemento)
    const promedioElementos = sumaElementos / arr.length
    return promedioElementos
}


const medianaSalarios = (lista) =>{
    const mitadLista = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const seleccionMitad1 = lista[mitadLista-1];
        const seleccionMitad2 = lista[mitadLista]
        const calcMediana = calculaMediaAritmetica([seleccionMitad1,seleccionMitad2]);

        return calcMediana

    }else{
        const seleccionMitad = lista[mitadLista];
        return seleccionMitad
    }
}

const medianaGeneral = medianaSalarios(salariosSorted);


/* Median Top 10 */
const spliceStart = (salariosSortedForTopTen.length * 90) / 100 //obtener 10%
const spliceCount = salariosSortedForTopTen.length - spliceStart

const salariosTop10 = salariosSortedForTopTen.slice(spliceStart,spliceStart+spliceCount)//Desde donde hasta donde spice(10,12)
console.log('Top',salariosTop10)
const medianaTopTen = medianaSalarios(salariosTop10)


console.log('Mediana Global',medianaSalarios(salariosSorted))
console.log('Mediana Top 10',medianaTopTen)
console.log(spliceStart,spliceCount)
console.log(salariosSorted)