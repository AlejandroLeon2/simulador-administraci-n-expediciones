# Tareas de Implementación - Ejercicio Desmenuzado

## Módulo 1: Astronautas - Sorannys

### Paso 1.1: Preparación de Datos

- [ ] Convertir `src/data/astronautas.json` a `src/data/astronautas.js`
- [ ] Exportar los datos como: `export const astronautas = [...]`
- [ ] Verificar que el archivo tenga 20 astronautas con todas las propiedades

### Paso 1.2: Implementar mostrarAstronautas()

**Recibe:** No recibe parámetros
**Retorna:** Array de objetos astronauta ordenados por experiencia (descendente)

**Sub-tareas:**

1. Importar los datos: `import { astronautas } from '../../data/astronautas.js'`
2. Crear la función `mostrarAstronautas()`
3. Usar `sort()` para ordenar por experiencia: `astronautas.sort((a, b) => b.experiencia - a.experiencia)`
4. Retornar el array ordenado
5. Exportar la función si es necesario

**Métodos de arreglos a usar:**

- `sort()` - para ordenar por experiencia

### Paso 1.3: Implementar renderCardAstronauta(astronauta)

**Recibe:** Objeto astronauta con propiedades: id, nombre, especialidad, experiencia, energia, salud, estado, expediciones
**Retorna:** Elemento DOM (div) con la card del astronauta

**Sub-tareas:**

1. Crear elemento contenedor: `const div = document.createElement('div')`
2. Agregar clase CSS: `div.classList.add('card')`
3. Crear elemento h3 para el nombre: `const h3 = document.createElement('h3')`
4. Asignar texto: `h3.textContent = astronauta.nombre`
5. Crear elementos p para especialidad, experiencia, energía, salud, estado
6. Usar `appendChild()` para agregar cada elemento al div
7. Retornar el div

**Métodos DOM a usar:**

- `createElement()` - crear elementos HTML
- `classList.add()` - agregar clases CSS
- `textContent` - asignar texto
- `appendChild()` - agregar elementos al DOM

### Paso 1.4: Implementar renderizarAstronautas()

**Sub-tareas:**

1. Llamar a `mostrarAstronautas()` para obtener datos ordenados
2. Obtener el contenedor: `const container = document.getElementById('astronautas-container')`
3. Usar `forEach()` para iterar sobre astronautas
4. Para cada astronauta, llamar a `renderCardAstronauta()`
5. Agregar cada card al contenedor con `appendChild()`
6. Llamar a la función al final del archivo

**Métodos de arreglos a usar:**

- `forEach()` - iterar sobre el array

### Paso 1.5: Conectar HTML

- [ ] Verificar que `astronautas.html` tenga `<script type="module" src="./astronautas.js"></script>`
- [ ] Verificar que tenga el CDN de Tailwind
- [ ] Verificar que tenga el link a styles.css
- [ ] Probar en el navegador

---

## Módulo 2: Misiones - Pedro

### Paso 2.1: Preparación de Datos

- [ ] Convertir `src/data/misiones.json` a `src/data/misiones.js`
- [ ] Exportar los datos como: `export const misiones = [...]`
- [ ] Verificar que el archivo tenga 12 misiones con todas las propiedades

### Paso 2.2: Implementar mostrarMisiones()

**Recibe:** No recibe parámetros
**Retorna:** Array de objetos misión

**Sub-tareas:**

1. Importar los datos: `import { misiones } from '../../data/misiones.js'`
2. Crear la función `mostrarMisiones()`
3. Retornar el array de misiones
4. (Opcional) Ordenar por dificultad o recompensa

**Métodos de arreglos a usar:**

- `sort()` - si se desea ordenar

### Paso 2.3: Implementar renderCardMision(mision)

**Recibe:** Objeto misión con propiedades: id, nombre, dificultad, recompensa, combustible, oxigeno, astronautas, especialidades
**Retorna:** Elemento DOM (div) con la card de la misión

**Sub-tareas:**

1. Crear elemento contenedor: `const div = document.createElement('div')`
2. Agregar clase CSS: `div.classList.add('card')`
3. Crear elemento h3 para el nombre de la misión
4. Crear elementos p para dificultad, recompensa, combustible, oxígeno
5. Mostrar especialidades requeridas usando `join()`: `mision.especialidades.join(', ')`
6. Usar `appendChild()` para agregar cada elemento al div
7. Retornar el div

**Métodos de arreglos a usar:**

- `join()` - unir especialidades en texto

**Métodos DOM a usar:**

- `createElement()` - crear elementos HTML
- `classList.add()` - agregar clases CSS
- `textContent` - asignar texto
- `appendChild()` - agregar elementos al DOM

### Paso 2.4: Implementar renderizarMisiones()

**Sub-tareas:**

1. Llamar a `mostrarMisiones()` para obtener datos
2. Obtener el contenedor: `const container = document.getElementById('misiones-container')`
3. Usar `forEach()` para iterar sobre misiones
4. Para cada misión, llamar a `renderCardMision()`
5. Agregar cada card al contenedor
6. Llamar a la función al final del archivo

