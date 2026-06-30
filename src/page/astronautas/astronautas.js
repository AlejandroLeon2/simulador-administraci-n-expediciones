import { astronautas } from "../../data/astronautas.js";

export class Astronautas {
    listAstronautas = [];
    
    constructor() {
        this.listAstronautas = astronautas;
    }
    
    getListAstronautas() {
        return this.listAstronautas;
    }

    getAstronautaEspecialidad(especialidad) {
        return this.listAstronautas.filter(astronauta => astronauta.especialidad === especialidad);
    }
    
    setListAstronautas(listAstronautas) {
        this.listAstronautas = listAstronautas;
    }

    addAstronauta(astronauta) {
        this.listAstronautas.push(astronauta);
    }

    removeAstronauta(astronauta) {
        this.listAstronautas.splice(this.listAstronautas.findIndex(a => a.id === astronauta.id), 1);
    }

}

console.log(new Astronautas().getAstronautaEspecialidad("Ingeniero"));
