export class Recursos {
    comida = 0;
    oxigeno = 0;
    energia = 0;
    monedas = 0;
    combustible = 0;
    maxRecurso = 1000;
    constructor() {
        this.comida = 100;
        this.oxigeno = 100;
        this.energia = 100;
        this.monedas = 100;
        this.combustible = 100;
    }

    getComida() {
        return this.comida;
    }

    getOxigeno() {
        return this.oxigeno;
    }

    getEnergia() {
        return this.energia;
    }

    getMonedas() {
        return this.monedas;
    }

    getCombustible() {
        return this.combustible;
    }

    disminuirCantidad(recurso, cantidad) {
        if (cantidad > 0 && this[recurso] >= cantidad && this[recurso] > 0) {
            this[recurso] -= cantidad;
        }

    }

    aumentarCantidad(recurso, cantidad) {
        if (cantidad > 0 && this[recurso] + cantidad <= this.maxRecurso) {
            this[recurso] += cantidad;
        }
    }

}
