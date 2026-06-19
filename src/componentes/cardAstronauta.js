// Diccionario de iconos usando los SVGs oficiales de Heroicons (Mini / 20x20)
const HEROICONS_ESPECIALIDAD = {
    "PILOTO": `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
        </svg>

    `, 
    
    "INGENIERO": `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
        </svg>
    `, // Icono: Cog (Engranaje)

    "CIENTÍFICO": `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z" clip-rule="evenodd" />
        </svg>

    `, 

    "CIENTIFICO": "", // Copiaremos el mismo abajo para evitar problemas de tildes
    
    "MÉDICO": `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>

    ` 
};

// Duplicamos el de científico sin tilde por si acaso
HEROICONS_ESPECIALIDAD["CIENTIFICO"] = HEROICONS_ESPECIALIDAD["CIENTÍFICO"];

// Icono genérico por si agregan una especialidad que no esté mapeada
const ICONO_DEFECTO = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-cyan-400 shrink-0">
        <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
    </svg>
`;


export function renderCardAstronauta(astronauta) {
    const div = document.createElement("div");
    div.classList.add(
        "bg-slate-950/90", 
        "text-slate-300",
        "rounded-xl",
        "p-4",               
        "border-4",
        "border-double",
        "border-cyan-800",
        "shadow-md",
        "shadow-cyan-400",
        "flex",
        "flex-col",
        "justify-between",   
        "w-full",            
        "max-w-[350px]",     
        "min-h-[410px]",
        "transition-all",
        "duration-300",
        "ease-out",
        "hover:-translate-y-2",
        "hover:shadow-cyan-400"
    );

    
// BLOQUE SUPERIOR (Agrupa Cabecera + Stats)
   
    const topContainer = document.createElement("div");
    topContainer.classList.add("flex", "flex-col", "gap-5", "pt-6", "relative", "w-full");
    

    // --- BADGE DE ESTADO (Esquina superior derecha absoluta) ---
    const badgeEstado = document.createElement("span");
    badgeEstado.textContent = astronauta.estado.toUpperCase();
    badgeEstado.classList.add(
        "absolute",
        "top-0",             
        "right-0",           
        "text-[9px]",
        "font-bold",
        "px-2.5",
        "py-0.5",
        "rounded-sm",
        "border",
        "tracking-wider"
    );
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
    const specialtyParagraph = document.createElement("p");
    specialtyParagraph.classList.add(
        "text-[10px]", 
        "text-cyan-400", 
        "font-semibold", 
        "tracking-wider", 
        "flex", 
        "items-center", 
        "gap-1.5" // Pequeña separación perfecta entre el icono y la palabra
    );

    // 4. Inyectamos directamente el SVG al lado de la especialidad
    specialtyParagraph.innerHTML = `
        ${svgIcono}
        <span>${specialty}</span>
    `;

    infoBasica.append(h3, specialtyParagraph);
    headerContent.append(img, infoBasica);


// --- SECCIÓN DE ESTADÍSTICAS ---
    const statsContainer = document.createElement("div");
    statsContainer.classList.add(
        "flex",
        "flex-col",
        "gap-2.5",
        "text-sm"
    );

    const expRow = document.createElement("div");
    expRow.classList.add("flex", "justify-between", "items-center", "mb-1");
    expRow.innerHTML = `<span class="text-slate-400 tracking-wider">★ EXPERIENCIA </span> <span class="font-bold text-white">${astronauta.experiencia}</span>`;

    const crearBarraProgreso = (icono, etiqueta, valor, colorClase) => {
        const container = document.createElement("div");
        container.classList.add("flex", "flex-col", "gap-1");

        const labelRow = document.createElement("div");
        labelRow.classList.add("flex", "justify-between", "items-center", "text-xs", "text-slate-400", "tracking-wider");
        labelRow.innerHTML = `<span>${icono} ${etiqueta.toUpperCase()}</span><span class="font-bold text-white">${valor}</span>`;

        const barBg = document.createElement("div");
        barBg.classList.add("w-full", "h-1.5", "bg-slate-900", "rounded-full", "overflow-hidden", "border", "border-slate-800/50");

        const barFill = document.createElement("div");
        barFill.classList.add("h-full", "rounded-full", ...colorClase.split(" "));
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
    
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("flex", "flex-col", "gap-3", "w-full");

    const hr = document.createElement("hr");
    hr.classList.add("border-slate-900");

    const footerGrid = document.createElement("div");
    footerGrid.classList.add("flex", "justify-between", "text-[13px]", "text-slate-500", "tracking-wider");
    footerGrid.innerHTML = `
        <div>ID: <span class="text-slate-400 font-medium">${astronauta.id}</span></div>
        <div>EXPEDICIONES: <span class="text-slate-400 font-medium">${astronauta.expediciones}</span></div>
    `;

    const accionesContainer = document.createElement("div");
    accionesContainer.classList.add("grid", "grid-cols-2", "gap-2");

    const btnModificar = document.createElement("button");
    btnModificar.textContent = "MODIFICAR";
    btnModificar.classList.add(
        "py-1.5", "text-[10px]", "font-bold", "text-cyan-400", "border", "border-cyan-950",
        "bg-cyan-950/20", "rounded-md", "hover:bg-cyan-500", "hover:text-slate-950",
        "hover:border-cyan-500", "transition-all", "cursor-pointer", "tracking-wider"
    );
    
    btnModificar.classList.add("btn-modificar");

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "ELIMINAR";
    btnEliminar.classList.add(
        "py-1.5", "text-[10px]", "font-bold", "text-rose-400", "border", "border-rose-950",
        "bg-rose-950/20", "rounded-md", "hover:bg-rose-600", "hover:text-white",
        "hover:border-rose-600", "transition-all", "cursor-pointer", "tracking-wider"
    );

    btnEliminar.classList.add("btn-eliminar");

    accionesContainer.append(btnModificar, btnEliminar);
    footerContainer.append(hr, footerGrid, accionesContainer);

   
    div.append(topContainer, footerContainer);

    return div;
}

