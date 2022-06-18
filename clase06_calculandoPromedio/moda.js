const lista1 = [1,1,1,1,2,2,2,3,3]

const lista1Count = {};

lista1.map( elemento =>{
    if(lista1Count[elemento]){
        lista1Count[elemento] = lista1Count[elemento] + 1;
    }else{
        lista1Count[elemento] = 1;
    }
})


const list1Array = Object.entries(lista1Count).sort((valorAcumulado,nuevoValor)=>{
    return valorAcumulado[1] - nuevoValor[1]
});
console.log(list1Array)

const moda = list1Array[list1Array.length -1]
console.log(moda)


const ednaModa = (array) =>{
    const conteoModa = {}
    array.map(elemento =>{
        if(conteoModa[elemento]){
            conteoModa[elemento] = conteoModa[elemento] + 1
            //console.log(conteoModa[elemento])
        }else{
            conteoModa[elemento] = 1
            //console.log(conteoModa[elemento])
        }
    })
    //console.log(conteoModa)

    const arrayModa = Object.entries(conteoModa).sort((value1,value2)=>{
        return value1[1]-value2[1]
    })
    
    const moda = arrayModa[arrayModa.length-1]
    console.log(moda)
}

ednaModa([10,9.5,9.9,9.5])
ednaModa([1,1,2,2,3,3,3,1,3,2,1,4,5,2,2,3,5,5])