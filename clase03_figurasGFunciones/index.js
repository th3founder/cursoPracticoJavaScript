const PI = Math.PI; //generar numero pi

//Código del Cuadrado----------------------------------------------
console.group("Cuadrado");


/* Perimetro Cuadrado................ */
function perimetroCuadrado(lado){
    return lado * 4;
}

console.log("Perimetro cuadrado:",perimetroCuadrado(4));


/* Area Cuadrado................ */
function areaCuadrado(lado){
    return lado * lado;
}

console.log("Area cuadrado:",areaCuadrado(5));

console.groupEnd();

//Código del Triangulo----------------------------------------------

/* Perimetro Triangulo................ */
console.group("Triangulo");
function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}

console.log("Base Triangulo:",perimetroTriangulo(6,6,4));


/* Area Triangulo................ */
function areaTriangulo(altura, base){
    return (base*altura)/2
}

console.log("Area Triangulo:",areaTriangulo(4,5.5));

console.groupEnd();


//Código del Círculo----------------------------------------------
console.group("Círculo");

/* Diametro Circulo................ */
function diametroCirculo(radio){
    return radio*2;
}

console.log("El radio del circulo es: ",diametroCirculo(5));



/* Perimetro Circulo.......... */
function perimetroCirculo(radio){
    return PI * diametroCirculo(radio);
}

console.log("El Perimetro del circulo es: ",perimetroCirculo(5));


/* Area Circulo.......... */
function areaCirculo(radio){
    return (radio*radio)*PI;
}

console.log("El Area del circulo es: ",areaCirculo(5));

console.groupEnd();


//Código Arrow----------------------------------------------


//Interantuando con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const units = document.getElementById("tipoDato").value
    const perimetro = perimetroCuadrado(value)

    console.log(perimetro);
    console.log(units)
    document.getElementById("answerbox").innerHTML =`${perimetro} ${units}`;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const units = document.getElementById("tipoDato").value
    const value = input.value;
    const area = areaCuadrado(value);
    console.log(area);
    console.log(units)

    const perimetro = perimetroCuadrado(value)

    document.getElementById("answerbox").innerHTML =`${area} ${units}^2`;

}


/* Triangulo */
function calcularPerimetroTriangulo(){
    const units = document.getElementById("tipoDatoT").value

    const input1 = document.getElementById("inputTrianguloLado1");
    const lado1 = Number(input1.value);

    const input2 = document.getElementById("inputTrianguloLado2");
    const lado2 = Number(input2.value);

    const input3 = document.getElementById("inputTrianguloBase");
    const base = Number(input3.value);

    const perimetro = perimetroTriangulo(lado1,lado2,base);

    console.log(units);
    console.log(perimetro,units);
    document.getElementById("answerT").innerHTML =`${perimetro} ${units}`;


}

function calcularAreaTriangulo(){
    const units = document.getElementById("tipoDatoT").value

    const input3 = document.getElementById("inputTrianguloBase");
    const base = Number(input3.value);

    const input4 = document.getElementById("inputTrianguloHeight");
    const altura = Number(input4.value);


    const area = areaTriangulo(base,altura);

    console.log(area);
    document.getElementById("answerT").innerHTML =`${area} ${units}^2`;

}


/* Circulo */

function calcularPerimetroCirculo(){
    const units = document.getElementById("tipoDatoC").value
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);

    const perimetro = perimetroCirculo(value)
    console.log(perimetro);

    document.getElementById("answerC").innerHTML =`${perimetro} ${units}`;

}


function calcularAreaCirculo(){
    const units = document.getElementById("tipoDatoC").value

    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);

    const area = areaCirculo(value);
    console.log(area);
    document.getElementById("answerC").innerHTML =`${area} ${units}^2`;

}


/* Triangulo Isoceles */
function obtenerAlturaTriangulo(){
    const units = document.getElementById("tipoDatoTI").value

    const input1 = document.getElementById("inputTrianguloILado1");
    const lado1 = Number(input1.value);

    const input2 = document.getElementById("inputTrianguloILado2");
    const lado2 = Number(input2.value);

    const input3 = document.getElementById("inputTrianguloIBase");
    const base = Number(input3.value);

    if (lado1 === lado2 && lado1 != base) {
        console.log("Isoceles");
        const altura = Math.sqrt((lado1*lado2)-((base*base)/4));
        console.log(altura);
        document.getElementById("answerTI").innerHTML =`${altura} ${units}^2`;


    }else{
        alert("Alguno de los datos coinciden y no permite que se ejecute la operación del Isoceles");
    }

}
