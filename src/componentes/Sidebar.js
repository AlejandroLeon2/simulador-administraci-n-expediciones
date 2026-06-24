import { iconCasa } from "./icons/icon-casa";
import { iconUser } from "./icons/icon-user";
import { iconCohete } from "./icons/icon-cohete";
import { iconRecurso } from "./icons/icon-recurso";
import { iconCarga } from "./icons/icon-carga";

const menuItems = [
    { label: "Inicio", page: "inicio" },
    { label: "Astronautas", page: "astronautas" },
    { label: "Expediciones", page: "expediciones" },
    { label: "Recursos", page: "recursos" },
    { label: "Carga", page: "carga" }
];

export default function Sidebar() {
    return `
        <aside class="fixed top-0 left-0 m-4 w-56 h-auto z-50 flex flex-col">
            
        <div class="titulo-menu bg-slate-900 border-r border-slate-800/80 rounded-2xl">
 
            <div class="h-20 top-0 px-2 flex items-center gap-3 border-b border-slate-800/60 bg-slate-950 whitespace-normal break-normal">
                <div class="h-15 w-15 overflow-hidden rounded-full border border-slate-700 bg-slate-950 shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                    <img 
                        src="/src/assets/logo.png" 
                        alt="Logo Nova Horizon" 
                        class="h-full w-full object-cover"
                    />
                </div>

                <div class="flex flex-col min-w-0">
                    <h1 class="text-md font-black tracking-wider text-white uppercase truncate leading-tight">
                        Nova
                    </h1>
                    <h1 class="text-md font-black tracking-wider text-white uppercase truncate leading-tight">
                        Horizon
                    </h1>
                    <span class="text-[12px] font-bold tracking-widest text-cyan-400 uppercase">
                        Expediciones
                    </span>
                </div>
            </div>

            <nav class="flex flex-col w-full pt-2 rounded-3xl mt-6">

                <button data-page="inicio" 
                    class="menu-item flex items-center gap-4 px-6 py-3.5 w-full border-b border-slate-800/50 text-slate-400 bg-linear-to-r transition-all duration-150">
                    ${iconCasa("w-6 h-6 text-blue-400")}
                    <span class="text-sm font-medium tracking-wide">${menuItems[0].label}</span>
                </button>

                <button data-page="astronautas" 
                    class="menu-item flex items-center gap-4 px-6 py-3.5 w-full border-b border-slate-800/50 text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 border-l-4 border-l-transparent transition-all duration-150">
                    ${iconUser("w-6 h-6 text-blue-400")}        
                    <span class="text-sm font-medium tracking-wide">${menuItems[1].label}</span>
                </button>

                <button data-page="misiones" 
                    class="menu-item flex items-center gap-4 px-6 py-3.5 w-full border-b border-slate-800/50 text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 border-l-4 border-l-transparent transition-all duration-150">
                    ${iconCohete("w-6 h-6 text-blue-400")}
                    <span class="text-sm font-medium tracking-wide">${menuItems[2].label}</span>
                </button>

                <button data-page="recursos" 
                    class="menu-item flex items-center gap-4 px-6 py-3.5 w-full border-b border-slate-800/50 text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 border-l-4 border-l-transparent transition-all duration-150">
                    ${iconRecurso("w-6 h-6 text-blue-400")}
                    <span class="text-sm font-medium tracking-wide">${menuItems[3].label}</span>
                </button>

                <button data-page="historial" 
                    class="menu-item flex items-center gap-4 px-6 py-3.5 w-full text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 border-l-4 border-l-transparent transition-all duration-150">
                    ${iconCarga("w-6 h-6 text-blue-400")}
                    <span class="text-sm font-medium tracking-wide">${menuItems[4].label}</span>
                </button>

            </nav>

        </div>


             <div class="flex flex-col w-full pt-2 mt-6 h-auto bg-slate-900 border-r border-slate-800/80 rounded-2xl">
                <div class="span text-lime-500 text-center text-sm mt-2">
                    <span> DÍA ESTELAR </span>
                </div>

                <div class="titulo-dias  text-white text-center">
                    <h1 id="dia-estelar" class="text-3xl font-black tracking-wider text-white uppercase truncate leading-tight">
                        1
                    </h1>
                </div>

                <div class="fecha-cronometro text-center text-sm text-white mb-1"> 
                    <p> 15:42:18 </p>
                </div>

                <div class="fecha-tradicional text-center text-sm text-white fuente mb-4">
                    <p>Martes, 23 de Junio de 2026</p>
                </div>

            </div>

        </aside>

        
    `;
}