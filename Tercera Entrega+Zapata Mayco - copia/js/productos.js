let productosSeleccionados = [];

let insertDOMcontent = document.querySelector("#insertDOMcontent");
let listaCarrito = document.querySelector("#listaCarrito");

// Objeto JSON Base de dato
const productos = [
  {
    img: "/Imagenes/Celulares/Samsung Galaxy Z Fold 4.jpg",
    id: 10111,
    nombre: "Samsung Galaxy Z FOLD 4",
    tipo: "CELULAR",
    color: "black",
    lanzamiento: "2022",
    precio: 389.999,
    cantidad: 10,
    descripcion: "Samsung Galaxy Z FOLD 4 Qualcomm Snapdragon 8+ Gen 1 12GB RAM 256GB"
  },

  {
    img: "/Imagenes/Celulares/Samsung Galaxy S22 ULTRA.jpg",
    id: 10112,
    nombre: "Samsung Galaxy S22 Ultra",
    tipo: "CELULAR",
    color: "black",
    lanzamiento: "2022",
    precio: 330.999,
    cantidad: 6,
    descripcion: "Samsung Galaxy S22 Ultra Exynos 2200 12GB RAM 256GB"
  },

  {
    img: "/Imagenes/Celulares/LG WING 5G.jpg",
    id: 10113,
    nombre: "LG WING 5G",
    tipo: "CELULAR",
    color: "black",
    lanzamiento: "2021",
    precio: 125.999,
    cantidad: 3,
    descripcion: "LG Wing 5G Qualcomm Snapdragon 765G 8GB RAM + 128 GB"
  },

  {
    img: "/Imagenes/Celulares/Moto G200.jpg",
    id: 10114,
    nombre: "Motorola Moto G200",
    tipo: "CELULAR",
    color: "blue glacier",
    lanzamiento: "2022",
    precio: 109.999,
    cantidad: 4,
    descripcion: "Motorola Moto G200 Snapdragon™ 888+ 5G 8GB RAM + 128 GB"
  },

  {
    img: "/Imagenes/Celulares/Iphone 13 Pro Max.jpg",
    id: 10115,
    nombre: "Iphone 13 Pro Max",
    tipo: "CELULAR",
    color: "gris",
    lanzamiento: "2021",
    precio: 410.999,
    cantidad: 5,
    descripcion: "Iphone 13 Pro Max A15 Bionic 6GB RAM 256GB"
  },

  {
    img: "/Imagenes/Celulares/Samsung Galaxy S22.jpg",
    id: 10116,
    nombre: "Samsung Galaxy S22",
    tipo: "CELULAR",
    color: "black",
    lanzamiento: "2022",
    precio: 215.999,
    cantidad: 6,
    descripcion: "Samsung Galaxy S22 Exynos 2200 8GB RAM 128GB"
  },

  {
    img: "/Imagenes/Celulares/Samsung S20 FE.jpg",
    id: 10117,
    nombre: "Samsung S20 FE 5G",
    tipo: "CELULAR",
    color: "black",
    lanzamiento: "2021",
    precio: 130.999,
    cantidad: 4,
    descripcion: "Samsung S20 FE 5G Qualcomm Snapdragon 865 6GB RAM 128GB"
  },

  {
    img: "/Imagenes/Celulares/Samsung S21 FE.jpg",
    id: 10118,
    nombre: "Samsung S21 FE 5G",
    tipo: "CELULAR",
    color: "blue",
    lanzamiento: "2021",
    precio: 173.999,
    cantidad: 5,
    descripcion: "Samsung S21 FE 5G Exynos 2100 6GB RAM 128GB"
  },

  {
    img: "/Imagenes/Celulares/Xiaomi 12 Pro.jpg",
    id: 10119,
    nombre: "Xiaomi 12 Pro",
    tipo: "CELULAR",
    color: "purple",
    lanzamiento: "2021",
    precio: 74.999,
    cantidad: 8,
    descripcion: "Xiaomi 12 Pro Snapdragon 8+ Gen 1 6GB RAM 256GB"
  },

  {
    img: "/Imagenes/tablet/Apple iPad (9ª generación) 10.2.jpg",
    id: 20111,
    nombre: "Apple iPad 9ª generación",
    tipo: "TABLET",
    color: "white",
    lanzamiento: "2021",
    precio: 89.999,
    cantidad: 7,
    descripcion: "Apple iPad 9ª generación A13 Bionic chip 3GB RAM 64GB"
  },

  {
    img: "/Imagenes/tablet/Xiaomi Mi Pad 5.jpg",
    id: 20112,
    nombre: "Xiaomi Mi Pad 5",
    tipo: "TABLET",
    color: "black",
    lanzamiento: "2021",
    precio: 142.999,
    cantidad: 8,
    descripcion: "Xiaomi Mi Pad 5 Qualcomm Snapdragon 860 6GB RAM 128GB"
  },

  {
    img: "/Imagenes/tablet/Tablet Amazon Fire HD.jpg",
    id: 20113,
    nombre: "Tablet Amazon Fire HD",
    tipo: "TABLET",
    color: "black",
    lanzamiento: "2020",
    precio: 23.999,
    cantidad: 15,
    descripcion: "Tablet Amazon Fire HD MediaTek Octa-core 2,0 GHz 3GB RAM 32GB"
  },

  {
    img: "/Imagenes/tablet/Lenovo Tablet P11.jpg",
    id: 20114,
    nombre: "Lenovo Tablet P11",
    tipo: "TABLET",
    color: "grey",
    lanzamiento: "2021",
    precio: 59.999,
    cantidad: 9,
    descripcion: "Lenovo Tablet P11 Qualcomm® Snapdragon™ 662 4GB RAM 128GB"
  },

  {
    img: "/Imagenes/tablet/Samsung Galaxy Tab A7.jpg",
    id: 20115,
    nombre: "Samsung Galaxy Tab A7",
    tipo: "TABLET",
    color: "white",
    lanzamiento: "2020",
    precio: 35.999,
    cantidad: 13,
    descripcion: "Samsung Galaxy Tab A7 Snapdragon 662 3GB RAM 32GB"
  },

  {
    img: "/Imagenes/tablet/Samsung Galaxy Tab A8.jpg",
    id: 20116,
    nombre: "Samsung Galaxy Tab A8",
    tipo: "TABLET",
    color: "black",
    lanzamiento: "2021",
    precio: 59.999,
    cantidad: 4,
    descripcion: "Samsung Galaxy Tab A8 Octa-core 2 GHz 4GB RAM 128GB"
  },

  {
    img: "/Imagenes/Relojes/Samsung Watch 5.webp",
    id: 30111,
    nombre: "Samsung Galaxy Watch 5",
    tipo: "RELOJ",
    color: "purple",
    lanzamiento: "2022",
    precio: 99.999,
    cantidad: 8,
    descripcion: "Samsung Galaxy Watch 5 Exynos W920 1.5GB RAM 16GB"
  },

  {
    img: "/Imagenes/Relojes/Samsung Fit 2.webp",
    id: 30112,
    nombre: "Samsung Galaxy Fit2",
    tipo: "RELOJ",
    color: "black",
    lanzamiento: "2020",
    precio: 9.999,
    cantidad: 12,
    descripcion: "Samsung Galaxy Fit2 4MB RAM 16MB"
  },

  {
    img: "/Imagenes/Relojes/Smart Watch Amazfit GTS 2E NEG.webp",
    id: 30113,
    nombre: "Smartwatch Amazfit Gts 2E",
    tipo: "RELOJ",
    color: "black",
    lanzamiento: "2020",
    precio: 23.499,
    cantidad: 16,
    descripcion: "Smartwatch Amazfit Gts Android 5.0 Bluetooth"
  },

  {
    img: "/Imagenes/Relojes/Samsung Smartwatch Galaxy 4 44 mm.webp",
    id: 30114,
    nombre: "Samsung Galaxy Watch 4",
    tipo: "RELOJ",
    color: "green",
    lanzamiento: "2021",
    precio: 62.999,
    cantidad: 8,
    descripcion: "Samsung Galaxy Watch 4 Exynos W920 1,5 GB RAM 16GB"
  },

  {
    img: "/Imagenes/Relojes/Smartwatch Xiaomi Redmi Watch Lite 2.webp",
    id: 30115,
    nombre: "Xiaomi Redmi Watch Lite 2",
    tipo: "RELOJ",
    color: "black",
    lanzamiento: "2021",
    precio: 12.499,
    cantidad: 6,
    descripcion: "Xiaomi Redmi Watch Lite 2 Bluetooth 5.0 GPS"
  },

  {
    img: "Imagenes/Relojes/Samsung Galaxy Watch4  Classic.webp",
    id: 30116,
    nombre: "Samsung Galaxy Watch4 Classic",
    tipo: "RELOJ",
    color: "black",
    lanzamiento: "2021",
    precio: 49.999,
    cantidad: 13,
    descripcion: "Samsung Galaxy Watch 4 Classic Exynos W920 1,5 GB RAM 16GB"
  },

];

