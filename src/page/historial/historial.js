
// ============================================================================
// MÓDULO 3: HISTORIAL - Robert
// ============================================================================

// Paso 3.2: Implementar mostrarHistorial()
// Recibe: No recibe parámetros
// Retorna: Array de objetos historial
// Sub-tareas:
// 1. Importar los datos de historial.js
// 2. Crear la función mostrarHistorial()
// 3. (Opcional) Ordenar por fecha (más reciente primero)
// 4. Retornar el array de historial
// Métodos de arreglos a usar: sort(), reverse()

// Paso 3.4: Implementar renderizarHistorial()
// Sub-tareas:
// 1. Llamar a mostrarHistorial() para obtener datos
// 2. Obtener el contenedor del DOM
// 3. Usar forEach() para iterar sobre registros
// 4. Para cada registro, llamar a renderCardHistorial()
// 5. Agregar cada card al contenedor
// 6. Llamar a la función al final del archivo

import { historial } from "../../data/historial.js";

export class Historial {
    historial = [];

    constructor() {
        this.historial = historial;
    }
}