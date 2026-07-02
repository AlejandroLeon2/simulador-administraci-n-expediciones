import recursos from "../recursos/recursos.js";
import astronautas from "../astronautas/astronautas.js";
import { misiones as misionesData } from "../../data/misiones";
import { ValorReactivo } from "../../scripts/actualizadorValue.js";

/*export const misiones = [
  {
    "id": 1,
    "nombre": "Explorar Cráter Atlas",
    "descripcion": "Encontrar rocas",
    "dificultad": 3,
    "recompensa": 120,
    "tiempo": 45,
    "imagen": "https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/S7QKQXPRGFKTBL6ITGESOJ32HQ.jpg",
    "requerimientos": { "combustible": 90, "oxigeno": 70, "astronautas": 4, "comida": 50, "energia": 40 },
    "consumo": { "astronautas": 1, "combustible": 10, "oxigeno": 10, "comida": 10, "energia": 10 },
    "especialidades": [
      { "rol": "Ingeniero", "asignado": false },
      { "rol": "Médico", "asignado": false }
    ]
  }, */

export class Misiones {
    listMisiones = [];
    misionSeleccionada = new ValorReactivo(null);
    constructor() {
        this.recursos = recursos;
        this.astronautas = astronautas;
        this.listMisiones = misionesData;
    }

    setMisionSeleccionada(misionId) {
        this.misionSeleccionada.actualizar(misionId);
    }

    getMisionSeleccionada() {
        const id = this.misionSeleccionada.obtener();
        return this.listMisiones.find(m => m.id === id);
    }

    getMisionById(misionId) {
        return this.listMisiones.findIndex(mision => mision.id === misionId);
    }

    filtrarMisiones(busquedaTexto, filtroDificultad) {
        return this.listMisiones.filter((mision) => {
            const coincideNombre = mision.nombre.toLowerCase().includes(busquedaTexto.toLowerCase());
            const coincideDificultad = filtroDificultad === "TODAS" || mision.dificultad === parseInt(filtroDificultad);
            return coincideNombre && coincideDificultad;
        });
    }

    addRecursoMision(recurso, cantidad) {
        const mision = this.getMisionSeleccionada();
        if (!mision) return false;
        const consumoActual = mision.consumo[recurso];
        const requerimiento = mision.requerimientos[recurso];

        if (cantidad > 0 && consumoActual + cantidad <= requerimiento && this.recursos[recurso].obtener() >= cantidad) {
            this.recursos.disminuirCantidad(recurso, cantidad);
            mision.consumo[recurso] += cantidad;
            return true;
        }
        return false;
    }

    removeRecursoMision(recurso, cantidad) {
        const mision = this.getMisionSeleccionada();
        if (!mision) return false;
        const consumoActual = mision.consumo[recurso];
        if (cantidad > 0 && consumoActual - cantidad >= 0
            && this.recursos[recurso].obtener() + cantidad <= this.recursos.maxRecurso) {
            this.recursos.aumentarCantidad(recurso, cantidad);
            mision.consumo[recurso] -= cantidad;
            return true;
        }
        return false;
    }



}

const misiones = new Misiones();
export default misiones;