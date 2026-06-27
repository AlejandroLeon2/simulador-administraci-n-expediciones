//Nueva version 
/*Ejemplo de uso  const $img = new ElementoBuilder("img")
        .clase("w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-500")
        .atributo("src", mision.imagen)
        .atributo("alt", mision.nombre)
        .atributo("loading", "lazy");
        */

export class ElementoBuilder {
    constructor(tag) {
        this.el = document.createElement(tag);
    }
    clase(className) {
        this.el.classList.add(...className.trim().split(/\s+/));;
        return this;
    }
    atributo(name, value) {
        this.el.setAttribute(name, value);
        return this;
    }
    texto(content) {
        this.el.textContent = content;
        return this;
    }
    hijo(child) {
        this.el.appendChild(child);
        return this;
    }
    inyectar(texto) {
        this.el.innerHTML = texto;
        return this;

    }
    build() {
        return this.el;
    }
}

