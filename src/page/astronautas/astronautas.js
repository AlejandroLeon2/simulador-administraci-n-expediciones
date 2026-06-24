console.log("URL actual:", window.location.href);
console.log(document.body.innerHTML);

import "../../css/styles.css";
import { astronautas as datosIniciales } from "../../data/astronautas.js";
import { renderCardAstronauta } from "../../componentes/cardAstronauta.js";
import { renderSelectedAstronaut } from "../../componentes/renderSelectAstronauta.js";

// 📦 ESTADO GLOBAL DE LA APLICACIÓN
let listaAstronautas = [...datosIniciales];
let busquedaTexto = "";
let filtroEspecialidad = "TODOS";
let astronautaEditando = null;


// NUEVA VISTA BASE EXPORTADA (Para que index.js renderice los contenedores)

export function paginaAstronautas() {
    return `
        <div class="text-white">
            <div class="flex justify-between items-center mb-6">
                <div>
                    <h1 class="text-2xl font-black tracking-wider uppercase">Panel de Tripulación</h1>
                    <p class="text-xs text-slate-400">Gestión de personal y visualización biométrica del simulador.</p>
                </div>
                <button id="btn-agregar-astronauta" class="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase rounded-lg transition-all cursor-pointer tracking-wider">
                    + Registrar Astronauta
                </button>
            </div>

            <div id="selected-astronaut-container" class="mb-6"></div>

            <div class="flex flex-col sm:flex-row gap-4 mb-6">
                <input id="search-astronauta" type="text" placeholder="Buscar por nombre..." class="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-cyan-500 uppercase tracking-wider" />
                <select id="filter-especialidad" class="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-cyan-500 text-slate-400 cursor-pointer">
                    <option value="TODOS">Todas las Especialidades</option>
                    <option value="PILOTO">Piloto</option>
                    <option value="INGENIERO">Ingeniero</option>
                    <option value="CIENTÍFICO">Científico</option>
                    <option value="MÉDICO">Médico</option>
                </select>
            </div>

            <div id="astronautas-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"></div>
        </div>

        <div id="modal-astronauta" style="display: none;" class="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
            <div class="bg-slate-950 border border-cyan-800 rounded-xl p-6 w-full max-w-md max-h-[85vh] overflow-y-auto shadow-[0_0_25px_rgba(34,211,238,0.15)] flex flex-col">
                
                <h2 class="text-xl font-bold text-cyan-400 mb-4 tracking-wider uppercase">
                    Astronauta
                </h2>

                <form id="form-astronauta" class="space-y-4 text-sm text-slate-300">
                    <div>
                        <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Nombre</label>
                        <input id="modal-nombre" type="text" class="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500" required>
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Especialidad</label>
                        <select id="modal-especialidad" class="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none focus:border-cyan-500 cursor-pointer">
                            <option value="Piloto">Piloto</option>
                            <option value="Ingeniero">Ingeniero</option>
                            <option value="Científico">Científico</option>
                            <option value="Médico">Médico</option>
                        </select>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Experiencia</label>
                            <input id="modal-experiencia" type="number" min="0" max="100" class="w-full p-2 rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500" required>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Energía</label>
                            <input id="modal-energia" type="number" min="0" max="100" class="w-full p-2 rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500" value="100">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Salud</label>
                            <input id="modal-salud" type="number" min="0" max="100" class="w-full p-2 rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500" value="100">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Estado</label>
                            <select id="modal-estado" class="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none focus:border-cyan-500 cursor-pointer">
                                <option value="Disponible">Disponible</option>
                                <option value="En misión">En misión</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Expediciones</label>
                        <input id="modal-expediciones" type="number" min="0" class="w-full p-2 rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500" value="0">
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Imagen URL</label>
                        <input id="modal-imagen" type="text" class="w-full p-2 rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500">
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-slate-400 mb-1 uppercase">Descripción</label>
                        <textarea id="modal-descripcion" rows="3" class="w-full p-2 rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 resize-none"></textarea>
                    </div>

                    <div class="flex gap-3 pt-2">
                        <button type="button" id="btn-cerrar-modal" class="flex-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 font-bold py-2 rounded text-xs tracking-wider uppercase transition-colors">
                            Cancelar
                        </button>
                        <button type="submit" id="btn-guardar-astronauta" class="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-2 rounded shadow-[0_0_15px_rgba(6,182,212,0.3)] text-xs tracking-wider uppercase transition-all">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

function normalizar(texto) {
    return (texto || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
        .trim();
}

// 🔍 FILTRADO
function mostrarAstronautas() {
    return listaAstronautas.filter((astronauta) => {
        const coincideNombre = astronauta.nombre
            .toLowerCase()
            .includes(busquedaTexto.toLowerCase());

        const espAstronauta = normalizar(astronauta.especialidad);
        const espFiltro = normalizar(filtroEspecialidad);

        const coincideEspecialidad =
        !espFiltro ||
        espFiltro === "TODOS" ||
        espAstronauta === espFiltro;

        return coincideNombre && coincideEspecialidad;
    });
}

// 🖥️ FUNCIÓN RENDERIZAR
export function renderizarAstronautas() {
    const container = document.getElementById("astronautas-container");
    if (!container) return;

    container.innerHTML = "";
    const filtrados = mostrarAstronautas();
    const astronautasOrdenados = [...filtrados].sort((a, b) => b.experiencia - a.experiencia);

    if (astronautasOrdenados.length > 0) {
        renderSelectedAstronaut(astronautasOrdenados[0]);
    }

    if (astronautasOrdenados.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center p-10">
                <h3 class="text-red-400 text-xl">No se encontraron astronautas</h3>
            </div>
        `;
        return;
    }

    astronautasOrdenados.forEach((astronauta) => {
        const card = renderCardAstronauta(astronauta);
        const btnModificar = card.querySelector(".btn-modificar");
        const btnEliminar = card.querySelector(".btn-eliminar");

        if (btnModificar) {
            btnModificar.addEventListener("click", (e) => {
                e.stopPropagation();
                abrirModalEditar(astronauta);
            });
        }

        if (btnEliminar) {
            btnEliminar.addEventListener("click", (e) => {
                e.stopPropagation();
                eliminarAstronauta(astronauta.id);
            });
        }

        card.addEventListener("click", (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
            renderSelectedAstronaut(astronauta);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        container.appendChild(card);
    });
}

// ⚡ ESCUCHADORES DE EVENTOS ACTUALIZADOS
function configurarEventosFiltros() {
    const inputBuscar = document.getElementById("search-astronauta");
    const selectEspecialidad = document.getElementById("filter-especialidad");

    if (inputBuscar) {
        inputBuscar.addEventListener("input", (e) => {
            busquedaTexto = e.target.value;
            renderizarAstronautas();
        });
    }

    if (selectEspecialidad) {
        selectEspecialidad.addEventListener("change", (e) => {
            filtroEspecialidad = e.target.value;
            renderizarAstronautas();
        });
    }
}

// =======================================================
// OPERACIONES CRUD (AGREGAR, ELIMINAR, MODIFICAR)
// =======================================================
export function agregarAstronauta(nuevoAstro) {
    const proximoId = listaAstronautas.length > 0 
        ? Math.max(...listaAstronautas.map(a => a.id)) + 1 
        : 1;

    listaAstronautas.push({
        id: proximoId,
        nombre: nuevoAstro.nombre || "Sin Nombre",
        especialidad: nuevoAstro.especialidad || "INGENIERO",
        experiencia: Number(nuevoAstro.experiencia) || 10,
        energia: 100,
        salud: 100,
        estado: "Disponible",
        expediciones: 0,
        imagen: nuevoAstro.imagen || "https://photoaid.com/images/before-after/after/default.png",
        descripcion: nuevoAstro.descripcion || "Personal técnico integrado al panel de control."
    });

    renderizarAstronautas();
}

export function abrirModalEditar(astronauta) {
    astronautaEditando = astronauta;
    document.getElementById("modal-nombre").value = astronauta.nombre;
    document.getElementById("modal-especialidad").value = (astronauta.especialidad || "INGENIERO").toUpperCase();
    document.getElementById("modal-experiencia").value = astronauta.experiencia;
    document.getElementById("modal-descripcion").value = astronauta.descripcion || "";
    
    // 🔧 MODIFICADO AQUÍ: Muestra usando Flex dinámico nativo
    document.getElementById("modal-astronauta").style.display = "flex";
}

export function modificarAstronauta(id, datosNuevos) {
    listaAstronautas = listaAstronautas.map((astro) => {
        if (astro.id === id) {
            return { ...astro, ...datosNuevos };
        }
        return astro;
    });
    renderizarAstronautas();
}

export function eliminarAstronauta(id) {
    if (!confirm("¿Deseas dar de baja a este astronauta?")) return;
    listaAstronautas = listaAstronautas.filter(astro => astro.id !== id);
    renderizarAstronautas();
}

function configurarBotonesGlobales() {
    const btnNuevo = document.getElementById("btn-agregar-astronauta");
    const modal = document.getElementById("modal-astronauta");
    const btnCerrar = document.getElementById("btn-cerrar-modal");
    const formulario = document.getElementById("form-astronauta");

    if (!modal || !btnNuevo) return;

    btnNuevo.addEventListener("click", () => {
        astronautaEditando = null;
        if (formulario) formulario.reset();
        
        // 🔧 MODIFICADO AQUÍ: Muestra en flex al pulsar el botón de registro
        modal.style.display = "flex";
    });

    if (btnCerrar) {
        btnCerrar.addEventListener("click", () => {
            // 🔧 MODIFICADO AQUÍ: Oculta con display none
            modal.style.display = "none";
        });
    }

    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("modal-nombre").value;
            const specialty = document.getElementById("modal-especialidad").value;
            const exp = document.getElementById("modal-experiencia").value;
            const desc = document.getElementById("modal-descripcion").value;

            if (astronautaEditando) {
                modificarAstronauta(astronautaEditando.id, {
                    nombre,
                    especialidad: specialty,
                    experiencia: Number(exp),
                    descripcion: desc
                });
                astronautaEditando = null;
            } else {
                agregarAstronauta({
                    nombre,
                    especialidad: specialty,
                    experiencia: Number(exp),
                    descripcion: desc
                });
            }
            
            // 🔧 MODIFICADO AQUÍ: Oculta al guardar exitosamente
            modal.style.display = "none";
        });
    }
}

// =========================================================================
// 🚀 INICIALIZADOR ASÍNCRONO COHERENTE (Llamado desde index.js)
// =========================================================================
export function initAstronautas() {
    configurarEventosFiltros();
    configurarBotonesGlobales();
    renderizarAstronautas();
}
