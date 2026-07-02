import "../../css/styles.css";
import { renderCardAstronauta } from "../../componentes/cards/cardAstronauta.js";
import { renderSelectedAstronaut } from "../../componentes/renderSelectAstronauta.js";
import { ElementoBuilder } from "../../scripts/elementHtml.js";
import { FilterComponent } from "../../componentes/ui/filterComponents.js";
import astronautas from "./astronautas.js";

// 📦 ESTADO GLOBAL DE LA APLICACIÓN
let busquedaTexto = "";
let filtroEspecialidad = "TODOS";
let astronautaEditando = null;

// ============================================================================
// CONFIGURACIÓN DE FILTROS
// ============================================================================
const configuracionFiltros = {
    busqueda: {
        tipo: 'input',
        id: "search-astronauta",
        placeholder: "Buscar por nombre...",
        clases: "flex-1 bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-cyan-500 uppercase tracking-wider"
    },
    especialidad: {
        tipo: 'select',
        id: "filter-especialidad",
        clases: "bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-cyan-500 text-slate-400 cursor-pointer",
        opciones: [
            { valor: "TODOS", texto: "Todas las Especialidades" },
            { valor: "PILOTO", texto: "Piloto" },
            { valor: "INGENIERO", texto: "Ingeniero" },
            { valor: "CIENTÍFICO", texto: "Científico" },
            { valor: "MÉDICO", texto: "Médico" }
        ]
    },
    contenedor: {
        tipo: 'container',
        clases: "flex flex-col sm:flex-row gap-4 mb-6"
    }
};


// NUEVA VISTA BASE EXPORTADA (Para que index.js renderice los contenedores)

