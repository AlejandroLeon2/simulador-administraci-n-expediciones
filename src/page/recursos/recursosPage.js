import { recursos } from "../../data/recursos.js";
import CardRecursos from "../../componentes/cardRecursos.js";
import { iconCombustible } from "../../componentes/icons/icon-combustible.js";
import { iconComida } from "../../componentes/icons/icon-comida.js";
import { iconOxigeno } from "../../componentes/icons/icon-oxigeno.js";
import { iconEnergia } from "../../componentes/icons/icon-energia.js";
import { iconMonedas } from "../../componentes/icons/icon-monedas.js";

const iconMap = {
    combustible: iconCombustible,
    comida: iconComida,
    oxigeno: iconOxigeno,
    energia: iconEnergia,
    monedas: iconMonedas
};

export function paginaRecursos() {
    return `
        <section>
            <h1 class="text-white text-4xl mb-6 flex justify-center font-primary uppercase tracking-widest">Centro de Suministros</h1>

            <div id="contenedor-recursos"
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            </div>
        </section>

        <!-- Modal de Compra -->
        <div id="modal-compra-recurso" style="display: none;" class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div class="bg-slate-900 border-2 border-slate-700/80 rounded-2xl p-6 shadow-2xl max-w-md w-full text-white">
                <!-- Header del Modal -->
                <div class="flex justify-between items-start mb-6">
                    <div class="flex items-center gap-4">
                        <div id="modal-recurso-icono" class="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 shrink-0">
                            <!-- Icono dinámico -->
                        </div>
                        <div>
                            <h2 id="modal-recurso-titulo" class="text-xl font-bold tracking-wide uppercase text-white font-primary"></h2>
                            <p class="text-xs text-slate-400">Adquirir suministros adicionales</p>
                        </div>
                    </div>
                    <button id="btn-cerrar-modal-compra" class="text-slate-400 hover:text-white transition-colors cursor-pointer text-2xl font-bold p-1 leading-none">&times;</button>
                </div>

                <!-- Info del Recurso -->
                <div class="bg-slate-950/80 p-4 rounded-xl border border-slate-800 mb-6 space-y-3">
                    <div class="flex justify-between text-sm">
                        <span class="text-slate-400">Estado actual:</span>
                        <span id="modal-recurso-cantidades" class="font-bold text-white font-mono"></span>
                    </div>
                    <!-- Progress Bar -->
                    <div class="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-750">
                        <div id="modal-recurso-progreso" class="h-2 transition-all duration-500 rounded-full"></div>
                    </div>
                    <div class="flex justify-between items-center text-sm pt-3 border-t border-slate-800/80">
                        <span class="text-slate-400 font-secondary">Tus Monedas:</span>
                        <div class="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg">
                            <span id="modal-recurso-monedas" class="font-black text-emerald-400 font-mono"></span>
                            <span class="text-emerald-400 text-xs">🪙</span>
                        </div>
                    </div>
                </div>

                <!-- Opciones de Compra -->
                <div class="space-y-3">
                    <h3 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Selecciona una opción:</h3>

                    <button class="opcion-compra w-full flex justify-between items-center bg-slate-800/40 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-xl p-3.5 transition-all cursor-pointer group disabled:opacity-30 disabled:pointer-events-none" data-cantidad="100" data-costo="10">
                        <div class="text-left">
                            <span class="font-bold block group-hover:text-emerald-400 transition-colors tracking-wide">+100 Unidades</span>
                            <span class="text-[10px] text-slate-500 font-secondary mt-0.5 block">Reabastecimiento rápido</span>
                        </div>
                        <div class="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                            <span class="font-black text-sm text-emerald-400 font-mono">10</span>
                            <span class="text-emerald-400 text-xs">🪙</span>
                        </div>
                    </button>

                    <button class="opcion-compra w-full flex justify-between items-center bg-slate-800/40 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-xl p-3.5 transition-all cursor-pointer group disabled:opacity-30 disabled:pointer-events-none" data-cantidad="250" data-costo="25">
                        <div class="text-left">
                            <span class="font-bold block group-hover:text-emerald-400 transition-colors tracking-wide">+250 Unidades</span>
                            <span class="text-[10px] text-slate-500 font-secondary mt-0.5 block">Reabastecimiento estándar</span>
                        </div>
                        <div class="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                            <span class="font-black text-sm text-emerald-400 font-mono">25</span>
                            <span class="text-emerald-400 text-xs">🪙</span>
                        </div>
                    </button>

                    <button class="opcion-compra w-full flex justify-between items-center bg-slate-800/40 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-xl p-3.5 transition-all cursor-pointer group disabled:opacity-30 disabled:pointer-events-none" data-cantidad="500" data-costo="50">
                        <div class="text-left">
                            <span class="font-bold block group-hover:text-emerald-400 transition-colors tracking-wide">+500 Unidades</span>
                            <span class="text-[10px] text-slate-500 font-secondary mt-0.5 block">Cargamento completo</span>
                        </div>
                        <div class="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                            <span class="font-black text-sm text-emerald-400 font-mono">50</span>
                            <span class="text-emerald-400 text-xs">🪙</span>
                        </div>
                    </button>

                    <button id="btn-compra-max" class="w-full flex justify-between items-center bg-emerald-950/20 hover:bg-emerald-900/40 border border-emerald-900/40 hover:border-emerald-700 rounded-xl p-3.5 transition-all cursor-pointer group disabled:opacity-30 disabled:pointer-events-none">
                        <div class="text-left">
                            <span class="font-bold block text-emerald-400 group-hover:text-emerald-300 tracking-wide">Comprar Máximo Posible</span>
                            <span id="label-compra-max-sub" class="text-[10px] text-slate-500 font-secondary mt-0.5 block">Hasta llenar el almacén o agotar monedas</span>
                        </div>
                        <div class="flex items-center gap-1 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 rounded-lg">
                            <span id="costo-compra-max" class="font-black text-sm text-emerald-300 font-mono">0</span>
                            <span class="text-emerald-300 text-xs">🪙</span>
                        </div>
                    </button>
                </div>

                <!-- Mensaje de error/advertencia -->
                <div id="modal-compra-mensaje" class="mt-4 text-xs text-center text-red-400 border border-red-500/20 bg-red-500/5 py-2 px-3 rounded-lg hidden font-secondary"></div>
            </div>
        </div>
    `;
}

