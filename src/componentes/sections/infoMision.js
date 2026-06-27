import { ElementoBuilder } from '../../scripts/elementHtml.js';
import { iconFlecha } from "../icons/icon-flecha";
import { iconO2 } from "../icons/icon-o2";
import { iconBotella } from "../icons/icon-botella";
import { iconUser } from "../icons/icon-user";
import { iconRayo } from "../icons/icon-rayo";
import { iconCarga } from "../icons/icon-carga.js";

// ============================================================================
// HELPERS INTERNOS
// ============================================================================

/**
 * Devuelve clases de color según el nivel de dificultad (1–5)
 */
function colorDificultad(nivel) {
    const mapa = {
        1: "bg-emerald-400",
        2: "bg-green-400",
        3: "bg-yellow-400",
        4: "bg-orange-400",
        5: "bg-red-500",
    };
    return mapa[nivel] ?? "bg-gray-400";
}

/**
 * Devuelve etiqueta de texto según dificultad
 */
function labelDificultad(nivel) {
    const mapa = {
        1: "Muy fácil",
        2: "Fácil",
        3: "Moderada",
        4: "Difícil",
        5: "Extrema",
    };
    return mapa[nivel] ?? "Desconocida";
}

/**
 * Construye la barra de dificultad con 5 segmentos
 * El ancho de cada segmento aumenta con el nivel
 */
function buildBarraDificultad(nivel) {
    const $wrapper = new ElementoBuilder("div")
        .clase("flex items-center gap-1");

    for (let i = 1; i <= 5; i++) {
        const activo = i <= nivel;
        const $seg = new ElementoBuilder("div")
            .clase(
                "h-1.5 rounded-full flex-1 transition-all duration-300 " +
                (activo ? colorDificultad(nivel) : "bg-gray-200")
            );
        $wrapper.hijo($seg.build());
    }
    return $wrapper.build();
}

/**
 * Construye un chip de especialidad
 */
function buildChipEspecialidad(texto) {
    return new ElementoBuilder("span")
        .clase("px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200")
        .texto(texto)
        .build();
}

/**
 * Devuelve el icono SVG correspondiente a cada recurso
 */
function iconPorClave(clave, clases) {
    switch (clave) {
        case "oxigeno": return iconO2(clases);
        case "astronautas": return iconUser(clases);
        case "comida": return iconCarga(clases);
        case "energia": return iconRayo(clases);
        case "combustible": return iconBotella(clases);
        default: return "";
    }
}

/**
 * Devuelve label legible por recurso
 */
function labelRecurso(clave) {
    const mapa = {
        oxigeno: "O₂",
        astronautas: "Crew",
        comida: "Comida",
        energia: "Energía",
        combustible: "Fuel",
    };
    return mapa[clave] ?? clave;
}

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================

/**
 * renderCardMisionExtendida(mision)
 *
 * Versión extendida de la card de misión.
 * Estructura visual:
 *
 * <article>
 *  ├── [HEADER] imagen de fondo + overlay + badge dificultad + recompensa
 *  ├── [BODY]
 *  │    ├── título + descripción
 *  │    ├── barra de dificultad
 *  │    ├── chips de especialidades
 *  │    └── grid de recursos (icono + label + valor)
 *  └── [FOOTER] tiempo estimado + botón "Ver resumen"
 *
 * @param {Object} mision - Objeto de misión desde misiones.js
 * @returns {HTMLElement} - Elemento <article> listo para insertar en el DOM
 */
