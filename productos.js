const productos = [
  {
    id: 1,
    nombre: "Camiseta Elegante",
    categoria: "ropa",
    precio: 29.99,
    imagen: "/img/CamisetaElegante.png",
  },
  {
    id: 2,
    nombre: "Pantalón Moderno",
    categoria: "ropa",
    precio: 49.99,
    imagen: "/img/PantalonModerno.png",
  },
  {
    id: 3,
    nombre: "Smartphone Última Gen",
    categoria: "tecnologia",
    precio: 699.99,
    imagen: "/img/Smartphone.png",
  },
  {
    id: 4,
    nombre: "Laptop Ultraligera",
    categoria: "tecnologia",
    precio: 999.99,
    imagen: "/img/Laptop.png",
  },
  {
    id: 5,
    nombre: "Reloj Inteligente",
    categoria: "tecnologia",
    precio: 199.99,
    imagen: "/img/RelojInteligente.png",
  },
  {
    id: 6,
    nombre: "Libro Best Seller",
    categoria: "otros",
    precio: 19.99,
    imagen: "/img/Libro.png",
  },
  {
    id: 7,
    nombre: "Set de Joyería",
    categoria: "otros",
    precio: 89.99,
    imagen: "/img/Joyeria.png",
  },
  {
    id: 8,
    nombre: "Zapatillas Deportivas",
    categoria: "ropa",
    precio: 79.99,
    imagen: "/img/Zapatillas.png",
  },
];

const productosContainer = document.getElementById("productos-container");
const filtrosBotones = document.querySelectorAll(".filtro-btn");

function mostrarProductos(categoria) {
  productosContainer.innerHTML = "";
  const productosFiltrados =
    categoria === "todos"
      ? productos
      : productos.filter((p) => p.categoria === categoria);

  productosFiltrados.forEach((producto) => {
    const productoElement = document.createElement("div");
    productoElement.classList.add("producto");
    productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio.toFixed(2)}</p>
        `;
    productosContainer.appendChild(productoElement);
  });
}

filtrosBotones.forEach((boton) => {
  boton.addEventListener("click", () => {
    filtrosBotones.forEach((b) => b.classList.remove("activo"));
    boton.classList.add("activo");
    mostrarProductos(boton.dataset.categoria);
  });
});

// Animación suave al filtrar productos
function animarProductos() {
  const productos = document.querySelectorAll(".producto");
  productos.forEach((producto, index) => {
    producto.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
  });
}

// Mostrar todos los productos al cargar la página
mostrarProductos("todos");
animarProductos();

// Añadir animación cada vez que se filtran los productos
productosContainer.addEventListener("DOMNodeInserted", animarProductos);
