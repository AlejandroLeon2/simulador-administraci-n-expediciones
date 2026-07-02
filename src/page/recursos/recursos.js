import { ValorReactivo } from "../../scripts/actualizadorValue";

class Recursos {
    comida = new ValorReactivo(0);
    oxigeno = new ValorReactivo(0);
    energia = new ValorReactivo(0);
    monedas = new ValorReactivo(0);
    combustible = new ValorReactivo(0);
    maxRecurso = 1000;
    constructor() {
        this.comida.actualizar(100);
        this.oxigeno.actualizar(100);
        this.energia.actualizar(100);
        this.monedas.actualizar(100);
        this.combustible.actualizar(100);
    }

    disminuirCantidad(recurso, cantidad) {
        if (cantidad > 0 && this[recurso].obtener() >= cantidad && this[recurso].obtener() > 0) {
            this[recurso].actualizar(this[recurso].obtener() - cantidad);
            return true;
        }
        return false;

    }

    aumentarCantidad(recurso, cantidad) {
        if (cantidad > 0 && this[recurso].obtener() + cantidad <= this.maxRecurso) {
            this[recurso].actualizar(this[recurso].obtener() + cantidad);
            return true;
        }
        return false;
    }

}

const recursos = new Recursos();
export default recursos;