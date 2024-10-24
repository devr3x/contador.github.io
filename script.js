// Establecer la fecha objetivo para la cuenta atrás
const fechaObjetivo = new Date("2024-12-31T00:00:00").getTime(); // Cambia la fecha aquí

// Actualizar la cuenta atrás cada segundo
const x = setInterval(function() {
    const ahora = new Date().getTime();
    const distancia = fechaObjetivo - ahora;

    // Calcular el tiempo restante
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Mostrar los resultados en el HTML
    document.getElementById("dias").innerText = String(dias).padStart(2, '0');
    document.getElementById("horas").innerText = String(horas).padStart(2, '0');
    document.getElementById("minutos").innerText = String(minutos).padStart(2, '0');
    document.getElementById("segundos").innerText = String(segundos).padStart(2, '0');

    // Si la cuenta atrás ha terminado
    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("contador").innerHTML = "¡Tiempo Expirado!";
    }
}, 1000);

// Función para reiniciar la cuenta atrás
function reiniciar() {
    clearInterval(x);
    document.getElementById("contador").innerHTML = `
        <div class="time-block">
            <span id="dias">00</span>
            <span class="label">Días</span>
        </div>
        <div class="time-block">
            <span id="horas">00</span>
            <span class="label">Horas</span>
        </div>
        <div class="time-block">
            <span id="minutos">00</span>
            <span class="label">Minutos</span>
        </div>
        <div class="time-block">
            <span id="segundos">00</span>
            <span class="label">Segundos</span>
        </div>
    `;
    // Reiniciar la fecha objetivo o establecer una nueva fecha
    const nuevaFechaObjetivo = new Date("2024-12-31T00:00:00").getTime();
    iniciarCuentaAtras(nuevaFechaObjetivo);
}

// Función para iniciar la cuenta atrás
function iniciarCuentaAtras(fechaObjetivo) {
    const x = setInterval(function() {
        const ahora = new Date().getTime();
        const distancia = fechaObjetivo - ahora;

        // Calcular el tiempo restante
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        // Mostrar los resultados en el HTML
        document.getElementById("dias").innerText = String(dias).padStart(2, '0');
        document.getElementById("horas").innerText = String(horas).padStart(2, '0');
        document.getElementById("minutos").innerText = String(minutos).padStart(2, '0');
        document.getElementById("segundos").innerText = String(segundos).padStart(2, '0');

        // Si la cuenta atrás ha terminado
        if (distancia < 0) {
            clearInterval(x);
            document.getElementById("contador").innerHTML = "¡Tiempo Expirado!";
        }
    }, 1000);
}

// Iniciar la cuenta atrás al cargar la página
window.onload = function() {
    iniciarCuentaAtras(fechaObjetivo);
}
