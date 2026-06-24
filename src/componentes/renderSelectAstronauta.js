export function renderSelectedAstronaut(astronauta) {
    const container = document.getElementById("selected-astronaut-container");
    if (!container) return;

    // Control de fallos si no viene descripción en el objeto
    const descripcion = astronauta.descripcion || "Personal capacitado para operaciones críticas en órbitas bajas y misiones de reconocimiento espacial profundo.";
    const specialty = (astronauta.especialidad || astronauta.specialidad || "").toUpperCase();
    
    const badgeColor = astronauta.estado === "Disponible" 
        ? "bg-emerald-950/60 text-emerald-400 border-emerald-500/30" 
        : "bg-amber-950/60 text-amber-400 border-amber-500/30";

    container.innerHTML = `
        <div class="w-full bg-slate-950/70 border border-slate-800 rounded-xl p-6 shadow-2xl flex flex-col lg:flex-row gap-8 items-center lg:items-stretch">
            
            <div class="flex flex-col sm:flex-row gap-6 flex-1 items-center sm:items-start w-full">
                <img src="${astronauta.imagen}" alt="${astronauta.nombre}" class="w-32 h-36 rounded-xl object-cover border border-slate-700 shadow-md shrink-0" />
                
                <div class="flex flex-col gap-2 min-w-0 text-center sm:text-left">
                    <div class="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                        <h2 class="text-2xl font-bold text-white uppercase tracking-wide">${astronauta.nombre}</h2>
                        <span class="text-[9px] font-bold px-2 py-0.5 rounded border tracking-wider ${badgeColor}">
                            ● ${astronauta.estado.toUpperCase()}
                        </span>
                    </div>
                    
                    <p class="text-xs text-cyan-400 font-semibold tracking-widest uppercase">${specialty}</p>
                    
                    <div class="text-[10px] text-slate-500 space-y-0.5 font-medium tracking-wider mt-1">
                        <div>ID: <span class="text-slate-300">${astronauta.id}</span></div>
                        <div>EXPEDICIONES: <span class="text-slate-300">${astronauta.expediciones}</span></div>
                    </div>
                    
                    <p class="text-xs text-slate-400 mt-2 leading-relaxed max-w-xl font-secondary">
                        ${descripcion}
                    </p>
                </div>
            </div>

            <div class="hidden lg:block w-px bg-slate-900"></div>

            <div class="w-full lg:w-80 flex flex-col justify-center gap-4 shrink-0">
                <h4 class="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-1">Atributos</h4>
                
                <div class="flex flex-col gap-1">
                    <div class="flex justify-between items-center text-[10px] text-slate-400 tracking-wider">
                        <span>⭐ EXPERIENCIA</span>
                        <span class="font-bold text-white">${astronauta.experiencia} / 100</span>
                    </div>
                    <div class="w-full h-2 bg-slate-900 rounded-full border border-slate-800">
                        <div class="h-full bg-blue-500 rounded-full transition-all duration-500" style="width: ${astronauta.experiencia}%"></div>
                    </div>
                </div>

                <div class="flex flex-col gap-1">
                    <div class="flex justify-between items-center text-[10px] text-slate-400 tracking-wider">
                        <span>⚡ ENERGÍA</span>
                        <span class="font-bold text-white">${astronauta.energia} / 100</span>
                    </div>
                    <div class="w-full h-2 bg-slate-900 rounded-full border border-slate-800">
                        <div class="h-full bg-cyan-500 rounded-full transition-all duration-500" style="width: ${astronauta.energia}%"></div>
                    </div>
                </div>

                <div class="flex flex-col gap-1">
                    <div class="flex justify-between items-center text-[10px] text-slate-400 tracking-wider">
                        <span>❤️ SALUD</span>
                        <span class="font-bold text-white">${astronauta.salud} / 100</span>
                    </div>
                    <div class="w-full h-2 bg-slate-900 rounded-full border border-slate-800">
                        <div class="h-full bg-emerald-500 rounded-full transition-all duration-500" style="width: ${astronauta.salud}%"></div>
                    </div>
                </div>
            </div>

        </div>
    `;
}