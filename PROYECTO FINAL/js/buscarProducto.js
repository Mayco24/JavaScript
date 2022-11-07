//Buscador
const inputBusqueda = document.querySelector('#searchInput');
const btnBuscar = document.querySelector('#btnBusqueda');

input.addEventListener('keyup', e => {
    console.log(input.value);
    const newUsers = MProductos.filter(producto => `${producto.nombre.toLowerCase()} ${producto.tipo.toLowerCase()}`.includes(input.value.toLowerCase()));
    mostrarProductos(newUsers);
});

