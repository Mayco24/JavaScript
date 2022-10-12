function Producto (id, nombre, tipo, color, lanzamiento, precio, cantidad){
      this.id = id;
      this.nombre = nombre;
      this.tipo = tipo;
      this.color = color;
      this.lanzamiento = lanzamiento;
      this.precio = precio;
      this.cantidad = cantidad;
}


function Pedido (producto, cantidad){
    this.productos = producto;
    this.cantidad = cantidad;
}


const producto1 = new Producto(1,"Samsung Galaxy Z FOLD 4",'celular','black','2022', 389.999, 10);
const producto2 = new Producto(2, 'Samsung Galaxy S22 Ultra','celular','black','2022', 330.999, 6);
const producto3 = new Producto(3,'LG WING 5G','celular','black','2021', 125.999, 3);
const producto4 = new Producto(4,'Motorola Moto G200','celular','blue glacier','2022', 109.999, 4);
const producto5 = new Producto(5,'Iphone 13 Pro Max','celular','gris','2021', 410.999, 5);
const producto6 = new Producto(6,'Samsung Galaxy S22','celular','black','2022', 215.999, 6)
const producto7 = new Producto(7,'Samsung S20 FE 5G','celular','blue','2020', 130.999, 1);
const producto8 = new Producto(8,'Samsung S21 FE 5G','celular','blue','2021', 173.999, 5);
const producto9 = new Producto(9,'Xiaomi 12 Pro','celular','purple','2021', 74.999, 8);
const producto10 = new Producto(10,'Apple iPad 9ª generación','tablet','white','2021', 89.999, 7);
const producto11 = new Producto(11,'Xiaomi Mi Pad 5','tablet','black','2021', 142.999, 8);
const producto12 = new Producto(12,'Tablet Amazon Fire HD','tablet','black','2020', 23.999, 15);
const producto13 = new Producto(13,'Lenovo Tablet P11','tablet','grey','2021', 59.999, 9);
const producto14 = new Producto(14,'Samsung Galaxy Tab A7','tablet','white','2020', 35.999, 13);
const producto15 = new Producto(15,'Samsung Galaxy Tab A8','tablet','black','2021', 59.999, 4);
const producto16 = new Producto(16,'Samsung Galaxy Watch 5','reloj','purple','2022', 99.999, 8);
const producto17 = new Producto(17,'Samsung Galaxy Fit2','reloj','black','2020', 9.999, 16);
const producto18 = new Producto(18,'Smartwatch Amazfit Gts 2E Neg','reloj','black','2020', 23.499, 12);
const producto19 = new Producto(19,'Samsung Galaxy Watch 4','reloj','green','2021', 62.999, 8);
const producto20 = new Producto(20,'Xiaomi Redmi Watch Lite 2','reloj','black','2021', 12.499, 6);
const producto21 = new Producto(21, 'Samsung Galaxy Watch4 Classic','reloj','black','2021', 49.999, 13);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21];

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