// ============================================================================
// COMPONENTE: FILTER COMPONENT
// ============================================================================
// Responsabilidad: Crear componentes de filtrado genéricos
// Recibe: Configuración con tipo: 'container', 'input' o 'select'
// Retorna: Elemento DOM correspondiente al tipo especificado
//
// Sub-tareas:
// 1. Determinar tipo de componente desde configuración
// 2. Crear elemento correspondiente con ElementoBuilder
// 3. Aplicar configuración específica según tipo
// 4. Retornar el elemento construido
//
// Métodos DOM: ElementoBuilder, clase(), atributo(), texto(), hijo(), build()

/*
mapa de las estructuras FilterComponent

CONTAINER (tipo: 'container'):
<div>
  ├── clases CSS (configuración)
  └── componentes (array de elementos DOM)

INPUT (tipo: 'input'):
<input>
  ├── atributo: type="text"
  ├── atributo: id (configuración)
  ├── atributo: placeholder (configuración)
  └── clases CSS (configuración)

SELECT (tipo: 'select'):
<select>
  ├── atributo: id (configuración)
  ├── clases CSS (configuración)
  └── <option> (por cada opción en configuración)
        ├── atributo: value (configuración)
        └── texto (configuración)
*/

import { ElementoBuilder } from '../../scripts/elementHtml.js';

export function FilterComponent(config) {
    if (config.tipo === 'container') {
        const $container = new ElementoBuilder("div").clase(config.clases);
        config.componentes.forEach(componente => {
            $container.hijo(componente);
        });
        return $container.build();
    }
    
    if (config.tipo === 'input') {
        return new ElementoBuilder("input")
            .clase(config.clases)
            .atributo("type", "text")
            .atributo("id", config.id)
            .atributo("placeholder", config.placeholder)
            .build();
    }
    
    if (config.tipo === 'select') {
        const $select = new ElementoBuilder("select")
            .clase(config.clases)
            .atributo("id", config.id);
        
        config.opciones.forEach(opcion => {
            const $option = new ElementoBuilder("option")
                .atributo("value", opcion.valor)
                .texto(opcion.texto);
            $select.hijo($option.build());
        });
        
        return $select.build();
    }
    
    throw new Error(`Tipo de componente no válido: ${config.tipo}`);
}