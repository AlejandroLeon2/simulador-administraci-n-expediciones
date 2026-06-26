// Diccionario de iconos usando los SVGs oficiales de Heroicons (Mini / 20x20)
import { iconHerramientas } from "./icons/icon-herramientas";
import { iconBotella } from "./icons/icon-botella";
import { iconCorazon } from "./icons/icon-corazon";
import { iconMundo } from "./icons/icon-mundo";
import { iconUser } from "./icons/icon-user";
import { crearElementoHtml } from "../scripts/utils";


const HEROICONS_ESPECIALIDAD = {
    "PILOTO": iconMundo( "w-5 h-5 text-cyan-400 shrink-0"),
    "INGENIERO": iconHerramientas( "w-5 h-5 text-cyan-400 shrink-0"),
    "CIENTÍFICO": iconBotella( "w-5 h-5 text-cyan-400 shrink-0"),
    "CIENTIFICO": iconBotella( "w-5 h-5 text-cyan-400 shrink-0"),
    "MÉDICO": iconCorazon( "w-5 h-5 text-cyan-400 shrink-0")
};

// Duplicamos el de científico sin tilde por si acaso
HEROICONS_ESPECIALIDAD["CIENTIFICO"] = HEROICONS_ESPECIALIDAD["CIENTÍFICO"];

// Icono genérico por si agregan una especialidad que no esté mapeada
const ICONO_DEFECTO =iconUser("w-4 h-4 text-cyan-400 shrink-0");


export function renderCardAstronauta(astronauta) {
    const div = crearElementoHtml("div", "bg-slate-950/90 text-slate-300 rounded-xl p-4 border-4 border-double border-cyan-800 shadow-md shadow-cyan-400 flex flex-col justify-between w-full max-w-[350px] min-h-[410px] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-cyan-400");
    // BLOQUE SUPERIOR (Agrupa Cabecera + Stats)
    const topContainer = crearElementoHtml("div", "flex flex-col gap-5 pt-6 relative w-full");
    // --- BADGE DE ESTADO (Esquina superior derecha absoluta) ---
    const badgeEstado = crearElementoHtml("span", "absolute top-0 right-0 text-[9px] font-bold px-2.5 py-0.5 rounded-sm border tracking-wider", astronauta.estado.toUpperCase());
 
    if (astronauta.estado === "Disponible") {
        badgeEstado.classList.add("bg-emerald-950/60", "text-emerald-400", "border-emerald-500/40");
    } else {
        badgeEstado.classList.add("bg-amber-950/60", "text-amber-400", "border-amber-500/40");
    }

// --- FILA DE LA CABECERA (Foto + Info) ---
    const headerContent = document.createElement("div");
    headerContent.classList.add("flex", "gap-4", "items-center", "w-full"); 

    // --- FOTO ---
    const img = document.createElement("img");
    img.src = astronauta.imagen;
    img.alt = astronauta.nombre;
    img.classList.add(
        "w-24",
        "h-32",
        "rounded-lg",
        "object-cover",
        "border",
        "border-slate-700",
        "shrink-0"          
    );

    // --- TEXTOS ---
    const infoBasica = document.createElement("div");
    infoBasica.classList.add("flex-1", "flex", "flex-col", "gap-1", "min-w-0"); 

    const h3 = document.createElement("h3");
    h3.textContent = astronauta.nombre;
    h3.classList.add(
    "text-base",
    "font-bold",
    "text-white",
    "break-words",
    "uppercase",
    "tracking-wide",
    "leading-tight"
); 

    // 1. Convertimos el texto de la especialidad a mayúsculas limpias
    const specialty = (astronauta.especialidad || astronauta.specialidad || "").toUpperCase().trim();

    // 2. Extraemos el bloque SVG del diccionario (si no existe, usa el de defecto)
    const svgIcono = HEROICONS_ESPECIALIDAD[specialty] || ICONO_DEFECTO;

    // 3. Creamos la etiqueta <p> alineando el icono con el texto usando flexbox
    const specialtyParagraph = crearElementoHtml("p", "text-[10px] text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5", `${svgIcono} ${specialty}`);

    // 4. Inyectamos directamente el SVG al lado de la especialidad
    specialtyParagraph.innerHTML = `
        ${svgIcono}
        <span>${specialty}</span>
    `;

    infoBasica.append(h3, specialtyParagraph);
    headerContent.append(img, infoBasica);


    // --- SECCIÓN DE ESTADÍSTICAS ---
    const statsContainer = crearElementoHtml("div", "flex flex-col gap-2.5 text-sm");

    const expRow = crearElementoHtml("div", "flex justify-between items-center mb-1", `<span class="text-slate-400 tracking-wider">★ EXPERIENCIA </span> <span class="font-bold text-white">${astronauta.experiencia}</span>`);

    const crearBarraProgreso = (icono, etiqueta, valor, colorClase) => {

        const container = crearElementoHtml("div", "flex flex-col gap-1");

        const labelRow = crearElementoHtml("div", "flex justify-between items-center text-xs text-slate-400 tracking-wider");
        labelRow.innerHTML = `<span>${icono} ${etiqueta.toUpperCase()}</span><span class="font-bold text-white">${valor}</span>`;

        const barBg = crearElementoHtml("div", "w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/50");

        const barFill = crearElementoHtml("div", "h-full rounded-full");
          barFill.classList.add( ...colorClase.split(" "));
        barFill.style.width = `${valor}%`;

        barBg.append(barFill);
        container.append(labelRow, barBg);
        return container;
    };

    const expeRow = crearBarraProgreso("★", "Experiencia", astronauta.experiencia, "bg-cyan-500");
    const energiaRow = crearBarraProgreso("⚡", "Energía", astronauta.energia, "bg-yellow-500");
    const saludRow = crearBarraProgreso("❤️", "Salud", astronauta.salud, "bg-emerald-500");

    statsContainer.append(expeRow, energiaRow, saludRow);

    topContainer.append(badgeEstado, headerContent, statsContainer);


    // BLOQUE INFERIOR (Pie de Card y Botones)

    const footerContainer = crearElementoHtml("div", "flex flex-col gap-3 w-full");

    const hr = crearElementoHtml("hr", "border-slate-900");

    const footerGrid = crearElementoHtml("div", "flex justify-between text-[13px] text-slate-500 tracking-wider");
  
    footerGrid.innerHTML = `
        <div>ID: <span class="text-slate-400 font-medium">${astronauta.id}</span></div>
        <div>EXPEDICIONES: <span class="text-slate-400 font-medium">${astronauta.expediciones}</span></div>
    `;

    const accionesContainer = document.createElement("div");
    accionesContainer.classList.add("grid", "grid-cols-2", "gap-2");

    const btnModificar = crearElementoHtml("button", "py-1.5 text-[10px] font-bold text-cyan-400 border border-cyan-950 bg-cyan-950/20 rounded-md hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 transition-all cursor-pointer tracking-wider", "MODIFICAR");
    btnModificar.classList.add("btn-modificar");
    
    const btnEliminar = crearElementoHtml("button", "py-1.5 text-[10px] font-bold text-rose-400 border border-rose-950 bg-rose-950/20 rounded-md hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all cursor-pointer tracking-wider", "ELIMINAR");
    btnEliminar.classList.add("btn-eliminar");
    
    accionesContainer.append(btnModificar, btnEliminar);
    footerContainer.append(hr, footerGrid, accionesContainer);

    div.append(topContainer, footerContainer);

    return div;
}

