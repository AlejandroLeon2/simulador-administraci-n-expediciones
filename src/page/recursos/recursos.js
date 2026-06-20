// ============================================================================
// MÓDULO 4: RECURSOS - Daniel
// ============================================================================

import { recursos as PropRecursos } from '../../data/recursos.js';
import { renderCardRecursos } from '../../componentes/cardRecursos.js';

// Paso 4.2: Implementar mostrarRecursos()
// Recibe: No recibe parámetros
// Retorna: Objeto recursos con propiedades: oxigeno, combustible, comida, energia
// Sub-tareas:
// 1. Importar los datos de recursos.js
// 2. Crear la función mostrarRecursos()
// 3. Retornar el objeto recursos

export function mostrarRecursos() {
    let recursos = { ...PropRecursos };
    return recursos;
}

// Paso 4.4: Implementar renderizarRecursos()
// Sub-tareas:
// 1. Llamar a mostrarRecursos() para obtener datos
// 2. Obtener el contenedor del DOM
// 3. Llamar a renderCardRecursos() con los datos
// 4. Agregar la card al contenedor
// 5. Llamar a la función al final del archivo

function renderizarRecursos() {
    const recursos = mostrarRecursos();
    const container = document.getElementById('recursos-container');
    container.appendChild(renderCardRecursos(recursos));
}

renderizarRecursos();
