// Simulación de un contexto global
let contextoGlobal = {
    usuario: {
        nombre: "Luis Tarazona",
        email: "luiztara@ejemplo.com",
        direccion: "Perdomo 123",
        telefono: "123-456-7890"
    }
};

// Función para cargar la información del usuario
function cargarInformacionUsuario() {
    document.getElementById('nombre').value = contextoGlobal.usuario.nombre;
    document.getElementById('email').value = contextoGlobal.usuario.email;
    document.getElementById('direccion').value = contextoGlobal.usuario.direccion;
    document.getElementById('telefono').value = contextoGlobal.usuario.telefono;
}

// Función para actualizar la información del usuario
function actualizarInformacionUsuario(event) {
    event.preventDefault();

    contextoGlobal.usuario = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        direccion: document.getElementById('direccion').value,
        telefono: document.getElementById('telefono').value
    };

    alert("Información actualizada correctamente");
    console.log("Contexto global actualizado:", contextoGlobal);
}

// Cargar la información del usuario al cargar la página
document.addEventListener('DOMContentLoaded', cargarInformacionUsuario);

// Manejar el envío del formulario
document.getElementById('mi-cuenta-form').addEventListener('submit', actualizarInformacionUsuario);