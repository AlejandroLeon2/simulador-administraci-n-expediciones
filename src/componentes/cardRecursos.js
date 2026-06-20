// ============================================================================
// COMPONENTE: CARD RECURSOS
// ============================================================================
// Paso 4.3: Implementar renderCardRecursos(recursos)
// Recibe: Objeto recursos con propiedades: oxigeno, combustible, comida, energia
// Retorna: Elemento DOM (div) con el panel de recursos
//
// Sub-tareas:
// 1. Crear elemento contenedor con createElement('div')
// 2. Agregar clase CSS con classList.add('card', 'recursos-panel')
// 3. Crear título: "Recursos Disponibles"
// 4. Crear elementos para cada recurso con su valor
// 5. Usar barras de progreso visuales para cada recurso
// 6. Usar appendChild() para agregar elementos
// 7. Retornar el div
//
// Métodos DOM a usar: createElement(), classList.add(), setAttribute(), textContent, appendChild()

import { mostrarRecursos as DatosRecursos } from '../page/recursos/recursos.js';

console.log(DatosRecursos());

export function renderCardRecursos(DatosRecursos) {
    const div = document.createElement('div');
    div.classList.add('card', 'recursos-panel');

    const h3 = document.createElement('h3');
    h3.textContent = 'Recursos Disponibles';
    div.appendChild(h3);

    for (const recurso in DatosRecursos) {
        const p = document.createElement('p');
        p.textContent = `${recurso}: ${DatosRecursos[recurso]}`;
        div.appendChild(p);
    }
    return div;
}
