/* -------------------------- */
// CURSO DE JS 2022
// Alumno: Emmanuel Escobar
/* -------------------------- */


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

// let PrecioProducto1 = 200;
// let PrecioProducto2 = 500;
// let PrecioProducto3 = 150;
// let PrecioProducto4 = 199;
// let PrecioProducto5 = 225;
// let PrecioProducto6 = 45;

// function SumaProductos(a, b) {
//     let SumaProductos = a + b;
//     console.log(SumaProductos)
// }

// SumaProductos(PrecioProducto2, PrecioProducto5);
// SumaProductos(PrecioProducto3, PrecioProducto4);

// let carrito = [PrecioProducto1, PrecioProducto3, PrecioProducto5];

// let sumaCarrito = 0;
// for (let i = 0; i < 3; i++) {
//     sumaCarrito = sumaCarrito + carrito[i];
//     console.log(sumaCarrito);
// }

// // let descuento ???? =
// // function descuento(sumaCarrito) {
// //     if (sumaCarrito > 1000)
// //     const descuento = sumaCarrito%5;
// // }

// let costoEnvio = sumaCarrito % 7.5;

// if (sumaCarrito > 50) {
//     console.log("El envio es gratuito");
// } else {
//     console.log("El envio tiene un costo de " + costoEnvio);
// }

// let totalCarrito = 0;

// function agregarAlCarrito (producto, stock) {
//     const stockExistente = validarStock(stock);
//     if (stockExistente === "Hay Stock") {
//         console.log(producto + " se ha enviado al carrito");
//         totalCarrito++;
//     }else {
//         console.log("No hay stock del producto");
//     }
// }

// function validarStock(stockDelProducto) {
//     if (stockDelProducto > 0) {
//         return "Hay Stock";
//     }else{
//         return "No tenemos stock";
//     }
// }

// agregarAlCarrito ("Notebook DELL 14", 8);


// DESAFIO COMPLEMENTARIO: ARRAYS --------!!!!

const productos = [];

function agregarEnTIenda(producto) {
    productos.push(producto);
    console.log(productos)
}

agregarEnTIenda({ id: 001, nombre: "Google Lens", precio: 300 });
agregarEnTIenda({ id: 002, nombre: "Teclado Gamer", precio: 45 });
agregarEnTIenda({ id: 003, nombre: "Nexus S10", precio: 850 });

function sacarDeTienda(productoId) {
    const index = productos.indexOf((producto) => producto.id === productoId);
    productos.splice(index, 1);
    console.log(productos);
}

sacarDeTienda(002)


const carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log(carrito)
}

agregarAlCarrito({ id: 121, nombre: "Parlante JBL ExtremeOh", precio: 500 });
agregarAlCarrito({ id: 212, nombre: "Mouse Gamer", precio: 40 });
agregarAlCarrito({ id: 333, nombre: "Echo Dot 3rd", precio: 150 });


const formasDePago = [];

// let formaDePago = 01 /* Tarjeta de Credito */
// if (formaDePago == 01) {
// }

function formaDePago(paymentMetod) {
    formasDePago.push(paymentMetod);
    console.log(formasDePago)

}
formaDePago({ metodo: "Tarjeta de Credito", Banco: "Santander", financiacion: "Cuotas", cantidad: 3 });
formaDePago({ metodo: "Tarjeta de Credito", Banco: "BBVA", financiacion: "Contado", cantidad: 1 });
formaDePago({ metodo: "Tarjeta de Credito", Banco: "ICBC", financiacion: "Cuotas", cantidad: 6 });


const CompraActual = carrito.concat(formasDePago);
console.log(CompraActual);
