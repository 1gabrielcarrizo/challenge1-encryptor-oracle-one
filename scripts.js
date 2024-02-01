import { mostrarElemento, ocultarElemento } from "./helpers/addAndRemoveClassList.js";
import { changeTheme } from "./helpers/changeTheme.js";
import { deshabilitarBotonDisponible, habilitarBotonDisponible, habilitarYDeshabilitarBoton } from "./helpers/enableAndDisableButton.js";
import { descencriptarTexto, encriptarTexto, textoCifrado, textoDescifrado } from "./helpers/encryptAndDecryptText.js";

export const toggleTheme = document.getElementById("toggle-theme"),
      textarea = document.getElementById("textarea"),
      btnEncriptar = document.getElementById("btnEncriptar"),
      btnDesencriptar = document.getElementById("btnDesencriptar"),
      btnCopiar = document.getElementById("btnCopiar"),
      footerText = document.getElementById("footerText"),
      textoOcultoEnPantalla = document.getElementById("textoOculto"),
      textoDescifradoEnPantalla = document.getElementById("textoDescifrado"),
      sinTextoContainer = document.getElementById("sinTexto-container"),
      conTextoContainer = document.getElementById("conTexto-container"),
      textoOcultoContainer = document.getElementById("textoOcultoContainer"),
      textoDescifradoContainer = document.getElementById("textoDescifradoContainer"),
      date = new Date().getFullYear(),
      equivalenciaCifrada = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    },
    equivalenciaOriginal = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

footerText.innerHTML = `Copyright &copy; ${date}. All rights are reserved`

const mostrarTextoCifrado = () => {
    textoOcultoEnPantalla.textContent = textoCifrado;
    textarea.value = "";
    ocultarElemento(sinTextoContainer);
    mostrarElemento(conTextoContainer);
    mostrarElemento(btnCopiar);
}

const mostrarTextoDescifrado = () => {
    textoDescifradoEnPantalla.textContent = textoDescifrado;
    textarea.value = "";
    ocultarElemento(sinTextoContainer);
    mostrarElemento(conTextoContainer);
    mostrarElemento(textoDescifradoEnPantalla);
    mostrarElemento(textoDescifradoContainer);
    ocultarElemento(btnCopiar);

    textarea.removeAttribute("readonly");
    deshabilitarBotonDisponible(btnEncriptar);
}

const copiarTextoCifrado = () => {
    alert("Se ha copiado con exito el contenido y se lo ha pegado automaticamente en el textarea para descifrarlo");
    mostrarElemento(sinTextoContainer);
    ocultarElemento(conTextoContainer);
    ocultarElemento(textoOcultoEnPantalla);
    ocultarElemento(btnCopiar);
    ocultarElemento(textoOcultoContainer);
    textarea.value = textoOcultoEnPantalla.textContent; //textarea
    habilitarBotonDisponible(btnDesencriptar);
}

toggleTheme.addEventListener("click", changeTheme);
textarea.addEventListener("input", habilitarYDeshabilitarBoton);
btnEncriptar.addEventListener("click", encriptarTexto);
btnEncriptar.addEventListener("click", mostrarTextoCifrado);
btnCopiar.addEventListener("click", copiarTextoCifrado);
btnDesencriptar.addEventListener("click", descencriptarTexto);
btnDesencriptar.addEventListener("click", mostrarTextoDescifrado);