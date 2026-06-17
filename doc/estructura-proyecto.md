# Estructura del Proyecto - Guía Explicativa

Este documento explica de forma sencilla cómo está organizado el proyecto "Simulador de Expedición Espacial: Operación Nova Horizon" y para qué sirve cada carpeta y archivo.

---

## 📁 Estructura General del Proyecto

```
proyecto-spacial-nomada/
├── doc/                    # Documentación del proyecto
├── src/                    # Código fuente del proyecto
│   ├── assets/            # Imágenes, iconos, fuentes
│   ├── componentes/      # Componentes reutilizables
│   ├── data/              # Datos del proyecto
│   ├── page/              # Páginas del sitio web
│   └── styles.css         # Estilos globales
└── index.html             # Página principal
```

---

## 📂 Explicación de Cada Carpeta

### `doc/` - Documentación
**¿Qué es?** Carpeta que contiene todos los documentos explicativos del proyecto.

**¿Qué contiene?**
- `tareas.md` - Lista de tareas a realizar por cada módulo
- `01-introduccion-historia.md` - Historia y contexto del proyecto
- `02-objetivos.md` - Objetivos del proyecto
- Y más documentos técnicos...

**¿Para qué sirve?** Para que los desarrolladores entiendan qué deben hacer y cómo está organizado el proyecto.

---

### `data/` - Datos Originales
**¿Qué es?** Carpeta con los datos en formato JSON (formato de datos estándar).

**¿Qué contiene?**
- `astronautas.json` - Información de 20 astronautas
- `misiones.json` - Información de 12 misiones
- `recursos.json` - Recursos disponibles
- `historial.json` - Historial de misiones completadas

**¿Para qué sirve?** Estos son los datos "originales" del proyecto. Se usan como referencia, pero no se importan directamente en el código JavaScript.

---

### `src/` - Código Fuente
**¿Qué es?** Carpeta principal que contiene todo el código del proyecto.

**¿Por qué se llama "src"?** "src" viene de la palabra en inglés "source" que significa "fuente". Es la carpeta donde está el código fuente del proyecto.

---

### `src/assets/` - Recursos Visuales
**¿Qué es?** Carpeta para imágenes, iconos, fuentes y otros recursos visuales.

**¿Qué contiene?**
- Imágenes de astronautas
- Iconos de recursos (combustible, oxígeno, etc.)
- Logos del proyecto
- Fuentes personalizadas

**¿Para qué sirve?** Para guardar todo lo visual que se usa en la página web.

**¿Por qué se llama "assets"?** "Assets" significa "activos" o "recursos" en inglés. Son los recursos visuales del proyecto.

---

### `src/componentes/` - Componentes Reutilizables
**¿Qué es?** Carpeta que contiene piezas de código que se pueden usar en varias partes del proyecto.

**¿Qué contiene?**
- `cardAstronauta.js` - Componente para mostrar la tarjeta de un astronauta
- `cardMision.js` - Componente para mostrar la tarjeta de una misión
- `cardHistorial.js` - Componente para mostrar el registro de historial
- `cardRecursos.js` - Componente para mostrar el panel de recursos

**¿Para qué sirve?** Para no repetir código. Si necesitas mostrar una tarjeta de astronauta en diferentes partes del proyecto, solo llamas a este componente.

**¿Por qué se llama "componentes"?** Un "componente" es como una pieza de LEGO. Es un bloque de código que hace algo específico (mostrar una tarjeta, un botón, etc.) y se puede reutilizar.

**¿Cómo se conectan?**
- Los archivos en `src/page/` importan los componentes de esta carpeta
- Ejemplo: `astronautas.js` importa `cardAstronauta.js` para usarlo

---

### `src/data/` - Datos en JavaScript
**¿Qué es?** Carpeta con los mismos datos que en `data/` pero convertidos a JavaScript.

**¿Qué contiene?**
- `astronautas.js` - Datos de astronautas exportados como constante
- `misiones.js` - Datos de misiones exportados como constante
- `recursos.js` - Datos de recursos exportados como constante
- `historial.js` - Datos de historial exportados como constante

