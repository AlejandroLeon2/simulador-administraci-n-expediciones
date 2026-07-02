// ============================================================================
// PÁGINA: MISIONES
// ============================================================================
// Responsabilidad: Configurar y renderizar la página de misiones
// Sub-tareas:
// 1. Exportar estructura de la página
// 2. Configurar eventos de filtros
// 3. Renderizar lista de misiones
// 4. Inicializar la página

import "../../css/styles.css";
import { renderCardMision } from "../../componentes/cards/cardMision.js";
import { renderSelectedMision, getDificultadColor } from "../../componentes/renderSelectMision.js";
import { ElementoBuilder } from "../../scripts/elementHtml.js";
import { FilterComponent } from "../../componentes/ui/filterComponents.js"
import { Misiones } from "./misiones.js";
import { ElementDom } from "../../scripts/utils.js";

// 📦 ESTADO GLOBAL DE LA APLICACIÓN
const misiones = new Misiones();
let busquedaTexto = "";
let filtroDificultad = "TODAS";

// ============================================================================
// CONFIGURACIÓN DE FILTROS
// ============================================================================
const configuracionFiltros = {
    busqueda: {
        tipo: 'input',
        id: "search-mision",
        placeholder: "Buscar por nombre...",
        clases: "flex-1 bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-cyan-500 uppercase tracking-wider"
    },
    dificultad: {
        tipo: 'select',
        id: "filter-dificultad",
        clases: "bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-cyan-500 text-slate-400 cursor-pointer",
        opciones: [
            { valor: "TODAS", texto: "Todas las Dificultades" },
            { valor: "1", texto: "Muy Fácil" },
            { valor: "2", texto: "Fácil" },
            { valor: "3", texto: "Normal" },
            { valor: "4", texto: "Difícil" },
            { valor: "5", texto: "Muy Difícil" }
        ]
    },
    contenedor: {
        tipo: 'container',
        clases: "flex flex-col sm:flex-row gap-4 mb-6"
    }
};

// ============================================================================
// ESTRUCTURA DE LA PÁGINA
// ============================================================================
/*
mapa de la estructura paginaMisiones
<div>
  ├── <div> (mainContainer - con clases)
  │     ├── <div> (header - con clases)
  │     │     └── <div> (headerContent - con clases)
  │     │           ├── <h1> (title - con clases, texto)
  │     │           └── <p> (subtitle - con clases, texto)
  │     ├── <div> (selectedContainer - con clases, id)
  │     ├── <div> (filtrosContainer - usando FilterContainer)
  │     │     ├── <input> (busqueda - usando FilterInput)
  │     │     └── <select> (dificultad - usando FilterSelect)
  │     └── <div> (misionesContainer - con clases, id)
*/
export function paginaMisiones() {
    const $mainContainer = new ElementoBuilder("div").clase("text-white");
    // Header
    const $header = new ElementoBuilder("div").clase("flex justify-between items-center mb-6");
    const $headerContent = new ElementoBuilder("div");
    const $title = new ElementoBuilder("h1").clase("text-2xl font-black tracking-wider uppercase").texto("Panel de Misiones");
    const $subtitle = new ElementoBuilder("p").clase("text-xs text-slate-400").texto("Gestión de operaciones espaciales y asignación de tripulación.");

    $headerContent.hijo($title.build()).hijo($subtitle.build());
    $header.hijo($headerContent.build());

    // Contenedor de misión seleccionada
    const $selectedContainer = new ElementoBuilder("div").clase("mb-6").atributo("id", "selected-mision-container");

    // Contenedor de filtros usando componente genérico
    const $filtrosContainer = FilterComponent({
        ...configuracionFiltros.contenedor,
        componentes: [
            FilterComponent(configuracionFiltros.busqueda),
            FilterComponent(configuracionFiltros.dificultad)
        ]
    });

    // Contenedor de misiones
    const $misionesContainer = new ElementoBuilder("ul").clase("grid grid-cols-1 md:grid-cols-2  gap-6 justify-items-center").atributo("id", "misiones-container");

    $mainContainer.hijo($header.build());
    $mainContainer.hijo($selectedContainer.build());
    $mainContainer.hijo($filtrosContainer);
    $mainContainer.hijo($misionesContainer.build());

    return $mainContainer.build().outerHTML;
}