/*
mapa de la estructura paginaAstronautas
<div>
  ├── <div> (mainContainer - con clases)
  │     ├── <div> (header - con clases)
  │     │     ├── <div> (headerContent - con clases)
  │     │     │     ├── <h1> (title - con clases, texto)
  │     │     │     ├── <p> (subtitle - con clases, texto)
  │     │     │     └── <button> (btnAgregar - con clases, texto, id)
  │     ├── <div> (selectedContainer - con clases, id)
  │     ├── <div> (filtrosContainer - usando FilterContainer)
  │     │     ├── <input> (busqueda - usando FilterInput)
  │     │     └── <select> (especialidad - usando FilterSelect)
  │     └── <div> (astronautasContainer - con clases, id)
  └── <div> (modal - con clases, id)
        └── <div> (modalContent - con clases)
              ├── <h2> (modalTitle - con clases, texto)
              └── <form> (modalForm - con clases, id)
                    ├── <div> (formGroups - varios)
                    └── <div> (formActions - con clases)
                          ├── <button> (btnCerrar - con clases, texto, id)
                          └── <button> (btnGuardar - con clases, texto, id)
*/
export function paginaAstronautas() {
    const $mainContainer = new ElementoBuilder("div").clase("text-white");
    // Header
    const $header = new ElementoBuilder("div").clase("flex justify-between items-center mb-6");
    const $headerContent = new ElementoBuilder("div");
    const $title = new ElementoBuilder("h1").clase("text-2xl font-black tracking-wider uppercase").texto("Panel de Tripulación");
    const $subtitle = new ElementoBuilder("p").clase("text-xs text-slate-400").texto("Gestión de personal y visualización biométrica del simulador.");
    $headerContent.hijo($title.build()).hijo($subtitle.build());

    const $btnAgregar = new ElementoBuilder("button").clase("px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase rounded-lg transition-all cursor-pointer tracking-wider").atributo("id", "btn-agregar-astronauta").texto("+ Registrar Astronauta");
    $header.hijo($headerContent.build()).hijo($btnAgregar.build());

    // Contenedor de astronauta seleccionado
    const $selectedContainer = new ElementoBuilder("div").clase("mb-6").atributo("id", "selected-astronaut-container");

    // Contenedor de filtros usando componente genérico
    const $filtrosContainer = FilterComponent({
        ...configuracionFiltros.contenedor,
        componentes: [
            FilterComponent(configuracionFiltros.busqueda),
            FilterComponent(configuracionFiltros.especialidad)
        ]
    });

    // Contenedor de astronautas
    const $astronautasContainer = new ElementoBuilder("div").clase("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center").atributo("id", "astronautas-container");

    $mainContainer.hijo($header.build());
    $mainContainer.hijo($selectedContainer.build());
    $mainContainer.hijo($filtrosContainer);
    $mainContainer.hijo($astronautasContainer.build());

    // Modal (mantenido como HTML string por complejidad)
    const modalHTML = `
        <div id="modal-astronauta" style="display: none;" class="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
            <div class="bg-slate-950 border border-cyan-800 rounded-xl p-6 w-full max-w-md max-h-[85vh] overflow-y-auto shadow-[0_0_25px_rgba(34,211,238,0.15)] flex flex-col">
                
                <h2 class="text-xl font-bold text-cyan-400 mb-4 tracking-wider uppercase">
                    Astronauta
                </h2>

                <form id="form-astronauta" class="space-y-4 text-sm text-slate-300">
                    <div>
                        <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Nombre</label>
                        <input id="modal-nombre" type="text" class="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500" required>
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Especialidad</label>
                        <select id="modal-especialidad" class="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none focus:border-cyan-500 cursor-pointer">
                            <option value="Piloto">Piloto</option>
                            <option value="Ingeniero">Ingeniero</option>
                            <option value="Científico">Científico</option>
                            <option value="Médico">Médico</option>
                        </select>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Experiencia</label>
                            <input id="modal-experiencia" type="number" min="0" max="100" class="w-full p-2 rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500" required>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Energía</label>
                            <input id="modal-energia" type="number" min="0" max="100" class="w-full p-2 rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500" value="100">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Salud</label>
                            <input id="modal-salud" type="number" min="0" max="100" class="w-full p-2 rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500" value="100">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Estado</label>
                            <select id="modal-estado" class="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none focus:border-cyan-500 cursor-pointer">
                                <option value="Disponible">Disponible</option>
                                <option value="En misión">En misión</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Expediciones</label>
                        <input id="modal-expediciones" type="number" min="0" class="w-full p-2 rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500" value="0">
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Imagen URL</label>
                        <input id="modal-imagen" type="text" class="w-full p-2 rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500">
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Descripción</label>
                        <textarea id="modal-descripcion" rows="3" class="w-full p-2 rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 resize-none"></textarea>
                    </div>

                    <div class="flex gap-3 pt-2">
                        <button type="button" id="btn-cerrar-modal" class="flex-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 font-bold py-2 rounded text-xs tracking-wider uppercase transition-colors">
                            Cancelar
                        </button>
                        <button type="submit" id="btn-guardar-astronauta" class="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-2 rounded shadow-[0_0_15px_rgba(6,182,212,0.3)] text-xs tracking-wider uppercase transition-all">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;

    return $mainContainer.build().outerHTML + modalHTML;
}

function normalizar(texto) {
    return (texto || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
        .trim();
}

// 🔍 FILTRADO
function mostrarAstronautas() {
    return astronautas.getListAstronautas().filter((astronauta) => {
        const coincideNombre = astronauta.nombre
            .toLowerCase()
            .includes(busquedaTexto.toLowerCase());

        const espAstronauta = normalizar(astronauta.especialidad);
        const espFiltro = normalizar(filtroEspecialidad);

        const coincideEspecialidad =
            !espFiltro ||
            espFiltro === "TODOS" ||
            espAstronauta === espFiltro;

        return coincideNombre && coincideEspecialidad;
    });
}

// 🖥️ FUNCIÓN RENDERIZAR
export function renderizarAstronautas() {
    const container = document.getElementById("astronautas-container");
    if (!container) return;

    container.innerHTML = "";
    const filtrados = mostrarAstronautas();
    const astronautasOrdenados = [...filtrados].sort((a, b) => b.experiencia - a.experiencia);

    if (astronautasOrdenados.length > 0) {
        renderSelectedAstronaut(astronautasOrdenados[0]);
    }

    if (astronautasOrdenados.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center p-10">
                <h3 class="text-red-400 text-xl">No se encontraron astronautas</h3>
            </div>
        `;
        return;
    }

    astronautasOrdenados.forEach((astronauta) => {
        const card = renderCardAstronauta(astronauta);
        const btnModificar = card.querySelector(".btn-modificar");
        const btnEliminar = card.querySelector(".btn-eliminar");

        if (btnModificar) {
            btnModificar.addEventListener("click", (e) => {
                e.stopPropagation();
                abrirModalEditar(astronauta);
            });
        }

        if (btnEliminar) {
            btnEliminar.addEventListener("click", (e) => {
                e.stopPropagation();
                astronautas.removeAstronauta(astronauta.id);
                renderizarAstronautas();
            });
        }

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
    const inputBuscar = document.getElementById(configuracionFiltros.busqueda.id);
    const selectEspecialidad = document.getElementById(configuracionFiltros.especialidad.id);

    if (inputBuscar) {
        inputBuscar.addEventListener("input", (e) => {
            busquedaTexto = e.target.value;
            renderizarAstronautas();
        });
    }

    if (selectEspecialidad) {
        selectEspecialidad.addEventListener("change", (e) => {
            filtroEspecialidad = e.target.value;
            renderizarAstronautas();
        });
    }
}

// =======================================================
// OPERACIONES CRUD (AGREGAR, ELIMINAR, MODIFICAR)
// =======================================================
export function agregarAstronauta(nuevoAstro) {

}

export function abrirModalEditar(astronauta) {
    astronautaEditando = astronauta;
    document.getElementById("modal-nombre").value = astronauta.nombre;
    document.getElementById("modal-especialidad").value = (astronauta.especialidad || "INGENIERO").toUpperCase();
    document.getElementById("modal-experiencia").value = astronauta.experiencia;
    document.getElementById("modal-descripcion").value = astronauta.descripcion || "";

    // 🔧 MODIFICADO AQUÍ: Muestra usando Flex dinámico nativo
    document.getElementById("modal-astronauta").style.display = "flex";
}

function configurarBotonesGlobales() {
    const btnNuevo = document.getElementById("btn-agregar-astronauta");
    const modal = document.getElementById("modal-astronauta");
    const btnCerrar = document.getElementById("btn-cerrar-modal");
    const formulario = document.getElementById("form-astronauta");

    if (!modal || !btnNuevo) return;

    btnNuevo.addEventListener("click", () => {
        astronautaEditando = null;
        if (formulario) formulario.reset();

        // 🔧 MODIFICADO AQUÍ: Muestra en flex al pulsar el botón de registro
        modal.style.display = "flex";
    });

    if (btnCerrar) {
        btnCerrar.addEventListener("click", () => {
            // 🔧 MODIFICADO AQUÍ: Oculta con display none
            modal.style.display = "none";
        });
    }

    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            const $nombre = document.getElementById("modal-nombre").value;
            const $specialty = document.getElementById("modal-especialidad").value;
            const $exp = document.getElementById("modal-experiencia").value;
            const $desc = document.getElementById("modal-descripcion").value;

            if (astronautaEditando) {
                astronautas.modificarAstronauta(astronautaEditando, {
                    nombre: $nombre,
                    especialidad: $specialty,
                    descripcion: $desc
                });
                renderizarAstronautas();
                astronautaEditando = null;
            } else {

                astronautas.crearAstronauta(
                    $nombre,
                    $specialty,
                    $desc
                );
                renderizarAstronautas();
            }

            // 🔧 MODIFICADO AQUÍ: Oculta al guardar exitosamente
            modal.style.display = "none";
        });
    }
}

// =========================================================================
// 🚀 INICIALIZADOR ASÍNCRONO COHERENTE (Llamado desde index.js)
// =========================================================================
export function initAstronautas() {
    configurarEventosFiltros();
    configurarBotonesGlobales();
    renderizarAstronautas();
}
