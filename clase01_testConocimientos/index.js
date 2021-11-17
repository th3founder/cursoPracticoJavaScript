//Tes de conocimientos de JavaScript

//¿Qué es una variable y para qué sirve? : Es la manera en la que creamos un espacio en memoria para poder guardar información en ella.

//¿Cuál es la diferencia entre declarar e inicializar una variable?: inicializar: otorgarle información o un tipo de dato a la variable, declarar: dar a entender al navegador que existe un nuevo espacio de almacenamiento resevado


//¿Cuál es la diferencia entre sumar números y concatenar strings?: Una funciona con base en una operación matematica y cuando concatenamos solo pegamos valores y se crea un nuevo valor que no se rige por una operación matematica...Ejemplo: sumar numeros: 1+1 =2, ejemplo de concatenar 1+"1"=11

//¿Cuál operador me permite sumar o concatenar?: +


/* ------------------------------------------------------------ */

/* 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información: */

let nombre = "Alvaro";
let apellido = "Ibanez";
var nombre_usuario_platzi = "th3_founder";
var edad = 22;
var correoElectronico = "alvaro_i.v@outlook.com"
let mayor_de_edad = true;
var dineroAhorrado = 100000;
var deudas = null;

/* 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios. */

//-------------------------------------------------------

/* 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior */

//Nombre completo (nombre y apellido)
let nombreCompleto = nombre+" "+apellido;
console.log(nombreCompleto);

//Dinero real (dinero ahorrado menos deudas)

var netMoney = dineroAhorrado-deudas;
console.log(netMoney);


//Funciones
/* 1️⃣ Responde las siguientes preguntas en la sección de comentarios: */

//¿Qué es una función?: Conjunto de instrucciones que son repetitivas en el cual al ejecutarse pueden requerir ninguno o varios parametros para funcionar

//¿Cuándo me sirve usar una función en mi código?: Cuando tenemos grandes cantidades de codigo que se repiten 1 y otra vez

//¿Cuál es la diferencia entre parámetros y argumentos de una función?: Los parametros son la forma de entender los tipos de ingredientes que tendra nuestra función y los argumentos son los elementos que usaremos en esos ingredientes. Podemos tener como parametro fruta y nosotros coloquemos como argumento una manzana.

/* 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función: 

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

*/
function yoSoy(name,lastname,nickname){
    const nombre = name+" "+lastname;
    const presentacion = `Yo soy ${nombre}, pero me gusta que me digan ${nickname}`;
    console.log(presentacion);
}

yoSoy("Alvaro","Ibanez","varo");


//----------------------------------------------------------------
/* Condicionales */

/* 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una condicional? : Una validación de si algo es verdadero o falso

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?: if, else if, else, switch y terneario

¿Puedo combinar funciones y condicionales?:Si totalmente */


/* 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:


Respuesta:*/
const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}


const suscripciones = ["Free","Basic","Expert","ExpertPlus"];
const respuestas = ["Solo puedes tomar los cursos gratis","Puedes tomar casi todos los cursos de Platzi durante un mes","Puedes tomar casi todos los cursos de Platzi durante un año","Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

var indexSuscripcion = suscripciones.indexOf(tipoDeSuscripcion);
console.log(indexSuscripcion)
if(indexSuscripcion == -1){
    console.log("Esta suscripcion no existe");
}else{
    console.log(respuestas[indexSuscripcion])
}

/* 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if). */
if(tipoDeSuscripcion === suscripciones[indexSuscripcion]){
    console.log(respuestas[indexSuscripcion]);
}


//Ciclos

/* 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo?: Una loop que se repite X cantidad de veces

¿Qué tipos de ciclos existen en JavaScript?: for, while, do while

¿Qué es un ciclo infinito y por qué es un problema?: Un ciclo que no tiene una condición de finalización lo cual crea que la tarea u operación se ejecutre inifinidad de veces y se trabe nuestra pestaña y en algunos casos el navegador.


¿Puedo mezclar ciclos y condicionales?: Si por supuesto */


/* 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
 */

indexito = 0;
while(indexito < 5){
    console.log("El valor del Index es: ",indexito);
    indexito = indexito+1;
}

console.log("---------")

indexito2 = 10;
while(indexito2 >= 2){
    console.log("El valor del Indexito es: ",indexito2);
    indexito2 = indexito2-1;
}


/* 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar. */

function sumaDosNum(){
    let userInput = "";
    console.log(userInput);
    while(userInput !== 4){
        userInput = Number(prompt("Cuanto es 2+2"));
    }
    if(userInput === 4){
        console.log("Eres un ganador");
    }
}
sumaDosNum();

/*  function juego() {
    let resultado;
    do {
        resultado = parseInt(prompt('¿Cuál es el resultado de "2 + 2". R: '));
    } while ( resultado !== 4 );
    if (resultado === 4);
        return console.log('¡Eres un GENIO!');
    }
juego();
 */



//Listas

/* 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un array?: Es una estructura de datos de tipo objeto
¿Qué es un objeto?: Un contenedor de objetos o un paradigma de abstracción.

¿Cuándo es mejor usar objetos o arrays?: Depende del caso o lo que se requiere hacer, si solo se quiere contener información que no tiene relación con otros objetos usamos un array, pero si tenemos información que tiene otros atributos usamos objetos


¿Puedo mezclar arrays con objetos o incluso objetos con arrays?: Si, se puede */



/* 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento. */

const legos = ["star-Wars","City","Marvel","Jurassic-Park","Batman"];

function primerElemento(array){
    console.log(array[0]);
}

primerElemento(legos);


/* 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo). */
function elementoXElemento(array){
    for(var elemento of array){
        console.log(elemento);
    }
}
elementoXElemento(legos);


/* 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo). */

//Creamos nuestra función constructor
function generalMotors (marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//Creamos nuestros modelos
const almacen = []; //Aqui guardaremos los vehiculos
var models = ["Sierra AT4","Sierra Denali","Yukon"]; //Modelos que manejaremos
var annioModel = [2019,2021,2022]; //Año del modelo que manejaremos

//Iniciamos la producción
for (let index = 1; index <= 5; index++) {

    //Creamos variables aleatorias para que los automoviles se produzcan en diferente modelo y año
    var aleatorioModels = Math.floor(Math.random()*models.length);
    var aleatorioAnnio = Math.floor(Math.random()*annioModel.length);

    //enzamblamos y agregamos cada carro nuevo a nuestro almacen
    almacen.push(new generalMotors("GMC",models[aleatorioModels],annioModel[aleatorioAnnio]));
}

//Vemos nuestro almacen
console.log(almacen)


function elementoXObjeto(objeto){
    for(var cadaElemento in objeto){
        console.log(`Este es el objeto ${cadaElemento} :`,objeto[cadaElemento]);
    }
}
elementoXObjeto(almacen);