// ============================================================================
// RENDERIZADO
// ============================================================================
export function renderizarMisiones() {
    const container = document.getElementById("misiones-container");
    if (!container) return;

    container.innerHTML = "";
    const listMisionesFiltradas = misiones.filtrarMisiones(busquedaTexto, filtroDificultad);

    if (listMisionesFiltradas.length > 0) {
        renderSelectedMision(listMisionesFiltradas[0]);
        misiones.setMisionSeleccionada(listMisionesFiltradas[0].id);
    }

    if (listMisionesFiltradas.length === 0) {
        const $noResults = new ElementoBuilder("div").clase("col-span-full text-center p-10");
        const $message = new ElementoBuilder("h3").clase("text-red-400 text-xl").texto("No se encontraron misiones");
        $noResults.hijo($message.build());
        container.appendChild($noResults.build());
        return;
    }

    listMisionesFiltradas.forEach((mision) => {
        const $card = renderCardMision(mision);

        $card.addEventListener("click", (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
            misiones.setMisionSeleccionada(mision.id);
            actualizarSelectMision(misiones.getMisionSeleccionada());
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        container.appendChild($card);
    });
}

// ============================================================================
// CONFIGURACIÓN DE EVENTOS
// ============================================================================
function configurarEventosFiltros() {
    const inputBuscar = document.getElementById("search-mision");
    const selectDificultad = document.getElementById("filter-dificultad");

    if (inputBuscar) {
        inputBuscar.addEventListener("input", (e) => {
            busquedaTexto = e.target.value;
            renderizarMisiones();
        });
    }

    if (selectDificultad) {
        selectDificultad.addEventListener("change", (e) => {
            filtroDificultad = e.target.value;
            renderizarMisiones();
        });
    }

}

function eventosActualizacion() {
    const selectedContainer = document.getElementById("selected-mision-container");
    if (!selectedContainer) return;

    selectedContainer.addEventListener("click", (e) => {
        const id = misiones.misionSeleccionada.obtener();
        const mision = misiones.getMisionSeleccionada(id);
        if (!mision) return;

        if (e.target.id && e.target.id.startsWith("add-")) {
            const recurso = e.target.id.replace("add-", "");
            misiones.addRecursoMision(recurso, 1);
            actualizarUI(mision, recurso);
        }

        if (e.target.id && e.target.id.startsWith("remove-")) {
            const recurso = e.target.id.replace("remove-", "");
            misiones.removeRecursoMision(recurso, 1);
            actualizarUI(mision, recurso);
        }
    });


}
function actualizarSelectMision(mision) {
    new ElementDom(`title-mision`).texto(mision.nombre);
    new ElementDom(`badge-mision`).texto(`DIFICULTAD ${mision.dificultad}`).clase(`text-[9px] font-bold px-2 py-0.5 rounded border tracking-wider ${getDificultadColor(mision.dificultad)}`, "replace");
    new ElementDom(`description-mision`).texto(mision.descripcion);
    new ElementDom(`time-mision`).texto(`TIEMPO: ${mision.tiempo} min`);
    new ElementDom(`reward-mision`).texto(`RECOMPENSA: ${mision.recompensa} pts`);
    new ElementDom(`image-mision`).atributo(`src`, mision.imagen);

    for (const recurso in mision.requerimientos) {
        actualizarUI(mision, recurso);
    }
    mision.especialidades.forEach((especialidad, index) => {
        const $specialtiesContainer = new ElementDom(`specialties-mision`);
        if (index == 0) {
            $specialtiesContainer.el.innerHTML = "";
        }
        const $specialtyBadge = new ElementoBuilder("span")
            .clase("text-[9px] font-bold px-2 py-1 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 tracking-wider")
            .texto(especialidad.rol.toUpperCase());
        $specialtiesContainer.hijo($specialtyBadge.build());
    });


}

function actualizarUI(mision, recurso) {
    new ElementDom(`reserva-${recurso}`).texto(`${mision.requerimientos[recurso]} / ${mision.consumo[recurso]}`);
}

// ============================================================================
// INICIALIZACIÓN
// ============================================================================
export function initMisiones() {
    configurarEventosFiltros();
    eventosActualizacion();
    renderizarMisiones();
}
