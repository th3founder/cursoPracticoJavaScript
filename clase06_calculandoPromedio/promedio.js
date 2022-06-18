const list1 = [100,200,300,500];
const list2 = [10,20,30,50];
const list3 = [5,5,5,5,5];

//se crea un


const calculaMediaAritmetica = (arr) =>{
    /* let sumaElementos = 0;
    for (let index = 0; index < arr.length; index++) {
        sumaElementos = sumaElementos + arr[index]
        
    } */
    const sumaElementos = arr.reduce((valorAcumulado=0, nuevoElemento) => valorAcumulado+nuevoElemento)
    /* .reduce(actualAcumulado, nuevoElemento =>  actualAcumulado+nuevoElemento) */
    const promedioElementos = sumaElementos / arr.length
    console.log(promedioElementos)
    return promedioElementos
}
calculaMediaAritmetica(list1)
calculaMediaAritmetica(list2)
calculaMediaAritmetica(list3)