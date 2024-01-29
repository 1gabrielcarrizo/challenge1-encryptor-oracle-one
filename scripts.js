import { mostrarBotonBloqueado, mostrarBotonDisponible, mostrarElemento, ocultarElemento } from "./helpers/addAndRemoveClassList.js";
import { changeTheme } from "./helpers/changeTheme.js";
import { deshabilitarBoton, habilitarBoton, habilitarYDeshabilitarBoton } from "./helpers/enableAndDisableButton.js";

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
let palabrasEnElTextarea = "",
    textoCifrado = "",
    textoDescifrado = "";


footerText.innerHTML = `Copyright &copy; ${date}. All rights are reserved`

const encriptarTexto = () => {
    textoCifrado = "";
    palabrasEnElTextarea = textarea.value;

    for (let i = 0; i < palabrasEnElTextarea.length; i++) {
        const letraActual = palabrasEnElTextarea.charAt(i);
        textoCifrado += equivalenciaCifrada[letraActual] || letraActual;
    }
    deshabilitarBoton(btnEncriptar);
    mostrarBotonBloqueado(btnEncriptar);
    deshabilitarBoton(btnDesencriptar);
    mostrarBotonBloqueado(btnDesencriptar);
    textarea.setAttribute("readonly", true)
    ocultarElemento(textoDescifradoContainer);
    mostrarElemento(textoOcultoContainer);
}

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
    deshabilitarBoton(btnEncriptar);
    mostrarBotonBloqueado(btnEncriptar);
}

const descencriptarTexto = () => {
    palabrasEnElTextarea = textarea.value;
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

    deshabilitarBoton(btnDesencriptar);
    mostrarBotonBloqueado(btnDesencriptar);
}

const copiarTextoCifrado = () => {
    alert("Se ha copiado con exito el contenido y se lo ha pegado automaticamente en el textarea para descifrarlo");
    mostrarElemento(sinTextoContainer);
    ocultarElemento(conTextoContainer);
    ocultarElemento(textoOcultoEnPantalla);
    ocultarElemento(btnCopiar);
    ocultarElemento(textoOcultoContainer);
    textarea.value = textoOcultoEnPantalla.textContent; //textarea
    habilitarBoton(btnDesencriptar);
    mostrarBotonDisponible(btnDesencriptar);
}

toggleTheme.addEventListener("click", changeTheme);
textarea.addEventListener("input", habilitarYDeshabilitarBoton);
btnEncriptar.addEventListener("click", encriptarTexto);
btnEncriptar.addEventListener("click", mostrarTextoCifrado);
btnCopiar.addEventListener("click", copiarTextoCifrado);
btnDesencriptar.addEventListener("click", descencriptarTexto);
btnDesencriptar.addEventListener("click", mostrarTextoDescifrado);