document.addEventListener("DOMContentLoaded", ()=>{
  productosSeleccionados = JSON.parse(localStorage.getItem("productos")) || [];
  agregarProductosCarrito();
})


function sincronizarLocalStorage() {
  localStorage.setItem("productos", JSON.stringify(productosSeleccionados));
}

function mostrarProductos( object ){
  object.forEach((element) => {
    insertDOMcontent.innerHTML += `
    <div id="${element.id}" class="div-caja">
      <img class="div-caja__img" src="${element.img}"></img>
      <p class="colorFontDiurno pProductos">${element.nombre}</p>
      <p class="colorPrecio">$${element.precio}</p>
      <button id="${element.id}" class="botonCompra agregarCarrito">Añadir al carrito</button> 
    </div>`
  });
}

function agregarProductosCarrito(){
  listaCarrito.innerHTML = '';
  productosSeleccionados.forEach((element)=>{
    listaCarrito.innerHTML += `
        <tr>
          <td><img class="imgFitMiniatura" src="${element.img}"></img></td>
          <td class="text-center">${element.nombre}</td>
          <td class="text-center">$${element.precio}</td>
          <td class="text-center"><input id="" type="number" name="Cantidad" min="1" max="${element.cantidad}" value="1"/></td>
          <td class="text-center"><button id="${element.id}" class="borrar-producto">X
          </button></td>
        </tr>`
  })

  //Boton para eliminar
  let buttonDelete = document.querySelectorAll("#listaCarrito tr td button");
  buttonDelete.forEach(element =>{
    element.addEventListener("click", (e)=>{
      e.preventDefault();
      let id = e.target.id;
      productosSeleccionados = productosSeleccionados.filter( producto => producto.id != id);
      agregarProductosCarrito();
    })
  })



  sincronizarLocalStorage();
}

