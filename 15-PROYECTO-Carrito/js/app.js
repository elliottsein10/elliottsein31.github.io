//Variables para referenciar a objetos del documento
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciarCarrito');


const agregarCurso = (e) => {
    e.preventDefault();
    //e.target.classList.contains('agregar-carrito')
    if(e.target.classList.contains(agregar-carrito)){
        console.log("Presionaste el botón");
    }
}

const cargarEventListener = () => {
    //Agregar función de carga de cursos al carrito
    listaCursos.addEventListener('click', agregarCurso);
}

cargarEventListener();
