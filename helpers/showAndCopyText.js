import { btnCopiar, btnDesencriptar, btnEncriptar, textarea } from "../scripts.js";
import { mostrarElemento, ocultarElemento } from "./addAndRemoveClassList.js";
import { deshabilitarBotonDisponible, habilitarBotonDisponible } from "./enableAndDisableButton.js";
import { descencriptarTexto, encriptarTexto, textoCifrado, textoDescifrado } from "./encryptAndDecryptText.js";

// declaracion de constantes
export const textoOcultoEnPantalla = document.getElementById("textoOculto"),
      sinTextoContainer = document.getElementById("sinTexto-container"),
      conTextoContainer = document.getElementById("conTexto-container"),
      textoDescifradoEnPantalla = document.getElementById("textoDescifrado"),
      textoDescifradoContainer = document.getElementById("textoDescifradoContainer"),
      textoOcultoContainer = document.getElementById("textoOcultoContainer");

// mostrar el texto encriptado en la pantalla
const mostrarTextoCifrado = () => {
    textoOcultoEnPantalla.textContent = textoCifrado;
    textarea.value = "";
    ocultarElemento(sinTextoContainer);
    mostrarElemento(conTextoContainer);
    mostrarElemento(btnCopiar);
};

// encriptar texto y mostrarlo en la pantalla
export const encriptarTextoYMostrarlo = () => {
    encriptarTexto();
    mostrarTextoCifrado();
};

// mostrar el texto desencriptado en la pantalla
export const mostrarTextoDescifrado = () => {
    textoDescifradoEnPantalla.textContent = textoDescifrado;
    textarea.value = "";
    ocultarElemento(sinTextoContainer);
    mostrarElemento(conTextoContainer);
    mostrarElemento(textoDescifradoEnPantalla);
    mostrarElemento(textoDescifradoContainer);
    ocultarElemento(btnCopiar);
    textarea.removeAttribute("readonly");
    deshabilitarBotonDisponible(btnEncriptar);
};

// desencriptar texto y mostrarlo en la pantalla
export const desencriptarTextoYMostrarlo = () => {
    descencriptarTexto();
    mostrarTextoDescifrado();
};

// copiar el texto encriptado automaticamente en el textarea
export const copiarTextoCifrado = () => {
    alert("Se ha copiado con exito el contenido y se lo ha pegado automaticamente en el textarea para descifrarlo");
    mostrarElemento(sinTextoContainer);
    ocultarElemento(conTextoContainer);
    ocultarElemento(textoOcultoEnPantalla);
    ocultarElemento(btnCopiar);
    ocultarElemento(textoOcultoContainer);
    textarea.value = textoOcultoEnPantalla.textContent;
    habilitarBotonDisponible(btnDesencriptar);
};