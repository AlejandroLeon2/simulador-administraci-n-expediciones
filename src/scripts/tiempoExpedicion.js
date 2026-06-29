// Fecha en la que inició la expedición
const inicioExpedicion = new Date("2026-01-01T00:00:00");

function actualizarTiempo() {

    const ahora = new Date();

    // Hora actual
    const hora = ahora.toLocaleTimeString("es-PE");

    // Fecha actual
    const fecha = ahora.toLocaleDateString("es-PE", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    // Tiempo transcurrido desde el inicio de la expedición
    const diferencia = ahora - inicioExpedicion;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    // Día estelar (1 día terrestre = 10 días estelares)
    const diaEstelar = String(dias * 10).padStart(4, "0");

    // Actualizar el Sidebar
    document.getElementById("dia-estelar").textContent = diaEstelar;
    document.getElementById("hora-actual").textContent = hora;
    document.getElementById("fecha-actual").textContent =
        fecha.charAt(0).toUpperCase() + fecha.slice(1);

    document.getElementById("tiempo-expedicion").textContent =
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

export function iniciarTiempoExpedicion() {

    actualizarTiempo();

    setInterval(actualizarTiempo, 1000);

}