**¿Para qué sirve?** Los navegadores web no pueden importar archivos JSON directamente, por eso convertimos los datos a archivos JavaScript que exportan constantes.

**¿Por qué no usar directamente los JSON de la carpeta `data/`?** Porque los navegadores tienen limitaciones para importar JSON. Al convertirlos a JavaScript, podemos usar `import` y `export` que es la forma estándar de compartir código entre archivos.

**Ejemplo de conversión:**
```javascript
// En data/astronautas.json (formato JSON)
[
  { "nombre": "Emma", "experiencia": 10 },
  { "nombre": "John", "experiencia": 5 }
]

// En src/data/astronautas.js (formato JavaScript)
export const astronautas = [
  { nombre: "Emma", experiencia: 10 },
  { nombre: "John", experiencia: 5 }
];
```

---

### `src/page/` - Páginas del Sitio Web
**¿Qué es?** Carpeta que contiene cada página del sitio web.

**¿Qué contiene?**
- `astronautas/` - Página para mostrar astronautas
  - `astronautas.html` - Estructura HTML de la página
  - `astronautas.js` - Lógica JavaScript de la página
- `misiones/` - Página para mostrar misiones
  - `misiones.html` - Estructura HTML
  - `misiones.js` - Lógica JavaScript
- `historial/` - Página para mostrar historial
  - `historial.html` - Estructura HTML
  - `historial.js` - Lógica JavaScript
- `recursos/` - Página para mostrar recursos
  - `recursos.html` - Estructura HTML
  - `recursos.js` - Lógica JavaScript

**¿Para qué sirve?** Cada subcarpeta representa una página diferente del sitio web.

**¿Por qué se llama "page"?** "Page" significa "página" en inglés. Cada subcarpeta es una página del sitio.

**¿Cómo se conectan?**
- Cada archivo `.html` conecta su correspondiente archivo `.js` con la etiqueta `<script>`
- Cada archivo `.js` importa datos de `src/data/` y componentes de `src/componentes/`

---

### `src/styles.css` - Estilos Globales
**¿Qué es?** Archivo que contiene los estilos CSS (diseño visual) del proyecto.

**¿Para qué sirve?** Para definir colores, fuentes, márgenes, y todo lo relacionado con el diseño visual del sitio.

**¿Por qué está en `src/`?** Porque es parte del código fuente del proyecto.

---

### `index.html` - Página Principal
**¿Qué es?** Archivo HTML principal que es la "portada" del sitio web.

**¿Para qué sirve?** Es la primera página que se ve al abrir el sitio. Desde aquí se navega a las otras páginas (astronautas, misiones, etc.).

---

## 🔗 Conexiones Entre Archivos

### Flujo de Datos Típico:

```
1. Usuario abre astronautas.html
   ↓
2. astronautas.html carga astronautas.js
   ↓
3. astronautas.js importa datos de src/data/astronautas.js
   ↓
4. astronautas.js importa componente de src/componentes/cardAstronauta.js
   ↓
5. astronautas.js usa los datos y el componente para mostrar las tarjetas
   ↓
6. El usuario ve las tarjetas de astronautas en el navegador
```

### Ejemplo de Importación:

```javascript
// En src/page/astronautas/astronautas.js
import { renderCardAstronauta } from '../../componentes/cardAstronauta.js';
import { astronautas } from '../../data/astronautas.js';

// '../../' significa "subir dos carpetas"
// Desde src/page/astronautas/ → sube a src/page/ → sube a src/
// Luego entra a componentes/ o data/
```

---

## 🧩 Conceptos Clave Explicados

### ¿Qué es un Componente?
Un componente es como una "pieza prefabricada" de código. Imagina que estás construyendo una casa:
- Un ladrillo es un componente
- Una ventana es un componente
- Una puerta es un componente

En programación:
- Una tarjeta de astronauta es un componente
- Un botón es un componente
- Un menú es un componente

**Ventajas de usar componentes:**
- No tienes que escribir el mismo código varias veces
- Si cambias el componente, se actualiza en todos los lugares donde se usa
- El código es más organizado y fácil de entender

