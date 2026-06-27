// ============================================================================
// COMPONENTE: CARD MISIÓN
// ============================================================================
// Paso 2.3: Implementar renderCardMision(mision)
// Recibe: Objeto misión con propiedades: id, nombre, dificultad, recompensa, combustible, oxigeno, astronautas, especialidades
// Retorna: Elemento DOM (div) con la card de la misión
//
// Sub-tareas:
// 1. Crear elemento contencrearElementoHtml('div')
// 2. Agregar clase CSS con classList.add('card')
// 3. Crear elemento h3 para el nombre de la misión
// 4. Crear elementos p para dificultad, recompensa, combustible, oxígeno
// 5. Mostrar especialidades requeridas usando join(): mision.especialidades.join(', ')
// 6. Usar appendChild() para agregar cada elemento al div
// 7. Retornar el div
//
// Métodos de arreglos a usar: join()
// Métodos DOMcrearElementoHtml(), classList.add(), textContent, appendChild()

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
import { crearElementoHtml } from "../../scripts/utils";
import { ElementoBuilder } from '../../scripts/elementHtml.js';
import { iconFlecha } from "../icons/icon-flecha";
import { iconO2 } from "../icons/icon-o2";
import { iconBotella } from "../icons/icon-botella";
import { iconUser } from "../icons/icon-user";
import { iconRayo } from "../icons/icon-rayo";
import { iconCarga } from "../icons/icon-carga.js";

export function renderCardMision(mision) {
    const $liContenedor = new ElementoBuilder("li");

    // Bloque de información
    const $divInfo = new ElementoBuilder("div").clase("grid  grid-cols-5 border p-1 border-gray-200 rounded-xs gap-4 justify-center items-center");
    const $imgMision = new ElementoBuilder("img").clase("h-16 w-16 col-span-1").atributo("src",mision.imagen).atributo("alt",mision.nombre).atributo("title", mision.nombre);

    const $divInfoTitulo = new ElementoBuilder("div").clase("flex flex-col justify-center col-span-3");
    const $h3Titulo = new ElementoBuilder("h3").clase(" font-primary ").texto(mision.nombre);
    const $pTitulo = new ElementoBuilder("p").clase("text-xs primary-text line-clamp-1").texto(mision.descripcion);

    const $divInfoTime = new ElementoBuilder("div").clase("flex flex-col justify-center col-span-1");
    const $spanTime = new ElementoBuilder("span").clase("font-primary").texto("Tiempo");
    const $pTime = new ElementoBuilder("p").clase(" text-xs primary-text").texto(mision.tiempo);

    $divInfoTitulo.hijo($h3Titulo.build()).hijo($pTitulo.build());
    $divInfoTime.hijo($spanTime.build()).hijo($pTime.build());
    $divInfo.hijo($imgMision.build()).hijo($divInfoTitulo.build()).hijo($divInfoTime.build());

    // Bloque de enlace
    const $divEnlace = new ElementoBuilder("div").clase("grid grid-cols-3 justify-around items-center");
    const $h4Enlace = new ElementoBuilder("h4").clase("col-span-2 text-xs font-primary text-center").texto("Requisitos de mision");
    const $aEnlace = new ElementoBuilder("a").clase("flex primary-text items-center justify-center duration-500 text-xl  group hover:border-gray-200 border border-transparent");
    const $spanEnlace = new ElementoBuilder("span").clase("text-sm w-0 h-5 group-hover:pl-1 group-hover:w-full overflow-hidden duration-500").texto("ver resumen");
    const $iCon = new ElementoBuilder("i").inyectar(iconFlecha());

    $aEnlace.hijo($spanEnlace.build()).hijo($iCon.build());
    $divEnlace.hijo($h4Enlace.build()).hijo($aEnlace.build());

    // Bloque de recursos
    const $ulRecursos = new ElementoBuilder("ul").clase(" flex justify-between items-center ");
    mision.requerimientos.forEach(([clave, valor]) => {
        const $liRecurso = new ElementoBuilder("li").clase("flex flex-col w-full h-full p-4 bg-red-300 justify-center items-center");
        switch (clave) {
            case "oxigeno": $liRecurso.inyectar(iconO2("h-5 w-5"));
                break;
            case "astronautas": $liRecurso.inyectar(iconUser("h-5 w-5"));
                break;
            case "comida": $liRecurso.inyectar(iconCarga("h-5 w-5"));
                break;
            case "energia": $liRecurso.inyectar(iconRayo("h-5 w-5"));
                break;
            case "combustible": $liRecurso.inyectar(iconBotella("h-5 w-5"));
                break;
            default:
                break;
        }
        const $pRecurso = new ElementoBuilder("p").clase(" text-lg").texto(valor);
        $liRecurso.hijo($pRecurso.build());
        $ulRecursos.hijo($liRecurso.build());
    });

    $liContenedor.hijo($divInfo.build()).hijo($divEnlace.build()).hijo($ulRecursos.build());
    return $liContenedor.build();

}