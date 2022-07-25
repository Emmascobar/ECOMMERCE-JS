/*

1) LEER LOS DATOS DEL CURSO SELECCIONADO
2) MOSTRANDO EN EL CARRITO LOS CURSOS SELECCIONADOS
3) ACTUALIZAR LA CANTIDAD DE CURSOS EN EL CARRITO
4) ELIMINAR UN CURSO DEL CARRITO
5) VACIAR EL CARRITO DE COMPRA

*/

//VARIABLES

const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
  listaCursos.addEventListener("click", agregarCurso);

  //Eliminar cursos del carrito
  carrito.addEventListener("click", eliminarCurso);

  //Vaciando el carrito

  vaciarCarritoBtn.addEventListener("click", () => {
    articulosCarrito = [];

    limpiarHTML();
  });
}
//FUNCIONES

// (1) A través del boton podemos acceder al curso seleccionado
function agregarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

// (4) Eliminar curso del carrito

function eliminarCurso(e) {
  e.preventDefault();
  // console.log(e.target.classList);
  if (e.target.classList.contains("borrar-curso")) {
    const cursoID = e.target.getAttribute("id");

    //Eliminar del arreglo de articulosCarrito por el id
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoID);

    carritoHTML();
  }
}

// (2) Leer los datos del curso seleccionado y lo extrae
function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector(".card-title").innerText,
    precio: curso.querySelector("h6").innerText,
    id: curso.querySelector("a").getAttribute("id"),
    cantidad: 1,
  };

  //Revisa si un elemento ya existe en el carrito

  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    //Actualizamos la cantidad
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; // retorna objeto actualizado
      } else {
        return curso; // retorna los objetos que no son duplicados
      }
    });
    articulosCarrito = [...cursos];
  } else {
    //Agregar elementos al arreglo del carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
  }
  carritoHTML();
}

// (3) Muestra el Carrito en el HTML

function carritoHTML() {
  //Limpiar el HTML
  limpiarHTML();

  //Recorre el carrito y genera el HTML
  articulosCarrito.forEach((curso) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${curso.titulo}</td>
    <td>${curso.precio}</td>
    <td>${curso.cantidad}</td>
    <td>
    <a href="" class="borrar-curso" id="${curso.id}">x</a>
    </td>`;
    //Agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });
}

// (5) Elimina los cursos del HTML

function limpiarHTML() {
  contenedorCarrito.innerHTML = "";
}
