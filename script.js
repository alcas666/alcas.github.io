// Lista de productos
let productos = [
    { id: 1, nombre: 'Remera negra', categoria: 'masculino', descripcion: 'Remera de algodón, básica.', precio: 20000, imagen: 'imagenes/remera.jpg', descuento: '10% OFF' },
    { id: 2, nombre: 'Vestido de Dama', categoria: 'femenino', descripcion: 'Vestido liviano, ideal para el verano.', precio: 60000, imagen: 'imagenes/vestidodama.jpg', descuento: '15% OFF' },
    { id: 3, nombre: 'Remera', categoria: 'Niño', descripcion: 'Remera cómoda para niños con estampa de Ironman.', precio: 13000, imagen: 'imagenes/remeraniño.jpg', descuento: '' },
];

// Función para mostrar productos
function mostrarProductos(productos) {
    const contenedor = document.getElementById("productos-container");
    contenedor.innerHTML = ""; // Limpia el contenedor antes de mostrar productos

    productos.forEach(producto => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("producto");

        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" onclick="abrirImagen('${producto.imagen}')">
            <h3>${producto.nombre}</h3>
            <p class="descripcion">${producto.descripcion}</p>
            <p class="precio">$${producto.precio.toLocaleString()}</p>
            <p class="descuento">${producto.descuento}</p>
        `;

        contenedor.appendChild(tarjeta);
    });
}

// Función para filtrar productos por categoría
function filtrarCategoria(categoria) {
    const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
    mostrarProductos(productosFiltrados);
}

// Función para mostrar todos los productos
function mostrarTodo() {
    mostrarProductos(productos);
}

// Función para abrir una imagen en el modal
function abrirImagen(imagen) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "block"; // Muestra el modal
    modalImg.src = imagen; // Establece la imagen en el modal
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Oculta el modal
}

// Llamada inicial para mostrar todos los productos al cargar la página
mostrarProductos(productos);
