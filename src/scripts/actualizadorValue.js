export class ValorReactivo {
    constructor(valorInicial) {
        this.valor = valorInicial;
        this.suscriptores = new Set();
    }

    obtener() {
        return this.valor;
    }

    actualizar(nuevoValor) {
        if (nuevoValor === this.valor) return;
        this.valor = nuevoValor;
        this.suscriptores.forEach(fn => fn(this.valor));
    }

    suscribir(fn) {
        this.suscriptores.add(fn);
        fn(this.valor);
        return () => this.suscriptores.delete(fn);
    }
}