### ¿Qué es una Importación?
Una importación es como "traer" código de otro archivo para usarlo en el archivo actual.

**Analogía:** Imagina que estás cocinando y necesitas sal. En lugar de producir sal tú mismo, vas a la despensa y "importas" la sal.

En programación:
```javascript
import { astronautas } from '../../data/astronautas.js';
// "Trae" los datos de astronautas desde el archivo astronautas.js
```

### ¿Qué es una Exportación?
Una exportación es lo opuesto a la importación. Es "compartir" código para que otros archivos puedan usarlo.

**Analogía:** Si tú produces sal y la pones en la despensa, otros pueden "importarla" cuando la necesiten.

En programación:
```javascript
export const astronautas = [...];
// "Comparte" los datos de astronautas para que otros archivos puedan importarlos
```

### ¿Qué es el DOM?
DOM significa "Document Object Model" (Modelo de Objetos del Documento). Es la forma en que el navegador representa la página web.

**Analogía:** Imagina que una página web es un árbol. El DOM es ese árbol donde cada elemento (párrafo, imagen, botón) es una rama.

**Métodos DOM comunes:**
- `document.getElementById('id')` - Busca un elemento por su ID
- `document.createElement('div')` - Crea un nuevo elemento
- `appendChild(elemento)` - Agrega un elemento dentro de otro
- `textContent` - Cambia el texto de un elemento

### ¿Qué son los Módulos ES?
Los módulos ES (ECMAScript Modules) son la forma estándar de organizar código JavaScript en archivos separados.

**Antes (sin módulos):** Todo el código estaba en un solo archivo gigante.

**Ahora (con módulos):** El código está dividido en archivos pequeños que se importan y exportan entre sí.

**Beneficios:**
- Código más organizado
- Fácil de mantener
- Permite reutilizar código
- Evita conflictos de nombres

---

## 📝 Resumen de Carpetas y Archivos

| Carpeta/Archivo | Propósito | ¿Por qué se llama así? |
|----------------|-----------|------------------------|
| `doc/` | Documentación | "doc" viene de "documentación" |
| `data/` | Datos originales JSON | "data" significa "datos" |
| `src/` | Código fuente | "src" viene de "source" (fuente) |
| `src/assets/` | Recursos visuales | "assets" significa "activos/recursos" |
| `src/componentes/` | Componentes reutilizables | "componentes" son piezas reutilizables |
| `src/data/` | Datos en JavaScript | "data" significa "datos" |
| `src/page/` | Páginas del sitio | "page" significa "página" |
| `src/styles.css` | Estilos CSS | "styles" significa "estilos" |
| `index.html` | Página principal | "index" es el nombre estándar de la página principal |

---

## 🎯 ¿Por qué esta Organización?

Esta organización sigue las mejores prácticas de desarrollo web:

1. **Separación de preocupaciones:** Cada carpeta tiene un propósito claro
2. **Reutilización:** Los componentes se pueden usar en múltiples lugares
3. **Mantenibilidad:** Es fácil encontrar y modificar código
4. **Escalabilidad:** Es fácil agregar nuevas páginas o componentes
5. **Colaboración:** Varios desarrolladores pueden trabajar en diferentes archivos sin conflictos

---

## 💡 Consejos para Principiantes

1. **Empieza por entender la estructura:** Antes de escribir código, entiende qué va en cada carpeta.
2. **Lee los comentarios:** Los archivos JavaScript tienen comentarios que explican qué hacer.
3. **Sigue el flujo:** HTML → JavaScript → Datos → Componentes → DOM
4. **No tengas miedo de preguntar:** Si no entiendes algo, pregunta.
5. **Prueba paso a paso:** No intentes hacer todo de golpe, ve paso a paso.

---

## 📚 Recursos de Aprendizaje

Si quieres aprender más sobre estos conceptos:

- **JavaScript Modules:** https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules
- **DOM Manipulation:** https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model
- **CSS:** https://developer.mozilla.org/es/docs/Web/CSS
- **HTML:** https://developer.mozilla.org/es/docs/Web/HTML

---

**¿Dudas?** Consulta los otros documentos en la carpeta `doc/` o pregunta a tu instructor.
