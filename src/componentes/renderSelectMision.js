
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
import { iconO2 } from './icons/icon-o2.js';
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
    const $mainCard = new ElementoBuilder("div")
        .clase("w-full bg-slate-950/70 border border-slate-800 rounded-xl p-6 shadow-2xl flex flex-col lg:flex-row gap-8 items-center lg:items-stretch");
    
    // Sección izquierda
    const $leftSection = new ElementoBuilder("div")
        .clase("flex flex-col sm:flex-row gap-6 flex-1 items-center sm:items-start w-full");
    
    const $imageContainer = new ElementoBuilder("img")
        .clase("w-32 h-36 rounded-xl object-cover border border-slate-700 shadow-md shrink-0")
        .atributo("src", mision.imagen)
        .atributo("alt", mision.nombre);
    
    const $infoContainer = new ElementoBuilder("div")
        .clase("flex flex-col gap-2 min-w-0 text-center sm:text-left");
    
    const $headerRow = new ElementoBuilder("div")
        .clase("flex flex-wrap items-center justify-center sm:justify-start gap-3");
    
    const $title = new ElementoBuilder("h2")
        .clase("text-2xl font-bold text-white uppercase tracking-wide")
        .texto(mision.nombre);
    
    const $badge = new ElementoBuilder("span")
        .clase(`text-[9px] font-bold px-2 py-0.5 rounded border tracking-wider ${dificultadColor}`)
        .texto(`● DIFICULTAD ${mision.dificultad}`);
    
    const $description = new ElementoBuilder("p")
        .clase("text-xs text-slate-400 mt-2 leading-relaxed max-w-xl font-secondary")
        .texto(mision.descripcion);
    
    const $metaInfo = new ElementoBuilder("div")
        .clase("text-[10px] text-slate-500 space-y-0.5 font-medium tracking-wider mt-1");
    
    const $idRow = new ElementoBuilder("div")
        .texto(`ID: ${mision.id}`);
    
    const $timeRow = new ElementoBuilder("div")
        .texto(`TIEMPO: ${mision.tiempo} min`);
    
    const $rewardRow = new ElementoBuilder("div")
        .texto(`RECOMPENSA: ${mision.recompensa} pts`);
    
    // Divisor
    const $divider = new ElementoBuilder("div")
        .clase("hidden lg:block w-px bg-slate-900");
    
    // Sección derecha
    const $rightSection = new ElementoBuilder("div")
        .clase("w-full lg:w-80 flex flex-col justify-center gap-4 shrink-0");
    
    const $requirementsTitle = new ElementoBuilder("h4")
        .clase("text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-1")
        .texto("Requerimientos");
    
    const $requirementsContainer = new ElementoBuilder("div")
        .clase("flex flex-col gap-2");
    
    const $specialtiesTitle = new ElementoBuilder("h4")
        .clase("text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-1 mt-4")
        .texto("Especialidades Requeridas");
    
    const $specialtiesContainer = new ElementoBuilder("div")
        .clase("flex flex-wrap gap-2");
    
    // Construir infoContainer
    $headerRow.hijo($title.build()).hijo($badge.build());
    $metaInfo.hijo($idRow.build()).hijo($timeRow.build()).hijo($rewardRow.build());
    $infoContainer.hijo($headerRow.build()).hijo($description.build()).hijo($metaInfo.build());
    
    // Construir leftSection
    $leftSection.hijo($imageContainer.build()).hijo($infoContainer.build());
    
    // Construir requerimientos
    mision.requerimientos.forEach(([key, value]) => {
        const $reqRow = new ElementoBuilder("div")
            .clase("flex justify-between items-center text-[10px] text-slate-400 tracking-wider");
        
        const $labelContainer = new ElementoBuilder("span")
            .clase("flex items-center gap-2");
        
        const $iconSpan = new ElementoBuilder("span")
            .inyectar(getRequerimientoIcon(key));
        
        const $labelText = new ElementoBuilder("span")
            .texto(key.toUpperCase());
        
        const $valueSpan = new ElementoBuilder("span")
            .clase("font-bold text-white")
            .texto(value);
        
        $labelContainer.hijo($iconSpan.build()).hijo($labelText.build());
        $reqRow.hijo($labelContainer.build()).hijo($valueSpan.build());
        $requirementsContainer.hijo($reqRow.build());
    });
    
    // Construir especialidades
    mision.especialidades.forEach(esp => {
        const $specialtyBadge = new ElementoBuilder("span")
            .clase("text-[9px] font-bold px-2 py-1 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 tracking-wider")
            .texto(esp.toUpperCase());
        $specialtiesContainer.hijo($specialtyBadge.build());
    });
    
    // Construir rightSection
    $rightSection.hijo($requirementsTitle.build()).hijo($requirementsContainer.build()).hijo($specialtiesTitle.build()).hijo($specialtiesContainer.build());
    
    // Construir mainCard
    $mainCard.hijo($leftSection.build()).hijo($divider.build()).hijo($rightSection.build());
    
    container.appendChild($mainCard.build());
}

function getDificultadColor(dificultad) {
    switch(dificultad) {
        case 1:
            return "bg-emerald-950/60 text-emerald-400 border-emerald-500/30";
        case 2:
            return "bg-cyan-950/60 text-cyan-400 border-cyan-500/30";
        case 3:
            return "bg-yellow-950/60 text-yellow-400 border-yellow-500/30";
        case 4:
            return "bg-orange-950/60 text-orange-400 border-orange-500/30";
        case 5:
            return "bg-red-950/60 text-red-400 border-red-500/30";
        default:
            return "bg-slate-950/60 text-slate-400 border-slate-500/30";
    }
}

function getRequerimientoIcon(key) {
    switch(key) {
        case "oxigeno": return iconO2("h-4 w-4");
        case "astronautas": return iconUser("h-4 w-4");
        case "comida": return iconCarga("h-4 w-4");
        case "energia": return iconRayo("h-4 w-4");
        case "combustible": return iconBotella("h-4 w-4");
        default: return "";
    }
}