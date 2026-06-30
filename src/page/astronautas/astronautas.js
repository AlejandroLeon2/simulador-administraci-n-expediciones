import { astronautas } from "../../data/astronautas.js";

export class Astronautas {
    listAstronautas = [];
    
    constructor() {
        this.listAstronautas = astronautas;
    }
    generarIdHash(nombre) {
        const base = nombre + new Date().getTime();
        const hash = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, base);
        return hash.map(b => ('0' + (b & 0xFF).toString(16)).slice(-2)).join('');
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
