/* Análisis: cómo calcular figuras geométricas */

/* Cuadrado */
//Perimetro
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadradro miden:",ladoCuadrado,"cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("El perimetro del Cuadrado es de:",perimetroCuadrado,"cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El area del Cuadrado es de:",areaCuadrado,"cm^2");
console.groupEnd();
//..................................................

/* Triángulo */
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const base = 4;
const alturaT = 5.5;
console.log("Los lados del Triángulo miden:",ladoTriangulo1,"cm",ladoTriangulo2,"cm",base,"cm");
console.log("La altura del Triángulo es:",alturaT);

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+base;
console.log("El perimetro del Triángulo es de:",perimetroTriangulo,"cm");

const areaTriangulo = (base*alturaT)/2;
console.log("El area del Triángulo es de:",areaTriangulo,"cm^2");
console.groupEnd();
//..................................................


/* Círculo */
console.group("Cígulo");
const radio = 4;
const diametro = radio*2;
const PI = Math.PI;
const perimetroCirculo = PI*diametro;
const areaCirculo = PI*(radio*radio);

console.log("El perimetro del Círculo es de:",perimetroCirculo,"cm");
console.log("El area del Círculo es de:",areaCirculo,"cm^2");
console.groupEnd();
//..................................................

/*................... . */
/*................... . */
/*................... . */
/*................... . */
/*................... . */
/*................... . */
/*................... . */


/* Cuadrado - Funciones */
console.group("Agrupando funciones Cuadrado");

//Funciones
    function perimetroCuadra2(lado){
        return console.log("El perimetro del cuadrado es:",lado*4);
    }
    
    function areaCuadra2(lado){
        return console.log("El area del cuadrado es:",lado*lado);
    }

//Ejecutamos
perimetroCuadra2(5);
areaCuadra2(5)

console.groupEnd();
//..................................................

/* Triangulo - Funciones */
console.group("Agrupando funciones Triangulo");

//Funciones
    function perimetroTriangulop(lado1,lado2,base){
        return console.log("El perimetro del Triangulo es:",(lado1+lado2+base));
    }

    function areaTrianguloop(base,altura){
        return console.log("El area del Triangulo es:",(base*altura)/2);
    }

//Ejecutamos
perimetroTriangulop(6,6,4);
areaTrianguloop(4,5.5)

console.groupEnd();
//..................................................

/* Circulo - Funciones */
console.group("Agrupando funciones Círculo");

    function diametroCirculo(radio){
        return (2*radio)
    }
    function circunferenciaCirculo(radio){
        const diametro = diametroCirculo(radio);
        return console.log("La circunferencia del Círculo es:",((Math.PI)*diametro));
    }

    function areaCirculoop(radio){
        return console.log("El area del Círculo es:",(Math.PI*(radio*radio)));
    }



 //Ejecutamos
diametroCirculo(5);
circunferenciaCirculo(5);   
areaCirculoop(5);

console.groupEnd();