export function renderCardMisionExtendida(mision) {

    // Normalizamos requerimientos: puede llegar como objeto o como array de entries
    const reqs = Array.isArray(mision.requerimientos)
        ? mision.requerimientos
        : Object.entries(mision.requerimientos);

    // ─── RAÍZ ────────────────────────────────────────────────────────────────
    const $card = new ElementoBuilder("article")
        .clase("flex flex-col rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white w-full max-w-sm hover:shadow-xl transition-shadow duration-300");

    // ─── HEADER: imagen con overlay ──────────────────────────────────────────
    const $header = new ElementoBuilder("div")
        .clase("relative h-44 overflow-hidden");

    const $img = new ElementoBuilder("img")
        .clase("w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-500")
        .atributo("src", mision.imagen)
        .atributo("alt", mision.nombre)
        .atributo("loading", "lazy");

    // Overlay degradado oscuro en la parte inferior del header
    const $overlay = new ElementoBuilder("div")
        .clase("absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent");

    // Badge de dificultad (arriba-izquierda)
    const $badgeDif = new ElementoBuilder("span")
        .clase(
            "absolute top-3 left-3 px-2 py-0.5 text-[10px] font-bold uppercase rounded-full text-white shadow " +
            colorDificultad(mision.dificultad)
        )
        .texto(labelDificultad(mision.dificultad));

    // Recompensa (arriba-derecha)
    const $badgeRecompensa = new ElementoBuilder("div")
        .clase("absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow");

    const $iconMoneda = new ElementoBuilder("span")
        .clase("text-yellow-500 text-sm")
        .texto("✦");

    const $textoRecompensa = new ElementoBuilder("span")
        .clase("text-xs font-bold text-gray-700")
        .texto(`${mision.recompensa} créditos`);

    $badgeRecompensa.hijo($iconMoneda.build()).hijo($textoRecompensa.build());

    $header
        .hijo($img.build())
        .hijo($overlay.build())
        .hijo($badgeDif.build())
        .hijo($badgeRecompensa.build());

    // ─── BODY ────────────────────────────────────────────────────────────────
    const $body = new ElementoBuilder("div")
        .clase("flex flex-col gap-4 p-4");

    // — Título y descripción —
    const $divTitulo = new ElementoBuilder("div").clase("flex flex-col gap-1");

    const $h2 = new ElementoBuilder("h2")
        .clase("text-base font-bold text-gray-900 leading-snug")
        .texto(mision.nombre);

    const $desc = new ElementoBuilder("p")
        .clase("text-xs text-gray-500 leading-relaxed line-clamp-2")
        .texto(mision.descripcion);

    $divTitulo.hijo($h2.build()).hijo($desc.build());

    // — Barra de dificultad —
    const $divDif = new ElementoBuilder("div").clase("flex flex-col gap-1");

    const $labelDif = new ElementoBuilder("span")
        .clase("text-[10px] font-semibold uppercase tracking-widest text-gray-400")
        .texto("Dificultad");

    $divDif.hijo($labelDif.build()).hijo(buildBarraDificultad(mision.dificultad));

    // — Especialidades —
    const $divEsp = new ElementoBuilder("div").clase("flex flex-col gap-1.5");

    const $labelEsp = new ElementoBuilder("span")
        .clase("text-[10px] font-semibold uppercase tracking-widest text-gray-400")
        .texto("Especialidades requeridas");

    const $chipsRow = new ElementoBuilder("div").clase("flex flex-wrap gap-1.5");
    mision.especialidades.forEach(esp => {
        $chipsRow.hijo(buildChipEspecialidad(esp));
    });

    $divEsp.hijo($labelEsp.build()).hijo($chipsRow.build());

    // — Grid de recursos —
    const $divRecursos = new ElementoBuilder("div").clase("flex flex-col gap-1.5");

    const $labelRecursos = new ElementoBuilder("span")
        .clase("text-[10px] font-semibold uppercase tracking-widest text-gray-400")
        .texto("Recursos necesarios");

    const $gridRecursos = new ElementoBuilder("div")
        .clase("grid grid-cols-5 gap-1");

    reqs.forEach(([clave, valor]) => {
        const $celda = new ElementoBuilder("div")
            .clase("flex flex-col items-center justify-center gap-0.5 rounded-xl bg-gray-50 border border-gray-100 py-2 px-1 hover:bg-indigo-50 hover:border-indigo-200 transition-colors duration-200");

        const $iconWrap = new ElementoBuilder("div")
            .clase("text-indigo-500")
            .inyectar(iconPorClave(clave, "h-4 w-4"));

        const $valor = new ElementoBuilder("span")
            .clase("text-sm font-bold text-gray-800 leading-none")
            .texto(String(valor));

        const $label = new ElementoBuilder("span")
            .clase("text-[9px] text-gray-400 text-center leading-none mt-0.5")
            .texto(labelRecurso(clave));

        $celda
            .hijo($iconWrap.build())
            .hijo($valor.build())
            .hijo($label.build());

        $gridRecursos.hijo($celda.build());
    });

    $divRecursos.hijo($labelRecursos.build()).hijo($gridRecursos.build());

    // Ensamblar body
    $body
        .hijo($divTitulo.build())
        .hijo($divDif.build())
        .hijo($divEsp.build())
        .hijo($divRecursos.build());

    // ─── FOOTER ──────────────────────────────────────────────────────────────
    const $footer = new ElementoBuilder("div")
        .clase("flex items-center justify-between px-4 py-3 border-t border-gray-100 bg-gray-50");

    // Tiempo estimado
    const $divTiempo = new ElementoBuilder("div")
        .clase("flex items-center gap-1.5");

    const $iconClock = new ElementoBuilder("span")
        .clase("text-gray-400 text-sm")
        .texto("⏱");

    const $textoTiempo = new ElementoBuilder("span")
        .clase("text-xs font-medium text-gray-600")
        .texto(`${mision.tiempo} min`);

    $divTiempo.hijo($iconClock.build()).hijo($textoTiempo.build());

    const $btnVerResumen = new ElementoBuilder("a").clase("group flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-200")
        .atributo("href", `#mision-${mision.id}`)
        .atributo("role", "button");

    const $spanBtn = new ElementoBuilder("span").clase("max-w-0 overflow-hidden group-hover:max-w-xs duration-300 whitespace-nowrap")
        .texto("Ver resumen");

    const $iconFlechaWrap = new ElementoBuilder("i").clase("group-hover:translate-x-0.5 transition-transform duration-200")
        .inyectar(iconFlecha());

    $btnVerResumen.hijo($spanBtn.build()).hijo($iconFlechaWrap.build());

    $footer.hijo($divTiempo.build()).hijo($btnVerResumen.build());

    // ─── ENSAMBLADO FINAL ────────────────────────────────────────────────────
    $card
        .hijo($header.build())
        .hijo($body.build())
        .hijo($footer.build());

    return $card.build();
}