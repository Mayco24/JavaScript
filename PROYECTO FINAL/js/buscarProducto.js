//Buscador
const inputBusqueda = document.querySelector('#searchInput');
const btnBuscar = document.querySelector('#btnBusqueda');

const busqueda = () => {
    let buscar =  inputBusqueda.value
    buscar = buscar.toUpperCase();
    const buscarProducto = MProductos.filter(elemento => elemento.id == buscar || elemento.nombre.toUpperCase().includes(buscar)|| elemento.tipo.toUpperCase().includes(buscar));
    console.log(buscarProducto);
    mostrarProductos( buscarProducto );
};

btnBuscar.addEventListener("click",busqueda);
