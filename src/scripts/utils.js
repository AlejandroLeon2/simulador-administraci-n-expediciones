//ya no usar esta funcion 
//ahora usar la clase que esta en  src/scripts/elementHtml.js

export function crearElementoHtml(elemento, className, contenido) {
    try {
        if (!elemento) {
            throw new Error("Elemento faltante");
        }

        const $element = document.createElement(elemento);


        if (className) {
            $element.classList.add(...className.trim().split(/\s+/));
        }

        if (contenido) {
            $element.textContent = contenido;
        }
        return $element;

    } catch (error) {
        console.error("Error al crear el elemento:", error.message);
        return null;
    }
}

export class ElementDom {
    constructor(id) {
        this.el = document.getElementById(id);
        if (!this.el) {
            console.warn(`Elemento con id "${id}" no encontrado`);
        }
    }

    clase(className, mode = "add") {
        if (!this.el) return this;

        const clases = className.trim().split(/\s+/);

        switch (mode) {
            case "add":
                clases.forEach(c => {
                    if (!this.el.classList.contains(c)) {
                        this.el.classList.add(c);
                    }
                });
                break;

            case "replace":
                // Reemplaza todas las clases actuales por las nuevas
                this.el.className = "";
                this.el.classList.add(...clases);
                break;

            case "remove":
                clases.forEach(c => this.el.classList.remove(c));
                break;

            case "toggle":
                clases.forEach(c => this.el.classList.toggle(c));
                break;
        }

        return this;
    }

    atributo(name, value) {
        if (this.el) {
            this.el.setAttribute(name, value);
        }
        return this;
    }

    texto(content) {
        if (this.el) {
            this.el.textContent = content;
        }
        return this;
    }

    bind(signal) {
        if (this.el) {
            signal.suscribir(valor => {
                this.el.textContent = valor;
            });
        }
        return this;
    }
    hijo(child) {
        this.el.appendChild(child);
        return this;
    }

}
