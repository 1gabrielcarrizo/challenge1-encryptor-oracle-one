import { changeTheme } from "./helpers/changeTheme.js";
import { deshabilitarBoton, habilitarBoton } from "./helpers/enableAndDisableButton.js";
import { indicarSiContieneCaracteresEspeciales } from "./helpers/regex.js";

const toggleTheme = document.getElementById("toggle-theme"),
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
    console.log("click en la funcion encriptarTexto")
    textoCifrado = "";
    palabrasEnElTextarea = textarea.value;
    console.log(palabrasEnElTextarea.length)

    for (let i = 0; i < palabrasEnElTextarea.length; i++) {
        const letraActual = palabrasEnElTextarea.charAt(i);
        textoCifrado += equivalenciaCifrada[letraActual] || letraActual;
    }
    deshabilitarBoton(btnEncriptar);
    btnEncriptar.classList.add("boton-deshabilitado");
    deshabilitarBoton(btnDesencriptar);
    btnDesencriptar.classList.add("boton-deshabilitado");
    textarea.setAttribute("readonly", true)
    textoDescifradoContainer.classList.add("ocultar");
    textoOcultoContainer.classList.remove("ocultar");
}

const mostrarTextoCifrado = () => {
    console.log("click en la funcion mostrarTextoCifrado")
    textoOcultoEnPantalla.textContent = textoCifrado;
    textarea.value = "";
    sinTextoContainer.classList.add("ocultar");
    conTextoContainer.classList.remove("ocultar");
    btnCopiar.classList.remove("ocultar");
}

const mostrarTextoDescifrado = () => {
    textoDescifradoEnPantalla.textContent = textoDescifrado;
    textarea.value = "";
    sinTextoContainer.classList.add("ocultar");
    conTextoContainer.classList.remove("ocultar");
    textoDescifradoEnPantalla.classList.remove("ocultar");
    textoDescifradoContainer.classList.remove("ocultar");
    btnCopiar.classList.add("ocultar");

    textarea.removeAttribute("readonly");
    deshabilitarBoton(btnEncriptar);
    btnEncriptar.classList.add("boton-deshabilitado")
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
    btnDesencriptar.classList.add("boton-deshabilitado");
}

const habilitarDeshabilitarBtnEncriptar = () => {
    (indicarSiContieneCaracteresEspeciales(textarea.value) || textarea.length > 0 || palabrasEnElTextarea.length > 0) ? 
        (deshabilitarBoton(btnEncriptar),
        deshabilitarBoton(btnDesencriptar),
        btnEncriptar.classList.add("boton-deshabilitado"),
        btnDesencriptar.classList.add("boton-deshabilitado"))
    :
        (habilitarBoton(btnEncriptar),
        habilitarBoton(btnDesencriptar),
        btnEncriptar.classList.remove("boton-deshabilitado"),
        btnDesencriptar.classList.remove("boton-deshabilitado"))
}

const copiarTextoCifrado = () => {
    alert("Se ha copiado con exito el contenido y se lo ha pegado automaticamente en el textarea para descifrarlo")
    sinTextoContainer.classList.remove("ocultar");
    conTextoContainer.classList.add("ocultar");
    textoOcultoEnPantalla.classList.add("ocultar");
    btnCopiar.classList.add("ocultar");
    textoOcultoContainer.classList.add("ocultar");
    textarea.value = textoOcultoEnPantalla.textContent; //textarea
    habilitarBoton(btnDesencriptar);
    btnDesencriptar.classList.remove("boton-deshabilitado");
}

toggleTheme.addEventListener("click", changeTheme); // modo claro y oscuro
textarea.addEventListener("input", habilitarDeshabilitarBtnEncriptar); // habilitar o deshabilitar btn
btnEncriptar.addEventListener("click", encriptarTexto);
btnEncriptar.addEventListener("click", mostrarTextoCifrado);
btnCopiar.addEventListener("click", copiarTextoCifrado);
btnDesencriptar.addEventListener("click", descencriptarTexto);
btnDesencriptar.addEventListener("click", mostrarTextoDescifrado);