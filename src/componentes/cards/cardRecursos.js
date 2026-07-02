
import { iconCombustible } from "../icons/icon-combustible.js";
import { iconComida } from "../icons/icon-comida.js";
import { iconOxigeno } from "../icons/icon-oxigeno.js";
import { iconEnergia } from "../icons/icon-energia.js";
import { iconMonedas } from "../icons/icon-monedas.js";


// MAPA DE FUNCIONES
const iconMap = {
    combustible: iconCombustible,
    comida: iconComida,
    oxigeno: iconOxigeno,
    energia: iconEnergia,
    monedas: iconMonedas
};

export default function CardRecursos(recurso) {

    // 1. Aseguramos valores por defecto por si el servidor no los envía o vienen vacíos
    const cantidadActual = recurso.cantidad ?? 0;
    const cantidadMaxima = recurso.max || recurso.maximo || 1000;


    const porcentaje = Math.round((recurso.cantidad / recurso.maximo) * 100);

    // 2. Limpiamos el nombre para evitar problemas de mayúsculas o tildes
    const nombreLimpio = recurso.nombre
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const funcionIcono = iconMap[nombreLimpio] || iconOxigeno;

    // 3. Definimos las variables de color tanto para el texto como para el fondo (barra)
    let textColor = "text-cyan-500";
    let bgColor = "bg-cyan-500"; // Color por defecto (Oxigeno)

    if (nombreLimpio === "combustible") {
        textColor = "text-orange-500";
        bgColor = "bg-orange-500";
    }
    if (nombreLimpio === "comida") {
        textColor = "text-lime-500";
        bgColor = "bg-lime-500";
    }
    if (nombreLimpio === "energia") {
        textColor = "text-yellow-500";
        bgColor = "bg-yellow-500";
    }
    if (nombreLimpio === "monedas") {
        textColor = "text-red-500";
        bgColor = "bg-red-500";
    }

    // 4. Renderizamos el icono con sus clases correspondientes
    const iconoRenderizado = funcionIcono(`w-10 h-10 ${textColor} shrink-0`);

    return `
        <div class="bg-slate-950/90 border-4 border-double border-slate-700 rounded-xl p-4 shadow-lg hover:transition-transform">

            <div class="flex items-center gap-4">

                <div class="w-16 h-16 flex items-center justify-center rounded-full bg-slate-800 shrink-0">
                    ${iconoRenderizado}
                </div>

                <div class="flex-1 text-left">
                    <h3 class="text-2xl font-bold text-white">
                        ${recurso.nombre}
                    </h3>

                    <p class="cantidad-max text-slate-300 text-sm mt-1 text-left">
                        ${recurso.descripcion}
                    </p>

                    <div class="mt-2">
                        <div class="cantidad-max text-sm text-end mb-1 ${textColor}">
                            <p>${recurso.cantidad} / ${recurso.maximo}</p>
                        </div>
                        <div class="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                            <div
                                class="h-2 ${bgColor} transition-all duration-500"
                                style="width: ${porcentaje}%">
                            </div>
                        </div>
                    </div>

                
                </div>

                <div class="w-20 h-20 flex shrink-0">
                    <img src="${recurso.imagen}" class="w-full h-full object-contain" />
                </div>

            </div>

            <button
                id="comprar-${recurso.clave}"
                class="w-2/3 mt-3 mx-auto flex justify-center bg-emerald-900/50 text-white border-emerald-500 rounded-md hover:bg-emerald-500 hover:text-black transition-all cursor-pointer tracking-wider"
                data-nombre="${recurso.nombre}">
                🛒 Comprar Recurso
            </button>

        </div>
    `;
}

