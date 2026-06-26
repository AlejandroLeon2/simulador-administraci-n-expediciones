<<<<<<< HEAD
=======
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

>>>>>>> origin/main
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
<<<<<<< HEAD
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span class="text-sm font-medium tracking-wide">Inicio</span>
=======
                    ${iconCasa("w-6 h-6 text-blue-400")}
                    <span class="text-sm font-medium tracking-wide">${menuItems[0].label}</span>
>>>>>>> origin/main
                </button>

                <button data-page="astronautas" 
                    class="menu-item flex items-center gap-4 px-6 py-3.5 w-full border-b border-slate-800/50 text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 border-l-4 border-l-transparent transition-all duration-150">
<<<<<<< HEAD
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <span class="text-sm font-medium tracking-wide">Astronautas</span>
=======
                    ${iconUser("w-6 h-6 text-blue-400")}        
                    <span class="text-sm font-medium tracking-wide">${menuItems[1].label}</span>
>>>>>>> origin/main
                </button>

                <button data-page="misiones" 
                    class="menu-item flex items-center gap-4 px-6 py-3.5 w-full border-b border-slate-800/50 text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 border-l-4 border-l-transparent transition-all duration-150">
<<<<<<< HEAD
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                    <span class="text-sm font-medium tracking-wide">Misiones</span>
=======
                    ${iconCohete("w-6 h-6 text-blue-400")}
                    <span class="text-sm font-medium tracking-wide">${menuItems[2].label}</span>
>>>>>>> origin/main
                </button>

                <button data-page="recursos" 
                    class="menu-item flex items-center gap-4 px-6 py-3.5 w-full border-b border-slate-800/50 text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 border-l-4 border-l-transparent transition-all duration-150">
<<<<<<< HEAD
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                    </svg>
                    <span class="text-sm font-medium tracking-wide">Recursos</span>
=======
                    ${iconRecurso("w-6 h-6 text-blue-400")}
                    <span class="text-sm font-medium tracking-wide">${menuItems[3].label}</span>
>>>>>>> origin/main
                </button>

                <button data-page="historial" 
                    class="menu-item flex items-center gap-4 px-6 py-3.5 w-full text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 border-l-4 border-l-transparent transition-all duration-150">
<<<<<<< HEAD
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    <span class="text-sm font-medium tracking-wide">Historial</span>
=======
                    ${iconCarga("w-6 h-6 text-blue-400")}
                    <span class="text-sm font-medium tracking-wide">${menuItems[4].label}</span>
>>>>>>> origin/main
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