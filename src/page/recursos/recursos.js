
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