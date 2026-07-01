import "../../css/styles.css";
import { historial as datosIniciales } from "../../data/historial.js";
import { renderCardHistorial } from "../../componentes/cards/cardHistorial.js";
import { ElementoBuilder } from "../../scripts/elementHtml.js";

let listaHistorial = [...datosIniciales];


// ESTRUCTURA DE LA PÁGINA

export function paginaHistorial() {
    const $mainContainer = new ElementoBuilder("div").clase("text-white");
    const $header = new ElementoBuilder("div").clase("flex justify-between items-center mb-6");
    const $headerContent = new ElementoBuilder("div");
    const $title = new ElementoBuilder("h1").clase("text-2xl font-black tracking-wider uppercase").texto("Historial de Expediciones");
    const $subtitle = new ElementoBuilder("p").clase("text-xs text-slate-400").texto("Registro de misiones completadas, resultados, recursos consumidos y experiencia obtenida.");
    const $historialContainer = new ElementoBuilder("ul").clase("grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center").atributo("id", "historial-container");

    $headerContent.hijo($title.build()).hijo($subtitle.build());
    $header.hijo($headerContent.build());
    $mainContainer.hijo($header.build()).hijo($historialContainer.build());

    return $mainContainer.build().outerHTML;
}


// LÓGICA DE NEGOCIO

function mostrarHistorial() {
    return listaHistorial.slice().sort((a, b) => new Date(a.fecha) - new Date(b.fecha)).reverse();
}


// RENDERIZADO

export function renderizarHistorial() {
    const container = document.getElementById("historial-container");
    if (!container) return;

    container.innerHTML = "";

    mostrarHistorial().forEach((registro) => {
        const card = renderCardHistorial(registro);
        container.appendChild(card);
    });
}


// INICIALIZACIÓN

export function initHistorial() {
    renderizarHistorial();
}