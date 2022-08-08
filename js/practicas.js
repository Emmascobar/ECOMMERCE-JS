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


// // ---------ARRAYS o ARREGLOS ---------

// /* Es como una cajita, con propiedades por fuera y elementos, de todo tipo ordenados,  por dentro, */
// /* Se declaran con [] */

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


// function sumaTodos(num1, num2) {
//     let suma = num1 + num2;
//     console.log(suma)
// }

// sumaTodos(11, 12)

// function saludar(nombre) {
//     let frase = `hola ${nombre}, ¿como estas?`
//     console.log(frase);
// }

// saludar("Emma");

// /* Funciones flecha. Se escriben con let o const seguido del nombre de la funcion siendo igual a los parametros seguido de una flecha { y se inserta la función} */
// const saludar2 = (nombre) => {
//     let frase = `hola ${nombre}, ¿como estas?`
//     console.log(frase);
// }

// /* forma simplificada sin () sin ¨{} */

// let frase = `hola ${nombre}, ¿como estas?`;

// const saludar3 = nombre => console.log(frase);


// // EJERCICIOS COFLA 2 ------------


// /* P1: Pasan los mayores de 18 años y desde las dos uno pasa gratis el resto no */
// let free = false;

// const validarCliente = (time) => {
//     let edad = ("¿Cual es tu edad?");
//     if (edad > 18) {
//         if (time >= 2 && 7 && free = false) {
//             alert("poder pasar gratis porque sos la primera persona despues de las 2AM");
//             free = true;
//         } else {
//             alert(`son las ${time}00:hs. y podes pasar pero tenes que pagar la entrada `)
//         }
//     } else {
//         alert(`No podes pasar, sos menor`)
//     }
// }

// validarCliente(20);
// validarCliente(18);
// validarCliente(02);
// validarCliente(04);
// validarCliente(05);

// // /* P2: */

// // let alumnosTotales = [];

// // for (i = 0; i < cantidad; i++) {
// //     alumnosTotales[i] = [prompt("nombre del alumno " + (i + 1)), 0]
// // }

// // const tomarAsistencia = (nombre, p) => {
// //     let presencia = prompt(nombre);
// //     if (presencia == "p" || presencia == "P") {
// //         alumnosTotales[i][1]++;
// //     }
// // }
// // for (i = 0; i < 30; i++) {
// //     for (alumno in alumnosTotales) {
// //         tomarAsistencia(alumnosTotales[alumno][0], alumno)
// //     }
// // }
// // for (alumno in alumnosTotales) {
// //     let resultado = `${alumnosTotales[alumno][0]}; <br>
// //     ________Presentes: ${alumnosTotales[alumno][1]}; <br>
// //     ________Ausencias: ${30 - alumnosTotales[alumno][1]}; <br>`;
// //     if (30 - alumnosTotales[alumno][1] > 18) {
// //     resultado += <b style="color:red"> "REPROBADO POR INASISTENCIAS" </b><br>;
// //     } else {
// //     resultado+= "<br>";
// //     console.log(resultado)
// //     } 


// /* P3 - Calculadora */ 

// const sumar = (num1, num2) => {
//     return parseInt(num1) + parseInt(num2)
// }
// const restar = (num1, num2) => {
//     return parseInt(num1) - parseInt(num2)
// }
// const multiplicar = (num1, num2) => {
//     return parseInt(num1) * parseInt(num2)
// }
// const dividir = (num1, num2) => {
//     return parseInt(num1) / parseInt(num2)
// }

// alert("Que operacion desea realizar?");
// let operacion = prompt("1 = sumar, 2 = restar, 3 = multiplicar, 4 = dividir");

// if (operacion == 1) {
//     let numero1 = prompt("Ingrese el primer numero");
//     let numero2 = prompt("Ingrese el segundo numero");
//     resultado = sumar(numero1, numero2);
//     alert(`El resultado es ${resultado}`);
// }
// else if (operacion == 2) {
//     let numero1 = prompt("Ingrese el primer numero");
//     let numero2 = prompt("Ingrese el segundo numero");
//     resultado = restar(numero1, numero2);
//     alert(`El resultado es ${resultado}`);
// }
// else if (operacion == 3) {
//     let numero1 = prompt("Ingrese el primer numero");
//     let numero2 = prompt("Ingrese el segundo numero");
//     resultado = multiplicar(numero1, numero2);
//     alert(`El resultado es ${resultado}`);
// }
// else if (operacion == 4) {
//     let numero1 = prompt("Ingrese el primer numero");
//     let numero2 = prompt("Ingrese el segundo numero");
//     resultado = dividir(numero1, numero2);
//     alert(`El resultado es ${resultado}`);
// }
// else {
//     alert("No se encuentra la operacion");
// }


