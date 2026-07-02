import { astronautas as astronautasData } from "../../data/astronautas.js";

export class Astronautas {
    listAstronautas = [];

    constructor() {
        this.listAstronautas = astronautasData;
    }
    generarIdHash(nombre) {
        const base = nombre + new Date().getTime();
        const hash = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, base);
        return hash.map(b => ('0' + (b & 0xFF).toString(16)).slice(-2)).join('');
    }
    crearAstronauta(nombre, especialidad, descripcion) {
        const id = this.generarIdHash(nombre);
        this.listAstronautas.push({
            id: id,
            nombre: nombre,
            especialidad: especialidad,
            experiencia: 0,
            energia: 100,
            salud: 100,
            estado: "Disponible",
            expediciones: 0,
            imagen: imagen || "https://photoaid.com/images/before-after/after/default.png",
            descripcion: descripcion || "Personal técnico integrado al panel de control."
        });
    }
    modificarAstronauta(id, dato) {
        const index = this.listAstronautas.findIndex(astronauta => astronauta.id === id);
        this.listAstronautas[index] = { ...this.listAstronautas[index], ...dato };
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

    removeAstronauta(id) {
        if (!confirm("¿Deseas dar de baja a este astronauta?")) return;
        this.listAstronautas.splice(this.listAstronautas.findIndex(a => a.id === id), 1);
    }

}

const astronautas = new Astronautas();
export default astronautas;