function buscarProducto( idProducto, buscarProductos ){

  let productoSeleccionado = buscarProductos.find( element => idProducto == element.id);

  let producto = [];
  producto.push(productoSeleccionado);
  /*Forma para poder agrupar un array como un acumulador*/
  productosSeleccionados = [ ...productosSeleccionados, ...producto ]
  agregarProductosCarrito();

}

mostrarProductos(productos);

/*Seleccionamos todos los botones del card*/

let buttonCard = document.querySelectorAll("#insertDOMcontent .div-caja button");

buttonCard.forEach((element)=> {
  element.addEventListener('click', (event)=>{
    event.preventDefault();
    let id = event.target.id;
    buscarProducto( id, productos );
  })
});

/*
const carrito = []
const totalProductos = []

function confirmarCompra() {
    const respuesta = prompt("Desea comprar nuestros productos?\n1) Si \n2) No");
    if (respuesta == "1") {
      return true;
    } else {
      return false;
    }
}

function mostrarCarritoActual() {
  for (const car of carrito){
    console.log("PRODUCTO"+ "\nNombre: " + car.productos.nombre + "\nTipo: " + car.productos.tipo + "\nColor: " + car.productos.color + "\nLanzamiento: Año "+ car.productos.lanzamiento + "\nPrecio: $" + car.productos.precio + "\nCantidad: " + car.cantidad);

    const subTotal = car.productos.precio * car.cantidad;

    alert("Producto añadido al carrito: " + car.productos.nombre + " por " + car.cantidad + " unidades");

    console.log("Subtotal : $" + subTotal);
    totalProductos.push(subTotal); 
  }
}

function sumaTotalProductos(){
  const totalPreciosProductos = totalProductos.reduce((acumulador, totalProductos) => acumulador + totalProductos, 0);
  console.log("TOTAL: $" + totalPreciosProductos);
  alert("Gracias por tu Compra" + " " + "El total es: $" + totalPreciosProductos);
}

function agregarProductoAlCarrito(id) {
    const productoEncontrado = productos.find(producto => producto.id == id);
    if(productoEncontrado == undefined){
      alert("No encontre lo que estas buscando");
    } else {
      const cantidad = prompt("Ingrese la cantidad de productos: " + productoEncontrado.nombre);
      if (cantidad <= productoEncontrado.cantidad){
        const nuevoPedido = new Pedido(productoEncontrado, cantidad);
        carrito.push(nuevoPedido);
      }
      else{
        alert("Por el momento tenemos hasta " + productoEncontrado.cantidad + " esta cantidad de productos");
      }
    }
}

function mostrarProductosYSeleccionar() {
    let menuAMostrar = "¿Que producto desea comprar?\n";
    productos.forEach(producto => {
      menuAMostrar += producto.id +") "+ producto.nombre +" - "+ producto.precio+"\n";
    })
    let respuesta = prompt(menuAMostrar);
    return respuesta;
}

function comprarProducto() {
    while (confirmarCompra()) {
      let productoSeleccionado = mostrarProductosYSeleccionar();
      //  Ahora que eligio un producto queremos agregarlo al carrito ✔
      agregarProductoAlCarrito(productoSeleccionado);
      //  Ahora que agrego el carrito quiero ver lo que fue comprando
      mostrarCarritoActual();
      let mensaje = prompt("Desea seguir comprando: \n1)SI \n2)NO");
      if (mensaje === "1")
        continue;
      else{
        sumaTotalProductos();
        break;
      }
    }
}

function buscarProducto(){
  console.log("***Busqueda del Producto***")
  let buscar = prompt("Ingrese el producto que desea buscar: ");

  const busqueda = productos.find(function(elemento){
    return (elemento.nombre == buscar);
  });

  if (busqueda){
    console.log(busqueda);
  }else{
    console.log("No se ha encontrado el producto...")
  }
}

comprarProducto() 
buscarProducto()

*/