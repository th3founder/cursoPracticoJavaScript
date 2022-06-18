const list1 = [100,200,500,500000000];

const mitadLista = parseInt(list1.length / 2);

const calculaMediaAritmetica = (arr) =>{
    const sumaElementos = arr.reduce((valorAcumulado=0, nuevoElemento) => valorAcumulado+nuevoElemento)
    const promedioElementos = sumaElementos / arr.length
    return promedioElementos
}

const esPar = (number) =>{
    if(number % 2 === 0){
        return true
    }else{
        return false
    }
}
let mediana=0;

if(esPar(list1.length)){
    element1 = list1[mitadLista];
    element2 = list1[mitadLista-1];
    let promedioMedianas = calculaMediaAritmetica([element1,element2])

    mediana=promedioMedianas;
    console.log(mediana)
    
}else{
    mediana = list1[mitadLista];
    console.log(mediana);
}

/* ---------------------------------- */

const listaNums = [1000000,5,3,10,12,20]
const compareNumbers = (a,b) =>{
    return a-b
}

function comparar (a,b){
    return a-b
}

const arreglo = listaNums.sort(compareNumbers)
console.log(arreglo)

/* ............Reto......... */

/* Funciones necesarias */

const mediaAritmetica = (array) =>{

    /* Funciones */
    const calculaMediaAritmetica = (arr) =>{
        const sumaElementos = arr.reduce((valorAcumulado=0, nuevoElemento) => valorAcumulado+nuevoElemento)
        const promedioElementos = sumaElementos / arr.length
        return promedioElementos
    }
    
    const compareNumbersArray = (a,b) =>{
        return a-b
    }
    
    const esPar = (number) =>{
        if(number % 2 === 0){
            return true
        }else{
            return false
        }
    }
    
    /* operaciones iniciales necesarias */
    let halfList = parseInt(array.length / 2)
    const ordenArray = array.sort(compareNumbersArray)


    /* Proceso de fabricacion */
    let mediana=0;

    if(esPar(array.length)){
        element1 = ordenArray[halfList];
        element2 = ordenArray[halfList-1];
        let promedioMedianas = calculaMediaAritmetica([element1,element2])

        mediana=promedioMedianas;
        console.log(mediana)
        console.log(ordenArray)
        
    }else{
        mediana = ordenArray[halfList];
        console.log(mediana)
        console.log(ordenArray)
    }

}
mediaAritmetica([1,2,5,10,6,7])
mediaAritmetica([10,100,20,30,50,70])