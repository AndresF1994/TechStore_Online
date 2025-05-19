// main.js - Carga de productos destacados en la página principal
document.addEventListener('DOMContentLoaded', () => {
  // Acceso controlado al catálogo desde el botón del banner
    const verBtn = document.getElementById('ver-productos-btn');
    if (verBtn) {
    verBtn.addEventListener('click', () => {
        const user = localStorage.getItem('activeUser');
        if (user) {
        window.location.href = 'catalogo.html';
        } else {
        alert('Debes iniciar sesión para acceder al catálogo.');
        window.location.href = 'login.html';
        }
    });
}
    const contenedor = document.getElementById("featured-products-container");

  // Simulación de productos destacados
    const productosDestacados = [
    {
        id: 1,
        nombre: "Smartphone X Pro",
        precio: 1450000,
        imagen: "../IMG/celular.png",
        categoria: "tecnologia",
    },
    {
        id: 2,
        nombre: "Audífonos Inalámbricos",
        precio: 260000,
        imagen: "../IMG/audifonos.png",
        categoria: "accesorios",
    },
    {
        id: 3,
        nombre: "Smartwatch Fitness",
        precio: 390000,
        imagen: "../IMG/smartwatch.png",
        categoria: "salud",
    },
    {
        id: 4,
        nombre: "Altavoz Bluetooth",
        precio: 195000,
        imagen: "../IMG/altavoz.png",
        categoria: "hogar",
    },
    ];

  // Función para crear tarjetas de producto y agregarlas al DOM
    const cargarProductos = (productos) => {
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio.toLocaleString("es-CO")}</p>
        <button class="btn-agregar" data-id="${
            producto.id
        }">Agregar al carrito</button>
        `;

        contenedor.appendChild(card);
    }
);
    };
    cargarProductos(productosDestacados);
}
);
