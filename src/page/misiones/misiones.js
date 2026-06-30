import { Recursos } from "../recursos/recursos";
import { Astronauta } from "../astronautas/astronauta";
import { misiones } from "../../data/misiones";

export class Misiones {
    misiones = [];
    misionSeleccionada = null;
    astronautasMision = [];
    constructor() {
        this.misiones = misiones;
    }

    
}