// ============================================================================
// COMPONENTE: CARD HISTORIAL
// ============================================================================
// Paso 3.3: Implementar renderCardHistorial(registro)
// Recibe: Objeto registro con propiedades: id, fecha, nombreMision, resultado, recompensa, descripcion, astronautas, duracion, dificultad, recursosConsumidos, experienciaGanada
// Retorna: Elemento DOM (div) con la card del registro
//
// Sub-tareas:
// 1. Crear elemento contenedor con createElement('div')
// 2. Agregar clase CSS con classList.add('card')
// 3. Crear elementos para mostrar: fecha, nombre misión, resultado, recompensa
// 4. Usar colores diferentes según resultado (éxito/fracaso)
// 5. Mostrar astronautas participantes con join()
// 6. Mostrar recursos consumidos
// 7. Usar appendChild() para agregar elementos
// 8. Retornar el div
//
// Métodos de arreglos a usar: join()
// Métodos DOM a usar: createElement(), classList.add(), classList.contains(), textContent, appendChild()

export function renderCardHistorial(registro) {
  const div = document.createElement("div");
  div.classList.add(
    "card",
    "bg-slate-900",
    "border",
    "border-slate-700",
    "rounded-xl",
    "p-5",
    "text-white",
    "shadow-lg",
    "space-y-3"
  );

  const resultadoClase =
    registro.resultado === "Éxito"
      ? "text-green-400"
      : "text-red-400";

  const titulo = document.createElement("h2");
  titulo.classList.add("text-xl", "font-bold");
  titulo.textContent = registro.nombreMision;

  const fecha = document.createElement("p");
  fecha.textContent = `Fecha: ${registro.fecha}`;

  const resultado = document.createElement("p");
  resultado.classList.add("font-semibold", resultadoClase);
  resultado.textContent = `Resultado: ${registro.resultado}`;

  const recompensa = document.createElement("p");
  recompensa.textContent = `Recompensa: ${registro.recompensa}`;

  const descripcion = document.createElement("p");
  descripcion.classList.add("text-slate-300");
  descripcion.textContent = registro.descripcion;

  const astronautas = document.createElement("p");
  astronautas.textContent = `Astronautas: ${registro.astronautas.join(", ")}`;

  const duracion = document.createElement("p");
  duracion.textContent = `Duración: ${registro.duracion}`;

  const dificultad = document.createElement("p");
  dificultad.textContent = `Dificultad: ${registro.dificultad}`;

  const recursos = document.createElement("p");
  recursos.textContent = `Recursos consumidos: Combustible ${registro.recursosConsumidos.combustible}, Oxígeno ${registro.recursosConsumidos.oxigeno}, Comida ${registro.recursosConsumidos.comida}`;

  const experiencia = document.createElement("p");
  experiencia.textContent = `Experiencia ganada: ${registro.experienciaGanada}`;

  div.appendChild(titulo);
  div.appendChild(fecha);
  div.appendChild(resultado);
  div.appendChild(recompensa);
  div.appendChild(descripcion);
  div.appendChild(astronautas);
  div.appendChild(duracion);
  div.appendChild(dificultad);
  div.appendChild(recursos);
  div.appendChild(experiencia);

  return div;
}
