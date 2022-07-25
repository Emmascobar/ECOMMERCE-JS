// /* -------------------------- */
// // CURSO DE JS 2022
// // Alumno: Emmanuel Escobar
// /* -------------------------- */


// // VARIABLES y TIPOS DE DATOS

// /* Espacio en memoria para guardar informacion */

// nombreDeVariable = "La variable"; /* String */
// ValorDeVariable = 0; /* Numero */
// nombreDeVariable = "Numero Booleano"; /* Boolean */

// /* formas de declararlas */

// var /* no se usa mas desde ES6 */
//     let /* reemplaza a var con diferente scope */
// const /* se prefiere para variables fijas/constantes, no se puede volver a inicializar */


// let numero = 1;
// alert(numero);
// numero = 2; /* se puede volver a declarar */

// const numero = 2;
// alert(numero);
// numero = 3; /* no se puede volver a declarar la misma varible */

// /* Null */// Es una variable literalmente vacia, no puede definirse
// /* NaN */
// /* Undefinited */

// // PROMPT
// /*  Es una funcion que le solicita datos al usuario para guardarlo en una variable.*/
// let nombre = prompt("Dime tu nombre"); /* llama a la variable que va a solicitar el prompt */
// alert("Hola " + nombre); /* Da un alerta con los datos concatenados */

// // OPERADORES EN JS

// ++ /* incremento de a uno */
// -- /* decremento de a uno  */
// += /* adicion */
// -= /* resta */
// * /* multiplicacion */
//     / / * division * /
//     % /* resto */ 
// ** /* exponenciacion a raiz */


// // CONCATENACION: Une strings.

// saludo = "Hola Emma!";
// pregunta = "¿Cómo estas?";

// frase = saludo + pregunta;

// console.log(frase) /* Aqui estamos concatenando los dos datos */

// /* metodo concat */
// numero1 = 3;
// numero2 = 6;

// cadenaDeNumeros = numero1.concat(numero2); /* ver como se comporta despues */

// /* backticks: otro metodo de concatenar,   se encierran entre ` siempre ` */

// frase = `Hola Emma ${pregunta}, espero tu respuesta`;


// // OPERADORES de comparación, devuelven TRUE o FALSE (UN BOOLEANO)

// == /* Es igual? */
// === /* Es estrictamente igual? Teniendo en cuenta el tipo de dato. */
// != /* Es dintinto? */
// !== /* No es estrictamente igual */
// > /* Mayor a */
// < /* Menor a */
// >= /* Mayor o igual a */
// <= /* Menor o igual a */

// // OPERADORES Lógicos, devuelven TRUE o FALSE (UN BOOLEANO) a partir de resultado de una operacion.

// let valor = true;
// let valor2 = true;

// let resultado = valor && valor2; /* (and - ambas deben ser verdaderas) */
// let resultado2 = valor || valor2; /* (or - una tiene que ser verdadera) */
// let resultado3 = !valor2; /* (cambia el valor devuelto al contrario) */

// document.write(resultado);

// /* Se pueden mezclar varias operaciones */ 


// // CONDICIONALES

// // IF ELSE 
// nombre = "Emmanuel";

// if (nombre == "Emmanuel") {
//     console.log("tu nombre es " + nombre);
// }else {
//     console.log ("no existe otro nombre Gil");
// }

// nombre = "Emmanuel";

// if (nombre == "Raul") {
//     console.log("Ese es el nombre de mi viejo");
// }else if(nombre == "Alicia") {
//     console.log ("Ese es el nombre de mi vieja);
// }else {
//     console.log("mi nombre es " + nombre);
// }


// // EJERCICIOS COFLA 1 ------------

// dineroCofla = prompt( "Cuanto dinero tienes Cofla?");
// dineroPedro = prompt( "Cuanto dinero tienes Pedro?");
// dineroMati = prompt( "Cuanto dinero tienes Matias?");


// if (dineroCofla >= 0.6 && dineroCofla < 1) {
//     alert ("Te alcanza el helado de agua")
//     alert( "y te sobran " + (dineroCofla - 0.6))
// }
// else if (dineroCofla >= 1 && dineroCofla < 1.6) {
//     alert ("Te alcanza el helado de crema");
//     alert( "y te sobran " + (dineroCofla - 1))
// }
// else if (dineroCofla >= 1.7 && dineroCofla < 2) { 
//     alert ("Te alcanza el helado Premium");
//     alert( "y te sobran " + (dineroCofla - 1.7))
// }
// else if (dineroCofla >= 2.1 && dineroCofla < 2.5) {
//     alert ("Te alcanza el helado de Cuarto");
//     alert( "y te sobran " + (dineroCofla - 2.1))
// }
// else {
//     alert("No te alcanza nada, pobre..!")
// }

