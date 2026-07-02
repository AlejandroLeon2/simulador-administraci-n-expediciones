
/*
mapa de la estructura renderSelectedMision
<div>
  ├── <div> (mainCard - con clases)
  │     ├── <div> (leftSection - con clases)
  │     │     ├── <img> (con clases, src, alt)
  │     │     └── <div> (infoContainer - con clases)
  │     │           ├── <div> (headerRow - con clases)
  │     │           │     ├── <h2> (con clases, texto)
  │     │           │     └── <span> (badge - con clases, texto)
  │     │           ├── <p> (description - con clases, texto)
  │     │           └── <div> (metaInfo - con clases)
  │     │                 ├── <div> (idRow - con clases, texto)
  │     │                 ├── <div> (timeRow - con clases, texto)
  │     │                 └── <div> (rewardRow - con clases, texto)
  │     ├── <div> (divider - con clases)
  │     └── <div> (rightSection - con clases)
  │           ├── <h4> (requirementsTitle - con clases, texto)
  │           ├── <div> (requirementsContainer - con clases)
  │           │     └── <div> (reqRow - con clases)
  │           │           ├── <span> (label - con clases, texto)
  │           │           └── <span> (valueSpan - con clases, texto)
  │           ├── <h4> (specialtiesTitle - con clases, texto)
  │           └── <div> (specialtiesContainer - con clases)
  │                 └── <span> (specialtyBadge - con clases, texto)
*/

import { ElementoBuilder } from '../scripts/elementHtml.js';
import { iconO2 } from './icons/icon-O2.js';
import { iconBotella } from './icons/icon-botella.js';
import { iconUser } from './icons/icon-user.js';
import { iconRayo } from './icons/icon-rayo.js';
import { iconCarga } from './icons/icon-carga.js';

