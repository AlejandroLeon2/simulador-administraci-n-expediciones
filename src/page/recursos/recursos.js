<<<<<<< HEAD
import { recursos } from "../../data/recursos.js";
import CardRecursos from "../../componentes/CardRecursos.js";

export function paginaRecursos() {
    return `
        <section>
            <h1 class="text-white text-4xl mb-6 flex justify-center">Centro de Suministros</h1>

            <div id="contenedor-recursos"
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            </div>
        </section>
    `;
}

export function initRecursos() {
    const contenedor = document.getElementById("contenedor-recursos");

    function render() {
        contenedor.innerHTML = recursos.map(CardRecursos).join("");
        asignarEventos();
    }

    function asignarEventos() {
        document.querySelectorAll(".recargar").forEach(btn => {
            btn.addEventListener("click", (e) => {

                const nombre = e.target.dataset.nombre;
                const recurso = recursos.find(r => r.nombre === nombre);

                if (recurso.cantidad < recurso.max) {
                    recurso.cantidad += 100;

                    if (recurso.cantidad > recurso.max) {
                        recurso.cantidad = recurso.max;
                    }

                    render();
                }
            });
        });
    }

    render();
}
=======
export function paginaRecursos() {
  return `<h1 class="text-white text-xl font-bold">📦 PANEL DE RECURSOS</h1>`;
}
//prueba


// ============================================================================
// MÓDULO 4: RECURSOS - Daniel
// ============================================================================

// Paso 4.2: Implementar mostrarRecursos()
// Recibe: No recibe parámetros
// Retorna: Objeto recursos con propiedades: oxigeno, combustible, comida, energia
// Sub-tareas:
// 1. Importar los datos de recursos.js
// 2. Crear la función mostrarRecursos()
// 3. Retornar el objeto recursos

import { renderCardRecursos } from '../../componentes/cardRecursos.js';
import { recursos } from '../../data/recursos.js';


function mostrarRecursos() {
    // TODO: Implementar lógica aquí
}


// Paso 4.4: Implementar renderizarRecursos()
// Sub-tareas:
// 1. Llamar a mostrarRecursos() para obtener datos
// 2. Obtener el contenedor del DOM
// 3. Llamar a renderCardRecursos() con los datos
// 4. Agregar la card al contenedor
// 5. Llamar a la función al final del archivo

function renderizarRecursos() {
    // TODO: Implementar lógica aquí
}


// Ejecutar la función para renderizar recursos
// renderizarRecursos();
>>>>>>> origin/main
