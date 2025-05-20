document.addEventListener('DOMContentLoaded', () => {
    const pedidoSpan = document.getElementById('numero-pedido');

  // Generar número de pedido aleatorio
const generarNumeroPedido = () => {
    return '#' + Math.floor(100000 + Math.random() * 900000);
};

  // Mostrar el número en pantalla
if (pedidoSpan) {
    pedidoSpan.textContent = generarNumeroPedido();
}

  // Limpiar el carrito
localStorage.removeItem('carrito');
});