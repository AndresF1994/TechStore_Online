// catalog.js - Mostrar productos y restringir acceso sin login
document.addEventListener('DOMContentLoaded', () => {
    const usuarioActivo = JSON.parse(localStorage.getItem('activeUser'));

  // Redirección si no hay usuario autenticado
    if (!usuarioActivo) {
    alert('Debes iniciar sesión para ver el catálogo.');
    window.location.href = 'login.html';
    return;
    }

    const contenedor = document.getElementById('catalogo-productos');
    const filtro = document.getElementById('categoria');

    const productos = [
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
    {
        id: 5,
        nombre: "Altavoz Bluetooth",
        precio: 195000,
        imagen: "../IMG/altavoz.png",
        categoria: "hogar",
    }
];
//FUNCIÓN PARA AGREGAR A CARRITO
const agregarAlCarrito = (producto) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const index = carrito.findIndex(p => p.id === producto.id);

    if (index !== -1) {
        carrito[index].cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${producto.nombre} agregado al carrito.`);
};

const mostrarProductos = (lista) => {
    contenedor.innerHTML = '';
        lista.forEach(p => {
            const card = document.createElement('div');
            card.classList.add('producto');
            card.innerHTML = `
            <img src="${p.imagen}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p>$${p.precio.toLocaleString('es-CO')}</p>
            <button data-id="${p.id}" class="btn-agregar">Agregar al carrito</button>
            `;
        contenedor.appendChild(card);
    });
};

filtro.addEventListener('change', () => {
    const valor = filtro.value;
    if (valor === 'todos') {
        mostrarProductos(productos);
    } else {
        const filtrados = productos.filter(p => p.categoria === valor);
        mostrarProductos(filtrados);
    }
});

mostrarProductos(productos);
});
