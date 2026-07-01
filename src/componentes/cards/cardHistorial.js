import { crearElementoHtml } from "../../scripts/utils";

export function renderCardHistorial(registro) {
    const esExito = registro.resultado === "Éxito";

    const div = crearElementoHtml(
        "div",
        "bg-slate-950/90 text-slate-300 rounded-xl p-4 border-4 border-double border-cyan-800 shadow-md shadow-cyan-400 flex flex-col justify-between w-full max-w-[380px] min-h-[360px] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-cyan-400"
    );

    const topContainer = crearElementoHtml("div", "flex flex-col gap-4 relative w-full");

    const badgeResultado = crearElementoHtml(
        "span",
        "absolute top-0 right-0 text-[9px] font-bold px-2.5 py-0.5 rounded-sm border tracking-wider",
        registro.resultado.toUpperCase()
    );

    if (esExito) {
        badgeResultado.classList.add("bg-emerald-950/60", "text-emerald-400", "border-emerald-500/40");
    } else {
        badgeResultado.classList.add("bg-rose-950/60", "text-rose-400", "border-rose-500/40");
    }

    const titulo = crearElementoHtml(
        "h3",
        "text-base font-bold text-white uppercase tracking-wide leading-tight pr-24",
        registro.nombreMision
    );

    const fecha = crearElementoHtml(
        "p",
        "text-xs text-cyan-400 font-semibold tracking-wider",
        `FECHA: ${registro.fecha}`
    );

    const descripcion = crearElementoHtml(
        "p",
        "text-sm text-slate-400 leading-relaxed",
        registro.descripcion
    );

    const info = crearElementoHtml("div", "grid grid-cols-2 gap-3 text-xs");

    info.innerHTML = `
        <div class="bg-slate-900/70 border border-slate-800 rounded-lg p-2">
            <p class="text-slate-500">RECOMPENSA</p>
            <p class="text-emerald-400 font-bold">${registro.recompensa}</p>
        </div>

        <div class="bg-slate-900/70 border border-slate-800 rounded-lg p-2">
            <p class="text-slate-500">DIFICULTAD</p>
            <p class="text-yellow-400 font-bold">${registro.dificultad}</p>
        </div>

        <div class="bg-slate-900/70 border border-slate-800 rounded-lg p-2">
            <p class="text-slate-500">DURACIÓN</p>
            <p class="text-white font-bold">${registro.duracion}</p>
        </div>

        <div class="bg-slate-900/70 border border-slate-800 rounded-lg p-2">
            <p class="text-slate-500">EXP. GANADA</p>
            <p class="text-cyan-400 font-bold">${registro.experienciaGanada}</p>
        </div>
    `;

    const astronautas = crearElementoHtml(
        "p",
        "text-xs text-slate-400",
        `Astronautas: ${registro.astronautas.join(", ")}`
    );

    const recursos = crearElementoHtml("div", "text-xs text-slate-400 border-t border-slate-800 pt-3");

    recursos.innerHTML = `
        <p class="font-bold text-white mb-1">Recursos consumidos</p>
        <p>Combustible: ${registro.recursosConsumidos.combustible}</p>
        <p>Oxígeno: ${registro.recursosConsumidos.oxigeno}</p>
        <p>Comida: ${registro.recursosConsumidos.comida}</p>
    `;

    topContainer.append(badgeResultado, titulo, fecha, descripcion, info, astronautas, recursos);
    div.append(topContainer);

    return div;
}