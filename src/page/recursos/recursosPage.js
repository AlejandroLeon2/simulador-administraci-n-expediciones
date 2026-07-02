
import { recursos as recursosData } from "../../data/recursos.js";
import recursos from "./recursos.js";
import CardRecursos from "../../componentes/cards/cardRecursos.js";

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
    render(contenedor);
    const $comprarComida = document.getElementById("comprar-comida");
    const $comprarOxigeno = document.getElementById("comprar-oxigeno");
    const $comprarEnergia = document.getElementById("comprar-energia");
    const $comprarCombustible = document.getElementById("comprar-combustible");

    $comprarComida.addEventListener("click", () => {
        recursos.aumentarCantidad("comida", 100);
    });

    $comprarOxigeno.addEventListener("click", () => {
        recursos.aumentarCantidad("oxigeno", 100);
    });

    $comprarEnergia.addEventListener("click", () => {
        recursos.aumentarCantidad("energia", 100);
    });

    $comprarCombustible.addEventListener("click", () => {
        recursos.aumentarCantidad("combustible", 100);
    });
}
function render(element) {
    element.innerHTML = recursosData.map(CardRecursos).join("");

}