### Paso 2.5: Conectar HTML

- [ ] Verificar que `misiones.html` tenga el script correcto
- [ ] Verificar CDN de Tailwind y link a styles.css
- [ ] Probar en el navegador

---

## Módulo 3: Historial - Robert

### Paso 3.1: Preparación de Datos

- [ ] Convertir `src/data/historial.json` a `src/data/historial.js`
- [ ] Exportar los datos como: `export const historial = [...]`
- [ ] Verificar que los registros tengan todas las propiedades enriquecidas

### Paso 3.2: Implementar mostrarHistorial()

**Recibe:** No recibe parámetros
**Retorna:** Array de objetos historial

**Sub-tareas:**

1. Importar los datos: `import { historial } from '../../data/historial.js'`
2. Crear la función `mostrarHistorial()`
3. (Opcional) Ordenar por fecha (más reciente primero)
4. Retornar el array de historial

**Métodos de arreglos a usar:**

- `sort()` - ordenar por fecha
- `reverse()` - invertir orden

### Paso 3.3: Implementar renderCardHistorial(registro)

**Recibe:** Objeto registro con propiedades: id, fecha, nombreMision, resultado, recompensa, descripcion, astronautas, duracion, dificultad, recursosConsumidos, experienciaGanada
**Retorna:** Elemento DOM (div) con la card del registro

**Sub-tareas:**

1. Crear elemento contenedor: `const div = document.createElement('div')`
2. Agregar clase CSS: `div.classList.add('card')`
3. Crear elementos para mostrar: fecha, nombre misión, resultado, recompensa
4. Usar colores diferentes según resultado (éxito/fracaso)
5. Mostrar astronautas participantes con `join()`
6. Mostrar recursos consumidos
7. Usar `appendChild()` para agregar elementos
8. Retornar el div

**Métodos de arreglos a usar:**

- `join()` - unir nombres de astronautas

**Métodos DOM a usar:**

- `createElement()` - crear elementos HTML
- `classList.add()` - agregar clases CSS
- `classList.contains()` - verificar clases para colores
- `textContent` - asignar texto
- `appendChild()` - agregar elementos al DOM

### Paso 3.4: Implementar renderizarHistorial()

**Sub-tareas:**

1. Llamar a `mostrarHistorial()` para obtener datos
2. Obtener el contenedor: `const container = document.getElementById('historial-container')`
3. Usar `forEach()` para iterar sobre registros
4. Para cada registro, llamar a `renderCardHistorial()`
5. Agregar cada card al contenedor
6. Llamar a la función al final del archivo

### Paso 3.5: Conectar HTML

- [ ] Verificar que `historial.html` tenga el script correcto
- [ ] Verificar CDN de Tailwind y link a styles.css
- [ ] Probar en el navegador

---

## Módulo 4: Recursos - Daniel

### Paso 4.1: Preparación de Datos

- [+] Convertir `src/data/recursos.json` a `src/data/recursos.js`
- [+] Exportar los datos como: `export const recursos = { ... }`
- [+] Verificar que tenga oxigeno, combustible, comida, energia

### Paso 4.2: Implementar mostrarRecursos()

**Recibe:** No recibe parámetros
**Retorna:** Objeto recursos con propiedades: oxigeno, combustible, comida, energia

**Sub-tareas:**

1. [+] Importar los datos: `import { recursos } from '../../data/recursos.js'`
2. [+] Crear la función `mostrarRecursos()`
3. [+] Retornar el objeto recursos

### Paso 4.3: Implementar renderCardRecursos(recursos)

**Recibe:** Objeto recursos con propiedades: oxigeno, combustible, comida, energia
**Retorna:** Elemento DOM (div) con el panel de recursos

**Sub-tareas:**

1. [+] Crear elemento contenedor: `const div = document.createElement('div')`
2. [+] Agregar clase CSS: `div.classList.add('card', 'recursos-panel')`
3. [+] Crear título: "Recursos Disponibles"
4. [+] Crear elementos para cada recurso con su valor
5. [+] Usar barras de progreso visuales para cada recurso
6. [+] Usar `appendChild()` para agregar elementos
7. [+] Retornar el div

**Métodos DOM a usar:**

- `createElement()` - crear elementos HTML
- `classList.add()` - agregar clases CSS
- `setAttribute()` - establecer atributos como width para barras
- `textContent` - asignar texto
- `appendChild()` - agregar elementos al DOM

### Paso 4.4: Implementar renderizarRecursos()

**Sub-tareas:**

1. [+] Llamar a `mostrarRecursos()` para obtener datos
2. [+] Obtener el contenedor: `const container = document.getElementById('recursos-container')`
3. [+] Llamar a `renderCardRecursos()` con los datos
4. [+] Agregar la card al contenedor
5. [+] Llamar a la función al final del archivo.
