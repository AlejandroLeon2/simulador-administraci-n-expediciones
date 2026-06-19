import "../../css/styles.css";
import { astronautas as datosIniciales } from "../../data/astronautas.js";
import { renderCardAstronauta } from "../../componentes/cardAstronauta.js";
import { renderSelectedAstronaut } from "../../componentes/renderSelectAstronauta.js";

// 📦 ESTADO GLOBAL DE LA APLICACIÓN
let listaAstronautas = [...datosIniciales];
let busquedaTexto = "";
let filtroEspecialidad = "TODOS";

// 🔍 1. FUNCIÓN DE FILTRADO (Retorna el filtro limpio)
function mostrarAstronautas() {
    return listaAstronautas.filter((astronauta) => {
        // Filtro por barra de búsqueda (Nombre)
        const coincideNombre = astronauta.nombre
            .toLowerCase()
            .includes(busquedaTexto.toLowerCase());

        // Filtro por Especialidad directo
        const espAstronauta = (astronauta.especialidad || "").toUpperCase().trim();
        const espFiltro = filtroEspecialidad.toUpperCase().trim();

        // Si es TODOS da paso libre. Si no, compara de forma exacta.
        const coincideEspecialidad = espFiltro === "TODOS" || espAstronauta === espFiltro;

        return coincideNombre && coincideEspecialidad;
    });
}

// 🖥️ FUNCIÓN RENDERIZAR
export function renderizarAstronautas() {
    const container = document.getElementById("astronautas-container");
    if (!container) return;

    container.innerHTML = "";

    // OBTENEMOS EL FILTRO
    const filtrados = mostrarAstronautas();

    // ✨ LA SOLUCIÓN: Usamos [...filtrados] para crear una COPIA exacta 
    // antes de hacer el .sort(), así no destruimos la lista original.
    const astronautasOrdenados = [...filtrados].sort((a, b) => b.experiencia - a.experiencia);

    // Actualizar el panel superior con el primero del resultado
    if (astronautasOrdenados.length > 0) {
        renderSelectedAstronaut(astronautasOrdenados[0]);
    }

    // Inyectar tarjetas en el grid inferior usando la lista ordenada limpia
    astronautasOrdenados.forEach((astronauta) => {
        const card = renderCardAstronauta(astronauta);

        card.addEventListener("click", (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
            renderSelectedAstronaut(astronauta);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        container.appendChild(card);
    });
}

// ⚡ ESCUCHADORES DE EVENTOS ACTUALIZADOS
function configurarEventosFiltros() {
    const inputBuscar = document.getElementById("search-astronauta");
    const selectEspecialidad = document.getElementById("filter-especialidad");

    if (inputBuscar) {
        inputBuscar.addEventListener("input", (e) => {
            busquedaTexto = e.target.value;
            renderizarAstronautas();
        });
    }

    if (selectEspecialidad) {
        selectEspecialidad.addEventListener("change", (e) => {
            // Guardamos el valor exacto seleccionado
            filtroEspecialidad = e.target.value;
            renderizarAstronautas();
        });
    }
}

// =======================================================
// OPERACIONES CRUD (AGREGAR, ELIMINAR, MODIFICAR)
// =======================================================

export function agregarAstronauta(nuevoAstro) {
    const proximoId = listaAstronautas.length > 0 
        ? Math.max(...listaAstronautas.map(a => a.id)) + 1 
        : 1;

    listaAstronautas.push({
        id: proximoId,
        nombre: nuevoAstro.nombre || "Sin Nombre",
        especialidad: nuevoAstro.especialidad || "Ingeniero",
        experiencia: Number(nuevoAstro.experiencia) || 10,
        energia: 100,
        salud: 100,
        estado: "Disponible",
        expediciones: 0,
        imagen: nuevoAstro.imagen || "https://photoaid.com/images/before-after/after/default.png",
        descripcion: nuevoAstro.descripcion || "Personal técnico integrado al panel de control."
    });

    renderizarAstronautas();
}

export function eliminarAstronauta(id) {
    if (!confirm("¿Deseas dar de baja a este astronauta?")) return;
    listaAstronautas = listaAstronautas.filter(astro => astro.id !== id);
    renderizarAstronautas();
}

export function modificarAstronauta(id, datosNuevos) {
    listaAstronautas = listaAstronautas.map((astro) => {
        if (astro.id === id) {
            return { ...astro, ...datosNuevos };
        }
        return astro;
    });
    renderizarAstronautas();
}

function configurarBotonesGlobales() {
    const btnNuevo = document.getElementById("btn-agregar-astronauta");
    const modal = document.getElementById("modal-astronauta");
    const btnCerrar = document.getElementById("btn-cerrar-modal");
    const formulario = document.getElementById("form-astronauta");

    if (!modal || !btnNuevo) return;

    btnNuevo.addEventListener("click", () => {
        if (formulario) formulario.reset();
        modal.classList.remove("hidden");
    });

    if (btnCerrar) {
        btnCerrar.addEventListener("click", () => {
            modal.classList.add("hidden");
        });
    }

    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("modal-nombre").value;
            const specialty = document.getElementById("modal-especialidad").value;
            const exp = document.getElementById("modal-experiencia").value;
            const desc = document.getElementById("modal-descripcion").value;

            agregarAstronauta({
                nombre: nombre,
                especialidad: specialty,
                experiencia: exp,
                descripcion: desc
            });

            modal.classList.add("hidden");
        });
    }
}

// 🚀 EJECUCIÓN INICIAL
configurarEventosFiltros();
configurarBotonesGlobales();
renderizarAstronautas();