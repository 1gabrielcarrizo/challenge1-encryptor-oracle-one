import { btnDesencriptar, btnEncriptar } from "../scripts.js";
import { mostrarBotonBloqueado, mostrarBotonDisponible } from "./addAndRemoveClassList.js";
import { indicarSiContieneCaracteresEspeciales } from "./regex.js";

// habilitar boton
export const habilitarBoton = (boton) => boton.disabled = false;
// deshabilitar boton
export const deshabilitarBoton = (boton) => boton.disabled = true;
// habilitar y cambiar el color del boton a disponible
export const habilitarBotonDisponible = (boton) => {
    habilitarBoton(boton);
    mostrarBotonDisponible(boton)
};
// deshabilitar y cambiar el color del boton a bloqueado
export const deshabilitarBotonDisponible = (boton) => {
    deshabilitarBoton(boton);
    mostrarBotonBloqueado(boton);
};
// funcion para decidir si habilitar o deshabilitar botones
export const habilitarYDeshabilitarBoton = () => {
    const contenidoDelTextarea = textarea.value.trim();
    (!indicarSiContieneCaracteresEspeciales(contenidoDelTextarea) && contenidoDelTextarea !== "") ?
        (habilitarBotonDisponible(btnEncriptar),
        habilitarBotonDisponible(btnDesencriptar))
    :
        (deshabilitarBotonDisponible(btnEncriptar),
        deshabilitarBotonDisponible(btnDesencriptar))
}