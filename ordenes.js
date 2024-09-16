// Simulación de datos de órdenes para el usuario autenticado
const misOrdenes = [
    { id: 'ORD-001', fecha: '2024-03-15', productos: [
        { nombre: 'Camiseta Elegante', precio: 29.99 },
        { nombre: 'Pantalón Moderno', precio: 49.99 }
    ]},
    { id: 'ORD-002', fecha: '2024-03-20', productos: [
        { nombre: 'Smartphone Última Gen', precio: 699.99 }
    ]},
    { id: 'ORD-003', fecha: '2024-03-25', productos: [
        { nombre: 'Libro Best Seller', precio: 19.99 },
        { nombre: 'Set de Joyería', precio: 89.99 },
        { nombre: 'Zapatillas Deportivas', precio: 79.99 }
    ]}
];

const ordenesLista = document.getElementById('ordenes-lista');
const ordenDetalle = document.getElementById('orden-detalle');
const ordenInfo = document.getElementById('orden-info');
const cerrarDetalle = document.querySelector('.cerrar');

// Función para mostrar la lista de órdenes
function mostrarOrdenes() {
    ordenesLista.innerHTML = '';
    misOrdenes.forEach(orden => {
        const ordenCard = document.createElement('div');
        ordenCard.classList.add('orden-card');
        ordenCard.innerHTML = `
            <div class="orden-numero">Orden ${orden.id}</div>
            <div class="orden-fecha">Fecha: ${orden.fecha}</div>
        `;
        ordenCard.addEventListener('click', () => mostrarDetalleOrden(orden));
        ordenesLista.appendChild(ordenCard);
    });
}

// Función para mostrar el detalle de una orden
function mostrarDetalleOrden(orden) {
    ordenInfo.innerHTML = `
        <h4>Orden ${orden.id}</h4>
        <p>Fecha: ${orden.fecha}</p>
        <h5>Productos:</h5>
        <ul class="producto-lista">
            ${orden.productos.map(producto => `
                <li class="producto-item">
                    <span class="producto-nombre">${producto.nombre}</span>
                    <span class="producto-precio">$${producto.precio.toFixed(2)}</span>
                </li>
            `).join('')}
        </ul>
        <p><strong>Total: $${calcularTotal(orden.productos).toFixed(2)}</strong></p>
    `;
    ordenDetalle.style.display = 'block';
}

// Función para calcular el total de una orden
function calcularTotal(productos) {
    return productos.reduce((total, producto) => total + producto.precio, 0);
}

// Evento para cerrar el detalle de la orden
cerrarDetalle.addEventListener('click', () => {
    ordenDetalle.style.display = 'none';
});

// Cerrar el detalle si se hace clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target == ordenDetalle) {
        ordenDetalle.style.display = 'none';
    }
});

// Mostrar las órdenes al cargar la página
mostrarOrdenes();