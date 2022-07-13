/* -------------------------- */
// CURSO DE JS 2022
// Alumno: Emmanuel Escobar
/* -------------------------- */


// VARIABLES y TIPOS DE DATOS

/* Espacio en memoria para guardar informacion */

nombreDeVariable = "La variable"; /* String */
ValorDeVariable = 0; /* Numero */
nombreDeVariable = "Numero Booleano"; /* Boolean */

/* formas de declararlas */

var /* no se usa mas desde ES6 */
    let /* reemplaza a var con diferente scope */
const /* se prefiere para variables fijas/constantes, no se puede volver a inicializar */


    let numero = 1;
alert(numero);
numero = 2; /* se puede volver a declarar */

const numero = 2;
alert(numero);
numero = 3; /* no se puede volver a declarar la misma varible */

/* Null */// Es una variable literalmente vacia, no puede definirse
/* NaN */
/* Undefinited */

// PROMPT
/*  Es una funcion que le solicita datos al usuario para guardarlo en una variable.*/
let nombre = prompt("Dime tu nombre"); /* llama a la variable que va a solicitar el prompt */
alert("Hola " + nombre); /* Da un alerta con los datos concatenados */

// OPERADORES EN JS

++ /* incremento de a uno */
-- /* decremento de a uno  */
+= /* adicion */
-= /* resta */
* /* multiplicacion */
    / / * division * /
    % /* resto */ 
** /* exponenciacion a raiz */


// CONCATENACION: Une strings.

saludo = "Hola Emma!";
pregunta = "¿Cómo estas?";

frase = saludo + pregunta;

console.log(frase) /* Aqui estamos concatenando los dos datos */

/* metodo concat */
numero1 = 3;
numero2 = 6;

cadenaDeNumeros = numero1.concat(numero2); /* ver como se comporta despues */

/* backticks: otro metodo de concatenar,   se encierran entre ` siempre ` */

frase = `Hola Emma ${pregunta}, espero tu respuesta`;


// OPERADORES de comparación, devuelven TRUE o FALSE (UN BOOLEANO)

== /* Es igual? */
=== /* Es estrictamente igual? Teniendo en cuenta el tipo de dato. */
!= /* Es dintinto? */
!== /* No es estrictamente igual */
> /* Mayor a */
< /* Menor a */
>= /* Mayor o igual a */
<= /* Menor o igual a */

// OPERADORES Lógicos, devuelven TRUE o FALSE (UN BOOLEANO) a partir de resultado de una operacion.

let valor = true;
let valor2 = true;

let resultado = valor && valor2; /* (and - ambas deben ser verdaderas) */
let resultado2 = valor || valor2; /* (or - una tiene que ser verdadera) */
let resultado3 = !valor2; /* (cambia el valor devuelto al contrario) */

document.write(resultado);

/* Se pueden mezclar varias operaciones */ 


// CONDICIONALES

// IF ELSE 
nombre = "Emmanuel";

if (nombre == "Emmanuel") {
    console.log("tu nombre es " + nombre);
}else {
    console.log ("no existe otro nombre Gil");
}

nombre = "Emmanuel";

if (nombre == "Raul") {
    console.log("Ese es el nombre de mi viejo");
}else if(nombre == "Alicia") {
    console.log ("Ese es el nombre de mi vieja);
}else {
    console.log("mi nombre es " + nombre);
}

