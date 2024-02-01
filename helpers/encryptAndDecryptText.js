import { btnDesencriptar, btnEncriptar, equivalenciaCifrada, equivalenciaOriginal, textarea, textoDescifradoContainer, textoOcultoContainer } from "../scripts.js";
import { mostrarElemento, ocultarElemento } from "./addAndRemoveClassList.js";
import { deshabilitarBotonDisponible } from "./enableAndDisableButton.js";

export let palabrasEnElTextarea = "",
    textoCifrado = "",
    textoDescifrado = "";

export const encriptarTexto = () => {
    textoCifrado = "";
    palabrasEnElTextarea = textarea.value.trim();

    for (let i = 0; i < palabrasEnElTextarea.length; i++) {
        const letraActual = palabrasEnElTextarea.charAt(i);
        textoCifrado += equivalenciaCifrada[letraActual] || letraActual;
    }
    deshabilitarBotonDisponible(btnEncriptar);
    deshabilitarBotonDisponible(btnDesencriptar);
    textarea.setAttribute("readonly", true)
    ocultarElemento(textoDescifradoContainer);
    mostrarElemento(textoOcultoContainer);
}

export const descencriptarTexto = () => {
    palabrasEnElTextarea = textarea.value.trim();
    textoDescifrado = "";
    let i = 0;

    while (i < palabrasEnElTextarea.length) {
        let equivalenciaActual = "";

        for (let j = i; j < palabrasEnElTextarea.length; j++) {
            equivalenciaActual += palabrasEnElTextarea[j];

            if (equivalenciaOriginal[equivalenciaActual]) {
                textoDescifrado += equivalenciaOriginal[equivalenciaActual];
                i = j + 1;
                break;
            } else if (j === palabrasEnElTextarea.length - 1) {
                textoDescifrado += palabrasEnElTextarea[i];
                i++;
            }
        }
    }
    deshabilitarBotonDisponible(btnDesencriptar);
}