// // CAPITULO 3: POO

// /* Clases, objetos, atributos, constructor, instanciacion */


// class animal {
//     constructor(especie, edad, color) {
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`
//     }
//     verInfo() {  /* Metodo */
//         console.log(this.info);
//     }
// }

// let perro = new animal ("perro", 2, "marron");
// let gato = new animal ("gato", 5, "blanco");
// let pajaro = new animal ("pajaro", 3, "azul");

// console.log(perro.info);

// perro.verInfo() /* cuando se establece un metodo */


// /* CARACTERISTICAS DE LOS OBJETOS: Abstraccion. Modularidad. Encapsulamiento. Polimorfimo */
 
//  /* HERENCIA: nos permite crear una clase nueva y extender la herencia (extends) desde otra clase. A ésta nueva clase podremos ponerle otros super atributos que no corresponderian al general que serian del padre que hereda*/

//  /* Otras caracteristicas: getter, setter */


// //  PROBLEMAS COFLA N3: 

// class celular  {
//     constructor(color, peso, rdp, rdc, ram) {
//         this.color = color;
//         this.peso = peso;
//         this.resolucionDePantalla = rdp;
//         this.resolucionDeCamara = rdc;
//         this.memoriaRam = ram;
//         this.encendido = false;
//     }

//     botonEncendido(){
//         if (this.encendido == false);
//         alert("Se ha prendido el celular");
//         this.encendido = true;
//     } else { 
//       Alert("Celular apagado")  
//     }

//     tomarFoto() {
//         alert(`foto tomada con una resolucion de: ${this.resolucionDeCamara}`)
//     }

//     grabarVideo() {
//         alert(`video grabado con una resolucion de: ${this.resolucionDeCamara}`)
//     }
//     mobileInfo() {
//         return `
//         Color: ${this.color} <br>
//         Peso: ${this.peso} <br>
//         Resolucion: ${this.rdp} <br>
//         Video: ${this.rdc} <br>
//         Memoria RAM: ${this.ram} <br> 
//         `
//     }
// }

// celular1 = new celular ("azul", "110grs", "5´0", "full HD", "4gb");
// celular2 = new celular ("rojo", "150grs", "6´0", "full HD", "8gb");
// celular3 = new celular ("amarillo", "100grs", "4´5", "full HD", "4gb");

// console.log (`
// ${celular1.mobileInfo()} <br>;
// ${celular2.mobileInfo()} <br>;
// ${celular3.mobileInfo()} <br>;
// `);


// class App {
//     constructor(descargas, puntuacion, peso)
//     this.descarga = descargar;
//     this.puntuacion = puntuacion;
//     this.peso = peso;
//     this.iniciada = false;
//     this.instalda = false;
// }

// abrir(){
//     if(this.iniciada == false) {
//         this.iniciada = true;
//         alert("app iniciada");
//     }
// }
// cerrar(){
//     if(this.iniciada == true) {
//         this.iniciada = false;
//         alert("app cerrada");
//     }
// }
// instalada(){
//     if(this.iniciada == false) {
//         this.iniciada = true;
//         alert("app instalada");
//     }
// }
// desinstalada(){
//     if(this.iniciada == true) {
//         this.iniciada = false;
//         alert("app desinstalada");
//     }
// }

// class App {
// 	constructor(descargas,puntuacion,peso){
// 		this.descargas = descargas;
// 		this.puntuacion = puntuacion;
// 		this.peso = peso;
// 		this.iniciada = false;
// 		this.instalada = false;
// 	}
	
// 	instalar(){
// 		if (this.instalada == false) {
// 			this.instalada = true;
// 			alert("app instalada correctamente")
// 		}
// 	}
// 	desinstalar(){
// 		if (this.instalada == true) {
// 			this.instalada = false;
// 			alert("app desinstalada correctamente")
// 		}
// 	}
// 	abrir(){
// 		if (this.iniciada == false && this.instalada == true) {
// 			this.iniciada = true;
// 			alert("app iniciada");
// 		}
// 	}
// 	cerrar(){
// 		if (this.iniciada == true && this.instalada == true) {
// 			this.iniciada = false;
// 			alert("app cerrada");
// 		}
// 	}

