import "../css/styles.css";

import { Header } from "../componentes/Header.js";
import Sidebar from '../componentes/Sidebar.js';
import { Footer } from "../componentes/Footer.js";

import { iniciarTiempoExpedicion } from "./tiempoExpedicion.js";


// 1. IMPORTAR MÓDULOS DE PAGINAS
import { paginaAstronautas, initAstronautas } from "../page/astronautas/astronautasPage.js";
import { paginaMisiones, initMisiones } from "../page/misiones/misionesPage.js";
import { paginaRecursos, initRecursos } from "../page/recursos/recursosPage.js";
import { paginaHistorial , initHistorial} from "../page/historial/historialPage.js";

// 2. INYECTAR LA ESTRUCTURA BASE DE LA APLICACIÓN
document.querySelector("#app").innerHTML = `
    ${Header()}
    ${Sidebar()}
    <main
        id="contenido"
        class="ml-64 mt-16 min-h-[calc(100vh-4rem)] bg-slate-950 p-8">
        <div class="text-slate-500 flex flex-col items-center justify-center h-96 border border-dashed border-slate-800 rounded-2xl">
            <p class="text-lg font-medium">Bienvenido al Simulador Nova Horizon</p>
            <p class="text-xs ">Selecciona una sección en el menú lateral para comenzar.</p>
        </div>
    </main>
    ${Footer()}
`;

iniciarTiempoExpedicion();

// 3. CAPTURAR CONTENEDORES Y BOTONES
const contenedor = document.querySelector("#contenido");

// Seleccionamos todos los botones/enlaces dentro de la navegación del Sidebar
const botonesMenu = document.querySelectorAll("aside nav button, aside nav a, .menu-item");


// 4. FUNCIÓN PARA GESTIONAR LAS CLASES ACTIVAS DEL MENÚ
function cambiarEnlaceActivo(botonPresionado) {
    botonesMenu.forEach(btn => {
        // Removemos la clase maestra de todos los botones
        btn.classList.remove("item-menu-activo");
        
        // Nos aseguramos de que todos regresen a su color gris apagado original
        btn.classList.add("text-slate-400");
    });

    // Apagamos el estado gris en el seleccionado y encendemos el diseño holográfico completo
    botonPresionado.classList.remove("text-slate-400");
    botonPresionado.classList.add("item-menu-activo");
}


// 5. ASIGNAR COMPORTAMIENTO A CADA BOTÓN
botonesMenu.forEach(boton => {
    const textoBoton = boton.textContent.trim().toUpperCase();

    // BOTÓN INICIO / RESUMEN

    // Dentro de tu botonesMenu.forEach en index.js:

    if (textoBoton.includes("INICIO") || textoBoton.includes("RESUMEN")) {
        // Inicializa con la nueva clase maestra
        boton.classList.add("item-menu-activo");

        boton.addEventListener("click", () => {
            cambiarEnlaceActivo(boton);
            contenedor.innerHTML = `
                <div class="text-slate-500 flex flex-col items-center justify-center h-96">
                    <p class="text-lg font-medium">Panel de Inicio</p>
                    <p class="text-xs">Aquí irá el resumen global del simulador.</p>
                </div>
            `;
        });
    }

    // BOTÓN ASTRONAUTAS
    if (textoBoton.includes("ASTRONAUTAS")) {
        boton.addEventListener("click", () => {
            cambiarEnlaceActivo(boton);
            
            contenedor.innerHTML = paginaAstronautas();
            initAstronautas();
        });
    }

    // BOTÓN MISIONES
    if (textoBoton.includes("MISIONES")) {
        boton.addEventListener("click", () => {
            cambiarEnlaceActivo(boton);
            contenedor.innerHTML = paginaMisiones();
            initMisiones();
        });
    }


    //BOTON RECURSOS
    if (textoBoton.includes("RECURSOS")) {
    boton.addEventListener("click", () => {
        cambiarEnlaceActivo(boton);

        contenedor.innerHTML = paginaRecursos();
        initRecursos(); // 
    });

    // BOTÓN HISTORIAL / CARGA
    if (textoBoton.includes("CARGA") || textoBoton.includes("HISTORIAL")) {
        boton.addEventListener("click", () => {
            cambiarEnlaceActivo(boton);

            contenedor.innerHTML = paginaHistorial();
            initHistorial();
        });
    }

}

});