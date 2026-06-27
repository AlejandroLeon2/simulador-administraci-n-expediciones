// ============================================================================
// MÓDULO 2: MISIONES - Pedro
// ============================================================================

// Paso 2.2: Implementar mostrarMisiones()
// Recibe: No recibe parámetros
// Retorna: Array de objetos misión
// Sub-tareas:
// 1. Importar los datos de misiones.js
// 2. Crear la función mostrarMisiones()
// 3. Retornar el array de misiones
// 4. (Opcional) Ordenar por dificultad o recompensa
// Métodos de arreglos a usar: sort()

import { renderCardMision } from '../../componentes/cards/cardMision.js';
import { renderCardMisionExtendida } from '../../componentes/sections/infoMision.js';
import { misiones } from '../../data/misiones.js';

const $mainMisiones = document.getElementById("misiones-container");

/*  {
    "id": 1,
    "nombre": "Explorar Cráter Atlas",
    "Descriptcion": "Encontrar rocas",
    "dificultad": 3,
    "recompensa": 120,
    "requerimientos": {
      "combustible": 90,
      "oxigeno": 70,
      "astronautas": 4,
      "comida": 50,
      "energia": 40
    },
    "especialidades": ["Ingeniero", "Médico"]
  },*/

function procesarMisiones(misiones) {

    const arrayTransformado = misiones.map(element => {
        const arrayRequerimientos = Object.entries(element.requerimientos);
        return { ...element, requerimientos: arrayRequerimientos }
    })
    return arrayTransformado;
   
};
const misionesProcesadas = procesarMisiones(misiones);


// Paso 2.4: Implementar renderizarMisiones()
// Sub-tareas:
// 1. Llamar a mostrarMisiones() para obtener datos
// 2. Obtener el contenedor del DOM
// 3. Usar forEach() para iterar sobre misiones
// 4. Para cada misión, llamar a renderCardMision()
// 5. Agregar cada card al contenedor
// 6. Llamar a la función al final del archivo

function renderizarMisiones(misionesProcesadas,element ) {
    misionesProcesadas.forEach(mision => {
        element.append(renderCardMision(mision));
    });

}
$mainMisiones.append(renderCardMisionExtendida(misionesProcesadas[0]));

//renderizarMisiones(misionesProcesadas, $mainMisiones);
