# Modelo de Datos

## Objeto: Astronauta

```javascript
{
    id: 1,
    nombre: "Emma Carter",
    especialidad: "Ingeniero",
    experiencia: 65,
    energia: 100,
    salud: 100,
    estado: "Disponible",
    expediciones: 0
}
```

**Propiedades:**
- `id`: Identificador único del astronauta
- `nombre`: Nombre completo del astronauta
- `especialidad`: Especialidad del astronauta (Ingeniero, Médico, etc.)
- `experiencia`: Nivel de experiencia (0-100)
- `energia`: Nivel de energía (0-100)
- `salud`: Nivel de salud (0-100)
- `estado`: Estado actual (Disponible, No Disponible)
- `expediciones`: Cantidad de expediciones realizadas

## Objeto: Recursos

```javascript
{
    oxigeno: 500,
    combustible: 700,
    comida: 450,
    energia: 300
}
```

**Propiedades:**
- `oxigeno`: Cantidad de oxígeno disponible
- `combustible`: Cantidad de combustible disponible
- `comida`: Cantidad de comida disponible
- `energia`: Cantidad de energía disponible

## Objeto: Misión

```javascript
{
    id: 1,
    nombre: "Explorar Cráter Atlas",
    dificultad: 3,
    recompensa: 120,
    combustible: 90,
    oxigeno: 70,
    astronautas: 4,
    especialidades: [
        "Ingeniero",
        "Médico"
    ]
}
```

**Propiedades:**
- `id`: Identificador único de la misión
- `nombre`: Nombre de la misión
- `dificultad`: Nivel de dificultad (1-5)
- `recompensa`: Recompensa al completar la misión
- `combustible`: Combustible necesario para la misión
- `oxigeno`: Oxígeno necesario para la misión
- `astronautas`: Cantidad mínima de astronautas requeridos
- `especialidades`: Arreglo de especialidades requeridas

## Objeto: Historial

```javascript
{
    fecha: "",
    nombreMision: "",
    resultado: "Éxito",
    recompensa: 200
}
```

**Propiedades:**
- `fecha`: Fecha de la misión
- `nombreMision`: Nombre de la misión realizada
- `resultado`: Resultado de la misión (Éxito/Fracaso)
- `recompensa`: Recompensa obtenida
