let productosSeleccionados = [];

let insertDOMcontent = document.querySelector("#insertDOMcontent");
let listaCarrito = document.querySelector("#listaCarrito");

document.addEventListener("DOMContentLoaded", async ()=>{
    fetchData();
})

function mostrarProductos( object ){
  object.forEach((element) => {
    insertDOMcontent.innerHTML += `
    <div id="${element.id}" class="div-caja">
      <img class="div-caja__img" src="${element.img}"></img>
      <p class="colorFontDiurno productosTitulo">${element.nombre}</p>
      <p class="colorPrecio">$${element.precio}</p>
      <button id="${element.id}" class="botonCompra agregarCarrito">Añadir al carrito</button> 
    </div>`
  });
}


/*
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
}

function buscarProducto( idProducto, buscarProductos ){

  let productoSeleccionado = buscarProductos.find( element => idProducto == element.id);

  let producto = [];
  producto.push(productoSeleccionado);
  /*Forma para poder agrupar un array como un acumulador
  productosSeleccionados = [ ...productosSeleccionados, ...producto ]
  agregarProductosCarrito();

}

/*Seleccionamos todos los botones del card

let buttonCard = document.querySelectorAll("#insertDOMcontent .div-caja button");

buttonCard.forEach((element)=> {
  element.addEventListener('click', (event)=>{
    event.preventDefault();
    let id = event.target.id;
    buscarProducto( id, productos );
  })
});

*/