export function renderSelectedMision(mision) {
    const container = document.getElementById("selected-mision-container");
    if (!container) return;

    const dificultadColor = getDificultadColor(mision.dificultad);
    container.innerHTML = '';

    // Elementos principales
    const $mainCard = new ElementoBuilder("div").clase("w-full bg-slate-950/70 border border-slate-800 rounded-xl p-6 shadow-2xl flex flex-col gap-8 items-center lg:items-stretch");

    // Sección izquierda
    const $leftSection = new ElementoBuilder("div").clase("flex flex-col sm:flex-row gap-6  items-center justify-center md:justify-between w-full");
    const $imageContainer = new ElementoBuilder("img").clase("w-62 h-36 rounded-xl object-cover border border-slate-700 shadow-md shrink-0").atributo("src", mision.imagen).atributo("alt", mision.nombre).atributo("id", `image-mision`);
    const $infoContainer = new ElementoBuilder("div").clase("flex flex-col gap-2 min-w-0 text-center sm:text-left");
    const $headerRow = new ElementoBuilder("div").clase("flex flex-wrap items-center justify-center sm:justify-start gap-3");
    const $title = new ElementoBuilder("h2").clase("text-2xl font-bold text-white uppercase tracking-wide").texto(mision.nombre).atributo("id", `title-mision`);
    const $badge = new ElementoBuilder("span").clase(`text-[9px] font-bold px-2 py-0.5 rounded border tracking-wider ${dificultadColor}`).texto(`● DIFICULTAD ${mision.dificultad}`).atributo("id", `badge-mision`);
    const $description = new ElementoBuilder("p").clase("text-xs text-slate-400 mt-2 leading-relaxed max-w-xl font-secondary").texto(mision.descripcion).atributo("id", `description-mision`);
    const $metaInfo = new ElementoBuilder("div").clase("text-[10px] text-slate-500 space-y-0.5 font-medium tracking-wider mt-1");
    const $timeRow = new ElementoBuilder("div").texto(`TIEMPO: ${mision.tiempo} min`).atributo("id", `time-mision`);
    const $rewardRow = new ElementoBuilder("div").texto(`RECOMPENSA: ${mision.recompensa} pts`).atributo("id", `reward-mision`);
    // Divisor
    const $divider = new ElementoBuilder("div").clase("hidden lg:block w-px bg-slate-900");

    // Sección derecha
    const $rightSection = new ElementoBuilder("div").clase("w-full  flex flex-col justify-center gap-4 shrink-0");
    const $requirementsTitle = new ElementoBuilder("h4").clase("text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-1").texto("Requerimientos");
    const $requirementsContainer = new ElementoBuilder("div").clase("grid grid-cols-2 md:grid-cols-4 gap-4");
    const $specialtiesTitle = new ElementoBuilder("h4").clase("text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-1 mt-4").texto("Especialidades Requeridas");
    const $specialtiesContainer = new ElementoBuilder("div").clase("flex flex-wrap gap-2").atributo("id", `specialties-mision`);

    // Construir infoContainer
    $headerRow.hijo($title.build()).hijo($badge.build());
    $metaInfo.hijo($timeRow.build()).hijo($rewardRow.build());
    $infoContainer.hijo($headerRow.build()).hijo($description.build()).hijo($metaInfo.build());

    // Construir leftSection
    $leftSection.hijo($imageContainer.build()).hijo($infoContainer.build());

    // Construir requerimientos
    for (let clave in mision.requerimientos) {

        const $reqRow = new ElementoBuilder("div").clase("flex justify-between items-center text-[10px] text-slate-400 tracking-wider");
        const $labelContainer = new ElementoBuilder("span").clase("flex items-center gap-2");
        const $iconSpan = new ElementoBuilder("span").inyectar(getRequerimientoIcon(clave));
        const $labelText = new ElementoBuilder("span").texto(clave.toUpperCase());
        const $valueSpan = new ElementoBuilder("span").clase("font-bold text-white").texto(`${mision.requerimientos[clave]} / ${mision.consumo[clave]}`).atributo("id", `reserva-${clave}`);
        const $divContainerRecursos = new ElementoBuilder("div").clase("flex flex-col justify-between items-center");
        const $addButton = new ElementoBuilder("button").clase("cursor-pointer hover:scale-125 transition-transform duration-200").texto("+").atributo("id", `add-${clave}`);
        const $removeButton = new ElementoBuilder("button").clase("cursor-pointer hover:scale-125 transition-transform duration-200").texto("-").atributo("id", `remove-${clave}`);
        if (clave !== "astronautas") {
            $divContainerRecursos.hijo($addButton.build()).hijo($removeButton.build());
            $reqRow.hijo($labelContainer.build()).hijo($valueSpan.build()).hijo($divContainerRecursos.build());
        } else {
            $reqRow.hijo($labelContainer.build()).hijo($valueSpan.build());
        }
        $labelContainer.hijo($iconSpan.build()).hijo($labelText.build());


        $requirementsContainer.hijo($reqRow.build());
    };

    // Construir especialidades
    mision.especialidades.forEach(esp => {
        const $specialtyBadge = new ElementoBuilder("span")
            .clase("text-[9px] font-bold px-2 py-1 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 tracking-wider")
            .texto(esp.rol.toUpperCase());
        $specialtiesContainer.hijo($specialtyBadge.build());
    });

    $rightSection.hijo($requirementsTitle.build()).hijo($requirementsContainer.build()).hijo($specialtiesTitle.build()).hijo($specialtiesContainer.build());
    $mainCard.hijo($leftSection.build()).hijo($divider.build()).hijo($rightSection.build());
    container.appendChild($mainCard.build());
}

export function getDificultadColor(dificultad) {
    switch (dificultad) {
        case 1:
            return "dificultad-1";
        case 2:
            return "dificultad-2";
        case 3:
            return "dificultad-3";
        case 4:
            return "dificultad-4";
        case 5:
            return "dificultad-5";
        default:
            return "dificultad-default";
    }
}

function getRequerimientoIcon(key) {
    switch (key) {
        case "oxigeno": return iconO2("h-4 w-4");
        case "astronautas": return iconUser("h-4 w-4");
        case "comida": return iconCarga("h-4 w-4");
        case "energia": return iconRayo("h-4 w-4");
        case "combustible": return iconBotella("h-4 w-4");
        default: return "";
    }
}