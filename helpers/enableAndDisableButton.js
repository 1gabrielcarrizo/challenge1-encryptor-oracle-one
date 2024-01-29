import { btnDesencriptar, btnEncriptar } from "../scripts.js";
import { mostrarBotonBloqueado, mostrarBotonDisponible } from "./addAndRemoveClassList.js";
import { indicarSiContieneCaracteresEspeciales } from "./regex.js";

// funcion para habilitar botones
export const habilitarBoton = (boton) => boton.disabled = false;
// funcion para deshabiltiar botones
export const deshabilitarBoton = (boton) => boton.disabled = true;
// funcion para decidir si habilitar o deshabilitar botones
export const habilitarYDeshabilitarBoton = () => {
    const contenidoDelTextarea = textarea.value.trim();
    console.log(contenidoDelTextarea.length);
    console.log(!indicarSiContieneCaracteresEspeciales(contenidoDelTextarea));

    (!indicarSiContieneCaracteresEspeciales(contenidoDelTextarea) && contenidoDelTextarea !== "") ?
        (habilitarBoton(btnEncriptar),
        habilitarBoton(btnDesencriptar),
        mostrarBotonDisponible(btnEncriptar),
        mostrarBotonDisponible(btnDesencriptar))
    :
        (deshabilitarBoton(btnEncriptar),
        deshabilitarBoton(btnDesencriptar),
        mostrarBotonBloqueado(btnEncriptar),
        mostrarBotonBloqueado(btnDesencriptar))
}