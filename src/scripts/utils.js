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

