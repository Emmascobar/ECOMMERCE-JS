var productos = [
  {nombre: "zapatilla", precio: 23000, id: 1},
  {nombre: "Casco", precio: 3000, id: 2},
  {nombre: "Remera", precio: 2000, id: 3},
  {nombre: "Peine", precio: 12000, id: 4},
  {nombre: "Gorro", precio: 2000, id: 5},
  {nombre: "Anteojos", precio: 4000, id: 6},
  {nombre: "Radio", precio: 54000, id: 7},
  {nombre: "Pava", precio: 12000, id: 8},
]
var listaID = document.getElementById('list');
var carritoID = document.getElementById('carrito');
var totalID = document.getElementById('total');

console.log(carritoID);

var arr = [];
var carrito = [];
var carritoArr = [];


function lista(){
 productos.map(producto =>{
   var template = `
   <div class="cardP-card">
     <h4>${producto.nombre}</h4>
     <p>$${producto.precio}</p>
     <button onclick="agregar(this)" id=${producto.id}>Agregar</button>
   </div>
   `
   arr.push(template)
 })

 listaID.innerHTML = arr
}

lista();
getStorage();

function getStorage(){
  var carritoGuardado = localStorage.getItem('carrito');
  var carritoStorage = JSON.parse(carritoGuardado);
  if(carritoStorage){
    carrito = carritoStorage;
    imprimirLista()
  }


}

function agregar(e){
  var a = productos.filter(producto => producto.id == e.id);
  carrito.push(a);
  console.log(carrito);
  imprimirLista()
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function imprimirLista(){
  carritoArr = [];
  carrito.map(producto =>{
    console.log(producto);
    var template = `
    <li>
      ${producto[0].nombre} - ${producto[0].precio}
    </li>
    `
    carritoArr.push(template)
  })

  carritoID.innerHTML = carritoArr
  calcularTotal()
}

function calcularTotal(){
 //const total = carrito.reduce( (a,b) => a[0].precio + b[0].precio );
 var precios = carrito.map(producto => producto[0].precio)
 const total = precios.reduce( (a,b) => a + b );
 console.log(total);

 totalID.innerHTML = total
}

function borrar(){
  carrito = []
  totalID.innerHTML = 0
  localStorage.clear();
  imprimirLista()
}
