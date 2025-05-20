// cart.js - Mostrar productos del carrito y gestionar acciones

document.addEventListener('DOMContentLoaded', () => {
    const tabla = document.querySelector('#tabla-carrito tbody');
    const totalPagar = document.getElementById('total-pagar');

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const mostrarCarrito = () => {
    tabla.innerHTML = '';
    let total = 0;

    carrito.forEach((item, index) => {
      const subtotal = item.precio * item.cantidad;
        total += subtotal;

    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${item.nombre}</td>
        <td>$${item.precio.toLocaleString('es-CO')}</td>
        <td>${item.cantidad}</td>
        <td>$${subtotal.toLocaleString('es-CO')}</td>
        <td><button class="eliminar-btn" data-index="${index}">Eliminar</button></td>
        `;

    tabla.appendChild(fila);
    });

    totalPagar.textContent = `Total a pagar: $${total.toLocaleString('es-CO')}`;
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

tabla.addEventListener('click', (e) => {
    if (e.target.classList.contains('eliminar-btn')) {
        const index = e.target.getAttribute('data-index');
        carrito.splice(index, 1);
        mostrarCarrito();
    }
});

mostrarCarrito();
});