// if (dineroPedro >= 0.6 && dineroPedro < 1) {
//     alert ("Te alcanza el helado de agua")
// }
// else if (dineroPedro >= 1 && dineroPedro < 1.6) {
//     alert ("Te alcanza el helado de crema");
// }
// else if (dineroPedro >= 1.7 && dineroPedro < 2) {
//     alert ("Te alcanza el helado Premium");
// }
// else if (dineroPedro >= 2.1 && dineroPedro < 2.5) {
//     alert ("Te alcanza el helado de Cuarto");
// }
// else {
//     alert("No te alcanza nada, pobre..!")
// }

// if (dineroMati >= 0.6 && dineroMati < 1) {
//     alert ("Te alcanza el helado de agua")
// }
// else if (dineroMati >= 1 && dineroMati < 1-6) {
//     alert ("Te alcanza el helado de crema");
// }
// else if (dineroMati >= 1.7 && dineroMati < 2) {
//     alert ("Te alcanza el helado Premium");
// }
// else if (dineroMati >= 2.1 && dineroMati < 2.5) {
//     alert ("Te alcanza el helado de Cuarto");
// }
// else {
//     alert("No te alcanza nada, pobre..!")
// }



// ---------ARRAYS o ARREGLOS ---------

/* Es como una cajita, con propiedades por fuera y elementos, de todo tipo ordenados,  por dentro, */
/* Se declaran con [] */

// let frutas = ["banana", "manzana", "mango",];

// console.log(frutas[1]);

// /* Arrays Asociativos */

// let pc1 = {
//     nombre: "EmmaPC",
//     procesador: "AMD Ryzen 5",
//     ram: "16gb",
//     disco: "500gb",
// }

// let pc2 = ["Emma PC", "AMD Ryzen 5", "16gb", "500gb"];

// let nombre = pc1["nombre"];
// let procesador = pc1["procesador"];
// let ram = pc1["ram"];
// let disco = pc1["disco"];

// frase = `el nombre de mi pc es: ${nombre} <br>
//         El procesador es: ${procesador} <br>
//         La ram es de: ${ram} <br>
//         el disco es de: ${disco} <br>`

// document.write(frase),


//     // BUCLES E ITERACION ----------->

//     /* If esta condicion se cumple, ejecutamos lo siguiente*/
//     /* While (bucle) : si se cumple continuamente aun se cumpla la condicion, hasta que se termine el bucle cuando ya no se cumple la condición */
//     /* If esta condicion se cumple, ejecutamos */

//     let numero = 0;

// if (numero < 10) {
//     numero++;

//     console.log(numero);
// }

// while (numero < 6) { /* Se ejecutara siempre que sea menor a 6, sumando en cada vuelta */
//     numero++;

//     console.log(numero);
// }

// do { /* ya se ejecuta una vez y seguira solo si se sigue cumpliendo la condición */
//     console.log(numero);
//     numero++;
// }
// while (numero > 6) {
//     numero++;
//     console.log(numero);
//     if (numero == 5) {
//         break; /* marca el fin del ciclo */
//     }
// }

// // FOR /* igual al while pero determinado */ En el se crean variables / Partes: Declaracion, inicializacion, condicion y actualizacion.

// for (let i = 0; i < 6; i++) { /* Declaramos en 0 la variable, diciendo que mientras sea < 6 prosiga, y se actualice de a uno ++ */
//     console.log(i)

//     if (i == 12) {
//         break; /* -continue- para saltear iteracion y pasar a la siguiente */
//     }
//     console.log(i);

// }

// // FOR IN ---

// let animales = [gato, perro, vaca, cerdo];

// for (animal in animales) {
//     console.log(animal);
// }

// array1 = [maria, esther, carla];
// array2 = [pedro, matias, juan];

// for (let array in array2) {
//     if 
// }

// // ------------- FUNCIONES ------------- 

// /*  Optimiza el codigo, guardando dato dentro de ella.
//  Primero la definimos, luego la usamos y reusamos */

//  funcion saludar() {
//     respuesta = prompt("¿Como estas hoy?");
//     if (respuesta == "bien") {
//         alert(me alegro!)
//         return "lo haz hecho bien!"
//     } else {
//         alert(que pena!);
//     }
//  } 

//  saludar()
//  saludar() /* Con estas lineas ejecutamos el codigo la cantidad de veces que sean */

  
// /* Parametros de las funciones (le da su variabilidad) */


function sumaTodos(num1, num2) {
    let suma = num1 + num2;
    console.log(suma)
}

sumaTodos(11,12)
