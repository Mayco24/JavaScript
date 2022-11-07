const datosJson = './js/db/productos.json'

const MProductos = []

const fetchData = async () => {
    try {
        const res = await fetch(datosJson)
        const data = await res.json()
        console.log("Base de datos cargada");
        data.forEach(producto => {
            MProductos.push(producto);
        });
        mostrarProductos( MProductos );
        
    }
    catch (error){
        console.log(error)
    }
}


/*
const MProductos = [];

fetch (datosJson)
    .then((response) => response.json())
    .then(data => {
        data.forEach(producto => {
            MProductos.push(producto);
        });
        mostrarProductos( MProductos );
    });
*/
