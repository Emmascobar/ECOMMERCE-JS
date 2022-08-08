/* -------------------------- */
// CURSO DE JS 2022
// Alumno: Emmanuel Escobar
/* -------------------------- */


// GLOBALES --------------->

// Products Slick
$('.products-slick').each(function () {
    var $this = $(this),
        $nav = $this.attr('data-nav');

    $this.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        speed: 300,
        dots: false,
        arrows: true,
        appendArrows: $nav ? $nav : false,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        ]
    });
});




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

// const productos = [];

// function agregarEnTIenda(producto) {
//     productos.push(producto);
//     console.log(productos)
// }

// agregarEnTIenda({ id: 001, nombre: "Google Lens", precio: 300 });
// agregarEnTIenda({ id: 002, nombre: "Teclado Gamer", precio: 45 });
// agregarEnTIenda({ id: 003, nombre: "Nexus S10", precio: 850 });

// function sacarDeTienda(productoId) {
//     const index = productos.indexOf((producto) => producto.id === productoId);
//     productos.splice(index, 1);
//     console.log(productos);
// }

// sacarDeTienda(002)


// const carrito = [];

// function agregarAlCarrito(producto) {
//     carrito.push(producto);
//     console.log(carrito)
// }

// agregarAlCarrito({ id: 121, nombre: "Parlante JBL ExtremeOh", precio: 500 });
// agregarAlCarrito({ id: 212, nombre: "Mouse Gamer", precio: 40 });
// agregarAlCarrito({ id: 333, nombre: "Echo Dot 3rd", precio: 150 });


// const formasDePago = [];

// // let formaDePago = 01 /* Tarjeta de Credito */
// // if (formaDePago == 01) {
// // }

// function formaDePago(paymentMetod) {
//     formasDePago.push(paymentMetod);
//     console.log(formasDePago)

// }
// formaDePago({ metodo: "Tarjeta de Credito", Banco: "Santander", financiacion: "Cuotas", cantidad: 3 });
// formaDePago({ metodo: "Tarjeta de Credito", Banco: "BBVA", financiacion: "Contado", cantidad: 1 });
// formaDePago({ metodo: "Tarjeta de Credito", Banco: "ICBC", financiacion: "Cuotas", cantidad: 6 });


// const CompraActual = carrito.concat(formasDePago);
// console.log(CompraActual);



PRE- ENTREGA PROYECTO FINAL: UNO --------!!!!


---------------- Objetos ----------------------

let listaDeProductos = [
    { id: 1, nombre: "Mouse Gamer", precio: 30, stock: 40 },
    { id: 2, nombre: "Teclado Gamer", precio: 40, stock: 40 },
    { id: 3, nombre: "Mini Ventilador USB", precio: 25, stock: 100 },
    { id: 4, nombre: "Funda Luminosa", precio: 10, stock: 100 },
    { id: 5, nombre: "Exprimidor de tubos", precio: 10, stock: 150 },
    { id: 6, nombre: "Calentador de tazas", precio: 30, stock: 80 },
    { id: 7, nombre: "Esponja Magica", precio: 10, stock: 60 },
    { id: 8, nombre: "Pizarra Infinita", precio: 30, stock: 40 },
    { id: 9, nombre: "Parlante MM", precio: 90, stock: 25 },
    { id: 10, nombre: "Lampara Garfield", precio: 50, stock: 30 },
    { id: 11, nombre: "Alcancia Squirtle", precio: 20, stock: 60 },
]
let busqueda2 = prompt("¿Cuanto desea gastar?");

const resultado2 = listaDeProductos.filter((producto) => producto.precio < busqueda2)

console.log(resultado2)



// ----------------agregar productos al carrito-------------------

let carrito = [];

function agregarAlCarrito(producto) {
    console.log(producto[0].stock);

    if (producto[0].stock > 0) {
        carrito.push(producto);
        console.log(carrito)
    } else {
        console.log("No hay stock del producto");
    }
}

let busqueda = prompt("¿Que desea comprar?");
const resultado = listaDeProductos.filter((producto) => producto.nombre == busqueda);

agregarAlCarrito(resultado);



// ------------------reduce: suma del carrito----------------------

// const totalCarrito = carrito.reduce((acc, producto) => { return acc + producto.precio} , 0 );
// console.log(totalCarrito);

// let sumaCarrito = 0;
// for (let i = 0; i < sumaCarrito.length; i++) {
//     sumaCarrito = sumaCarrito + carrito[i];
//     console.log(sumaCarrito);
// }

function suma(a, b) {
    return a + b;
  }

  const totalCarrito = carrito.reduce(suma);

  console.log(totalCarrito);


// ------------------- map -----------------------

const actualizacionPrecios = listaDeProductos.map((producto) => {
    return {
        precio: producto.precio * 1.50
    }
})
console.log(actualizacionPrecios)

// -------------- otros ------------------------

let compraRealizada = console.log("Felicitaciones, ha comprado el " + busqueda);


DESAFIO COMPLEMENTARIO. INTERACTUAR CON EL HTML --------!!!!

elegirNumero = prompt("elija un numero del 1 al 4"); 

const frases = [
    { texto: "Bienvenido a Inspecto Gadget" },
    { texto: "Llego la hora de disfrutar" },
    { texto: "Gracias por regresar" },
    { texto: "Hola! no te olvides de pasar por el SALE!" },
]

const aleatorio = frases[Math.floor(Math.random() * frases.length + elegirNumero)];
alert(aleatorio.texto);

let listaDeProductos = [
    { id: 1, nombre: "Mouse Gamer", precio: 30, stock: 40 },
    { id: 2, nombre: "Teclado Gamer", precio: 40, stock: 40 },
    { id: 3, nombre: "Mini Ventilador USB", precio: 25, stock: 100 },
]


let header = document.querySelector("#header");
console.log(header);

let searchBar = document.querySelector(".header-search")
console.log(searchBar);

const traduccion = document.querySelector(".gold").textContent= "COLECCION DE ORO";

let agregar = document.createElement("p");
agregar.innerHTML = "<p><b>Nuevas ofertas!!!</b></p>";

const textOfertas = document.querySelector(".textbody");

textOfertas.insertBefore(agregar, textOfertas[1]);

let eliminar = document.querySelector(".bronce");
eliminar.remove();

let espacioVacio = document.querySelector(".agregado");

for (let producto of listaDeProductos) {
    let lista = document.createElement("li");
    lista.innerHTML = producto.nombre;
    espacioVacio.appendChild(lista);
}

for (let producto of listaDeProductos) {
    let resumen = document.createElement("div");
    resumen.innerHTML = `<h3>${producto.nombre}<h3>
    <p>${producto.precio}</p>`;

    espacioVacio.appendChild(resumen);
}

//  EVENTOS -------------------------->

// let boton =
// document.getElementsByClassName ("add-to-cart-btn")
//  boton.addEventListener("click", respuestaClick)
//  function respuestaClick (){
//  console. log("Se agrego el producto al carrito!");
//  }