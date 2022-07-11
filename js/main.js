
// ------------- DESAFIO ADICIONAL------------

// let Gastos = [950, 2100, 4800];


// let TotalGastos = 0;
// for (let i = 0; i < 3; i++) {
//     TotalGastos = TotalGastos + Gastos[i];
//     console.log(TotalGastos);
// }


// let promedioGastos = TotalGastos / 3;
// console.log(promedioGastos);

// let limiteMensual = 5000

// let netoMensual = (TotalGastos - limiteMensual);
// console.log(netoMensual)

// if (promedioGastos > 5000) {
//     console.log("Has superado tu limite mensual de gastos")
// } else {
//     console.log("Aun te quedan $ " + (netoMensual) + " " + "para gastar")
// }

// // -----------------------------------------------------------

// const ElColorFavoritoDeEmma = prompt("Ingresar un color");

// switch (ElColorFavoritoDeEmma) {
//     case "Azul":
//         console.log("Incorrecto, aunque es otro primario!");
//         break;
//     case "Verde ":
//         console.log("Incorrecto, casi!");
//         break;
//     case "Amarillo":
//         console.log("Incorrecto!");
//         break;
//     case "Rojo":
//         console.log("Felicitaciones acertaste!");
//         break;
//     default:
//         console.log("Buuuuuu");
//         break;
// }

// // ---------------------------------------------------

// let numero = prompt("Ingresar un numero");
// while (numero != "esc") {
//     alert("El usuario ingresó " + numero);
//     numero = prompt("Ingresar otro numero o escriba ESC para salir").;
// }



// --------- DESAFIO 1 - Simulador Interactivo-------------

let PrecioProducto1 = 200;
let PrecioProducto2 = 500;
let PrecioProducto3 = 150;
let PrecioProducto4 = 199;
let PrecioProducto5 = 225;
let PrecioProducto6 = 45;

function SumaProductos(a, b) {
    let SumaProductos = a + b;
    console.log(SumaProductos)
}

SumaProductos(PrecioProducto2, PrecioProducto5);
SumaProductos(PrecioProducto3, PrecioProducto4);

let carrito = [PrecioProducto1, PrecioProducto3, PrecioProducto5];

let sumaCarrito = 0;
for (let i = 0; i < 3; i++) {
    sumaCarrito = sumaCarrito + carrito[i];
    console.log(sumaCarrito);
}

// let descuento =
// function descuento(sumaCarrito) {
//     if (sumaCarrito > 1000)
//     const descuento = sumaCarrito%5;
// }

let costoEnvio = sumaCarrito % 7.5;

if (sumaCarrito > 50) {
    console.log("El envio es gratuito");
} else {
    console.log("El envio tiene un costo de " + costoEnvio);
}

let totalCarrito = 0;

function agregarAlCarrito (producto, stock) {
    const stockExistente = validarStock(stock);
    if (stockExistente === "Hay Stock") {
        console.log(producto + " se ha enviado al carrito");
        totalCarrito++;
    }else {
        console.log("No hay stock del producto");
    }
}

function validarStock(stockDelProducto) {
    if (stockDelProducto > 0) {
        return "Hay Stock";
    }else{
        return "No tenemos stock";
    }
}

agregarAlCarrito ("Notebook DELL 14", 8);