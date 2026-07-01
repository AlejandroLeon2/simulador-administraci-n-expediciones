// ============================================================================
// COMPONENTE: CARD HISTORIAL
// ============================================================================
// Paso 3.3: Implementar renderCardHistorial(registro)
// Recibe: Objeto registro con propiedades: id, fecha, nombreMision, resultado, recompensa, descripcion, astronautas, duracion, dificultad, recursosConsumidos, experienciaGanada
// Retorna: Elemento DOM (div) con la card del registro
//
// Sub-tareas:
// 1. Crear elemento contenedor con createElement('div')
// 2. Agregar clase CSS con classList.add('card')
// 3. Crear elementos para mostrar: fecha, nombre misión, resultado, recompensa
// 4. Usar colores diferentes según resultado (éxito/fracaso)
// 5. Mostrar astronautas participantes con join()
// 6. Mostrar recursos consumidos
// 7. Usar appendChild() para agregar elementos
// 8. Retornar el div
//
// Métodos de arreglos a usar: join()
// Métodos DOM a usar: createElement(), classList.add(), classList.contains(), textContent, appendChild()


import { ElementoBuilder } from "../../scripts/elementHtml.js";

export function renderCardHistorial(registro) {
    const esExito = registro.resultado === "Éxito";

    const $card = new ElementoBuilder("li").clase("bg-slate-950/90 text-slate-300 rounded-xl p-4 border-4 border-double border-cyan-800 shadow-md shadow-cyan-400 flex flex-col gap-4 w-full max-w-[380px] min-h-[360px] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-cyan-400");
    const $top = new ElementoBuilder("div").clase("flex flex-col gap-4 relative w-full");

    const $badge = new ElementoBuilder("span").clase("absolute top-0 right-0 text-[9px] font-bold px-2.5 py-0.5 rounded-sm border tracking-wider").texto(registro.resultado.toUpperCase());
    $badge.build().classList.add(...(esExito ? ["bg-emerald-950/60", "text-emerald-400", "border-emerald-500/40"] : ["bg-rose-950/60", "text-rose-400", "border-rose-500/40"]));

    const $titulo = new ElementoBuilder("h3").clase("text-base font-bold text-white uppercase tracking-wide leading-tight pr-24").texto(registro.nombreMision);
    const $fechaImagen = new ElementoBuilder("div").clase("flex items-center justify-between gap-4");

    const $fecha = new ElementoBuilder("p")
        .clase("text-xs text-cyan-400 font-semibold tracking-wider")
        .texto(`FECHA: ${registro.fecha}`);

    const $imagen = new ElementoBuilder("img")
        .clase("w-20 h-16 object-cover rounded-lg border border-slate-700 shadow-md shadow-cyan-950/40 shrink-0")
        .atributo("src", registro.imagen)
        .atributo("alt", registro.nombreMision)
        .atributo("title", registro.nombreMision);

    $fechaImagen.hijo($fecha.build()).hijo($imagen.build());

    const $descripcion = new ElementoBuilder("p").clase("text-sm text-slate-400 leading-relaxed").texto(registro.descripcion);

    const $info = new ElementoBuilder("div").clase("grid grid-cols-2 gap-3 text-xs").inyectar(`
        <div class="bg-slate-900/70 border border-slate-800 rounded-lg p-2"><p class="text-slate-500">RECOMPENSA</p><p class="text-emerald-400 font-bold">${registro.recompensa}</p></div>
        <div class="bg-slate-900/70 border border-slate-800 rounded-lg p-2"><p class="text-slate-500">DIFICULTAD</p><p class="text-yellow-400 font-bold">${registro.dificultad}</p></div>
        <div class="bg-slate-900/70 border border-slate-800 rounded-lg p-2"><p class="text-slate-500">DURACIÓN</p><p class="text-white font-bold">${registro.duracion}</p></div>
        <div class="bg-slate-900/70 border border-slate-800 rounded-lg p-2"><p class="text-slate-500">EXP. GANADA</p><p class="text-cyan-400 font-bold">${registro.experienciaGanada}</p></div>
    `);

    const $astronautas = new ElementoBuilder("p").clase("text-xs text-slate-400").texto(`Astronautas: ${registro.astronautas.join(", ")}`);
    const $recursos = new ElementoBuilder("div").clase("text-xs text-slate-400 border-t border-slate-800 pt-3").inyectar(`
        <p class="font-bold text-white mb-1">Recursos consumidos</p>
        <p>Combustible: ${registro.recursosConsumidos.combustible}</p>
        <p>Oxígeno: ${registro.recursosConsumidos.oxigeno}</p>
        <p>Comida: ${registro.recursosConsumidos.comida}</p>
    `);

    $top.hijo($badge.build()).hijo($titulo.build()).hijo($fechaImagen.build()).hijo($descripcion.build()).hijo($info.build()).hijo($astronautas.build()).hijo($recursos.build());
    $card.hijo($top.build());

    return $card.build();
}