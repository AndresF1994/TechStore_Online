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
        imagen: "../img/smartphone.jpg",
        categoria: "tecnologia"
    },
    {
        id: 2,
        nombre: "Audífonos Inalámbricos",
        precio: 260000,
        imagen: "../img/audifonos.jpg",
        categoria: "accesorios"
    },
    {
        id: 3,
        nombre: "Smartwatch Fitness",
        precio: 390000,
        imagen: "../img/smartwatch.jpg",
        categoria: "salud"
    },
    {
        id: 4,
        nombre: "Altavoz Bluetooth",
        precio: 195000,
        imagen: "../img/altavoz.jpg",
        categoria: "hogar"
    },
    {
        id: 5,
        nombre: "Gafas VR Pro",
        precio: 980000,
        imagen: "../img/gafasvr.jpg",
        categoria: "tecnologia"
    }
];

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