// 	appInfo(){
// 		return `
// 		Descargas: <b>${this.descargas}</b></br>
// 		Puntuacion: <b>${this.puntuacion}</b></br>
// 		Peso: <b>${this.peso}</b></br>
// 		`
// 	}

// }


// app = new App("16.000","5 estrellas","900mb");
// app2 = new App("1.000","4 estrellas","400mb");
// app3 = new App("6.000","4.5 estrellas","100mb");
// app4 = new App("23.000","4.8 estrellas","1gb");
// app5 = new App("900","5 estrellas","250");
// app6 = new App("17","3.7 estrellas","522mb");
// app7 = new App("42.981","2.9 estrellas","723mb");


// document.write(`
// 	${app.appInfo()} <br>
// 	${app2.appInfo()} <br>
// 	${app3.appInfo()} <br>
// 	${app4.appInfo()} <br>
// 	${app5.appInfo()} <br>
// 	${app6.appInfo()} <br>
// 	${app7.appInfo()} <br>
// 	`);


// METODOS!!!

let cadena = "cadena de texto uno";
let cadena2 = "cadena de texto dos";

resultado = cadena.concat(cadena2); /* Une cadenas de strings */
console.log(resultado);

/* Starwith o Endswith : para ver en booleano si empieza o termina con una cadena */

/* cadena.INCLUDES("esto?") - El includes devuelve un true o false segun contenga o no */

/* cadena.INDEXOF("esto?") - devuelve la posicion en la que esta la palabra ("esto?"). Ej 10 */

/* cadena.PADSTART(10, "AGREGAR ESTO")* - Agrega el texto la cantidad de veces definida en el primer parametro/

/* cadena.REPEAT (10) - Repite el texgto de la cadena la cantidad de veces que definamos/

/* cadena.SPLIT(",") - Separa las palabras con el signo establecido, un espacio vacio o una palabra dentro del texto*/ 

/* cadena.SUBSTRING(1,2) - fracciona la cadena a partir del primer parametro hasta el último establecido (ej. del uno al dos)*/ 

/* cadena.TOLOWERCASE() - lo pasa a minuscula*/ 
/* cadena.TOUPPERCASE() - lo pasa a mayuscula*/ 

/* cadena.TOSTRING(1,2) - transforma el resultado en un string*/ 

/* cadena.TRIM - elimina los espacios de la cadena*/ 
/* cadena.TRIMSTART - elimina los espacios del principio*/ 
/* cadena.TRIMEND - elimina los espacios del final*/ 


// METODOS DE ARRAYS!!! --------------->

let nombres = ["Emma", "Pedro", "Nico"];

// TRANSFORMADORES:
/* .pop() = elimina el ultimo elemento del Array */
/* .shift() = elimina el primer elemento del Array */
/* .push() = agrega un elemento del Array. let resultado = nombres.push ("Matias")  */
/* .reverse() = invierte el orden de los elementos del Array */
/* .unshift(1,3) = elimina 3 elementos desde la posicion 1 */
/* .sort = Ordena los elementos en orden ascendente - alfabeticamente */
/* .splice(0,1,agregado) = comienza desde el primero, elimina la segunda cantidad e ingresa lo tercero  */

// ACCESORES:
/* .join() = crea un nuevo array, generando una cadena de texto nueva, puede ponerse los separadores que queramos en los parametros */
/* .slice() = recorta el array desde el primer hasta el segundo parametro */
/* TODOS LOS DEMAS METODOS tmb funcionan en ARRAYS */

// DE REPETICION:
/* .filter() = crea un nuevo array con los elementos que cumplan una condicion */

nombres.filter(nombre => console.log(nombre + <br>));

/* .forEach() = igual que el filter pero sin condiciones */


// OBJETO MATH ------------->
 
/* math.random() - genera un numero random entre 0 y 1*/
/* math.round() - redondea hacia arriba. */
/* math.floor() - redondea hacia abajo. */
/* math.fround()*/
/* math.min()*/
/* math.max()*/
/* math.trunc() - no redondea, elimina decimales despues de la coma. */
/* math.sqrt() - raiz cuadrada. */
/* math.cbrt() ´- raiz cubica */