export function initRecursos() {
    const contenedor = document.getElementById("contenedor-recursos");
    const modal = document.getElementById("modal-compra-recurso");
    const btnCerrar = document.getElementById("btn-cerrar-modal-compra");
    const btnCompraMax = document.getElementById("btn-compra-max");
    const mensajeError = document.getElementById("modal-compra-mensaje");

    let recursoSeleccionado = null;

    function render() {
        contenedor.innerHTML = recursos.map(CardRecursos).join("");
        asignarEventos();
    }

    function asignarEventos() {
        document.querySelectorAll(".btn-comprar").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const btnElement = e.target.closest("button");
                if (!btnElement) return;
                const nombre = btnElement.dataset.nombre;
                const recurso = recursos.find(r => r.nombre === nombre);
                if (recurso) {
                    abrirModalCompra(recurso);
                }
            });
        });
    }

    function abrirModalCompra(recurso) {
        recursoSeleccionado = recurso;
        actualizarValoresModal();
        modal.style.display = "flex";
    }

    function cerrarModalCompra() {
        modal.style.display = "none";
        recursoSeleccionado = null;
    }

    function actualizarValoresModal() {
        if (!recursoSeleccionado) return;

        const recursoMonedas = recursos.find(r => r.nombre === "Monedas");
        const monedasActuales = recursoMonedas ? recursoMonedas.cantidad : 0;

        // 1. Cabecera y monedas
        document.getElementById("modal-recurso-titulo").textContent = recursoSeleccionado.nombre;
        document.getElementById("modal-recurso-monedas").textContent = monedasActuales;
        document.getElementById("modal-recurso-cantidades").textContent = `${recursoSeleccionado.cantidad} / ${recursoSeleccionado.maximo}`;

        // 2. Icono
        const nombreLimpio = recursoSeleccionado.nombre
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        let textColor = "text-cyan-500";
        let bgColor = "bg-cyan-500";
        if (nombreLimpio === "combustible") {
            textColor = "text-orange-500";
            bgColor = "bg-orange-500";
        } else if (nombreLimpio === "comida") {
            textColor = "text-lime-500";
            bgColor = "bg-lime-500";
        } else if (nombreLimpio === "energia") {
            textColor = "text-yellow-500";
            bgColor = "bg-yellow-500";
        }

        const funcionIcono = iconMap[nombreLimpio] || iconOxigeno;
        document.getElementById("modal-recurso-icono").innerHTML = funcionIcono(`w-8 h-8 ${textColor} shrink-0`);

        // 3. Barra de progreso
        const porcentaje = Math.min(100, Math.round((recursoSeleccionado.cantidad / recursoSeleccionado.maximo) * 100));
        const progreso = document.getElementById("modal-recurso-progreso");
        progreso.className = `h-2 transition-all duration-500 rounded-full ${bgColor}`;
        progreso.style.width = `${porcentaje}%`;

        // 4. Opciones estándar (+100, +250, +500)
        document.querySelectorAll(".opcion-compra").forEach(btn => {
            const cantidad = parseInt(btn.dataset.cantidad);
            const costo = parseInt(btn.dataset.costo);

            if (recursoSeleccionado.cantidad >= recursoSeleccionado.maximo) {
                btn.disabled = true;
            } else if (monedasActuales < costo) {
                btn.disabled = true;
            } else if (recursoSeleccionado.cantidad + cantidad > recursoSeleccionado.maximo) {
                btn.disabled = true;
            } else {
                btn.disabled = false;
            }
        });

        // 5. Opción Máximo Posible
        const espacioDisponible = recursoSeleccionado.maximo - recursoSeleccionado.cantidad;
        const paquetesNecesarios = Math.ceil(espacioDisponible / 10);
        const paquetesComprables = Math.min(monedasActuales, paquetesNecesarios);
        const unidadesAComprar = Math.min(espacioDisponible, paquetesComprables * 10);
        const costoMaximo = paquetesComprables;

        if (espacioDisponible <= 0 || monedasActuales <= 0 || unidadesAComprar <= 0) {
            btnCompraMax.disabled = true;
            document.getElementById("costo-compra-max").textContent = "0";
            document.getElementById("label-compra-max-sub").textContent = "Recurso lleno o sin monedas disponibles";
        } else {
            btnCompraMax.disabled = false;
            document.getElementById("costo-compra-max").textContent = costoMaximo;
            document.getElementById("label-compra-max-sub").textContent = `Comprar ${unidadesAComprar} unidades por ${costoMaximo} monedas`;
        }

        // 6. Mensaje de error/ayuda
        if (recursoSeleccionado.cantidad >= recursoSeleccionado.maximo) {
            mensajeError.textContent = "Almacén lleno. No puedes comprar más de este recurso.";
            mensajeError.classList.remove("hidden");
        } else if (monedasActuales <= 0) {
            mensajeError.textContent = "No tienes monedas suficientes para comprar recursos.";
            mensajeError.classList.remove("hidden");
        } else {
            mensajeError.classList.add("hidden");
        }
    }

    // Eventos de compra para opciones estándar
    document.querySelectorAll(".opcion-compra").forEach(btn => {
        // Remover listener anterior si existiera (no es necesario si recreamos o usamos clonación, pero como initRecursos se corre una vez por montaje, es seguro adjuntar directamente)
        btn.addEventListener("click", () => {
            if (!recursoSeleccionado) return;
            const cantidad = parseInt(btn.dataset.cantidad);
            const costo = parseInt(btn.dataset.costo);

            ejecutarTransaccion(cantidad, costo);
        });
    });

    btnCompraMax.addEventListener("click", () => {
        if (!recursoSeleccionado) return;

        const recursoMonedas = recursos.find(r => r.nombre === "Monedas");
        const monedasActuales = recursoMonedas ? recursoMonedas.cantidad : 0;
        const espacioDisponible = recursoSeleccionado.maximo - recursoSeleccionado.cantidad;

        const paquetesNecesarios = Math.ceil(espacioDisponible / 10);
        const paquetesComprables = Math.min(monedasActuales, paquetesNecesarios);
        const unidadesAComprar = Math.min(espacioDisponible, paquetesComprables * 10);
        const costoMaximo = paquetesComprables;

        if (unidadesAComprar > 0 && costoMaximo > 0) {
            ejecutarTransaccion(unidadesAComprar, costoMaximo);
        }
    });

    function ejecutarTransaccion(cantidad, costo) {
        const recursoMonedas = recursos.find(r => r.nombre === "Monedas");
        if (!recursoMonedas || recursoMonedas.cantidad < costo) return;

        // Descontar monedas
        recursoMonedas.cantidad -= costo;

        // Aumentar recurso
        recursoSeleccionado.cantidad += cantidad;
        if (recursoSeleccionado.cantidad > recursoSeleccionado.maximo) {
            recursoSeleccionado.cantidad = recursoSeleccionado.maximo;
        }

        // Actualizar el header de monedas en el DOM
        const headerMonedas = document.getElementById("header-monedas");
        if (headerMonedas) {
            headerMonedas.textContent = recursoMonedas.cantidad;
        }

        // Re-renderizar la página de recursos
        render();

        // Actualizar valores del modal abierto
        actualizarValoresModal();
    }

    // Cerrar modal
    if (btnCerrar) {
        btnCerrar.addEventListener("click", cerrarModalCompra);
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                cerrarModalCompra();
            }
        });
    }

    render();
}