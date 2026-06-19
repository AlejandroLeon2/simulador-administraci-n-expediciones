// ============================================================================
// COMPONENTE: CARD MISIÓN
// ============================================================================
// Paso 2.3: Implementar renderCardMision(mision)
// Recibe: Objeto misión con propiedades: id, nombre, dificultad, recompensa, combustible, oxigeno, astronautas, especialidades
// Retorna: Elemento DOM (div) con la card de la misión
/*
{
    id: 11,
    nombre: 'Transportar Suministros',
    dificultad: 1,
    recompensa: 60,
    combustible: 40,
    oxigeno: 30,
    astronautas: 2,
    especialidades: [ 'Piloto' ]
},
*/
// Sub-tareas:
// 1. Crear elemento contenedor con createElement('div')
// 2. Agregar clase CSS con classList.add('card')
// 3. Crear elemento h3 para el nombre de la misión
// 4. Crear elementos p para dificultad, recompensa, combustible, oxígeno
// 5. Mostrar especialidades requeridas usando join(): mision.especialidades.join(', ')
// 6. Usar appendChild() para agregar cada elemento al div
// 7. Retornar el div
//
// Métodos de arreglos a usar: join()
// Métodos DOM a usar: createElement(), classList.add(), textContent, appendChild()

/*
mapa de la card Mision
<li>
  ├── <div> (con clases)
  │     ├── <img> (con clases, src, alt)
  │     ├── <div> (con clases)
  │     │     ├── <h3> (con clases, texto)
  │     │     └── <p> (con clases, texto)
  │     └── <div> (con clases)
  │           ├── <span> (con clases, texto)
  │           └── <p> (con clases, texto)
  │
  ├── <div> (con clases)
  │     ├── <h4> (con clases, texto)
  │     └── <a> (con clases, href)
  │           ├── <span> (con clases, texto)
  │           └── <i> (con clases)
  │                 └── <svg> (atributos)
  │                       └── <path> (atributos)
  │
  └── <ul> (con clases)
        └── <li> (con clases)
              ├── <i> (sin clases)
              │     └── <svg> (atributos)
              │           └── <path> (atributos)
              └── <p> (con clases, texto)

*/
import { iconO2 } from '../../assets/icons/icon-O2.js';

export function renderCardMision(mision) {// Contenedor principal
const $liContenedor = document.createElement("li");

// Bloque de información
const $divInfo = document.createElement("div");
const $imgMision = document.createElement("img");

const $divInfoTitulo = document.createElement("div");
const $h3Titulo = document.createElement("h3");
const $pTitulo = document.createElement("p");

const $divInfoTime = document.createElement("div");
const $spanTime = document.createElement("span");
const $pTime = document.createElement("p");

// Bloque de enlace
const $divEnlace = document.createElement("div");
const $h4Enlace = document.createElement("h4");
const $aEnlace = document.createElement("a");
const $spanEnlace = document.createElement("span");


// Bloque de recursos
const $ulRecursos = document.createElement("ul");
const $liRecurso = document.createElement("li");
const $pRecurso = document.createElement("p");

}
