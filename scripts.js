import { changeTheme } from "./helpers/changeTheme.js";
import { deshabilitarBoton, habilitarBoton } from "./helpers/enableAndDisableButton.js";
import { indicarSiContieneCaracteresEspeciales } from "./helpers/regex.js";

const toggleTheme = document.getElementById("toggle-theme"),
      textarea = document.getElementById("textarea"),
      btnEncriptar = document.getElementById("btnEncriptar"),
      btnDesencriptar = document.getElementById("btnDesencriptar"),
      btnCopiar = document.getElementById("btnCopiar"),
      footerText = document.getElementById("footerText"),
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
let palabras = "",
    textoCifrado = "",
    textoOriginal = "";


footerText.innerHTML = `Copyright &copy; ${date}. All rights are reserved`

const encriptarTexto = () => {
    palabras = textarea.value;
    console.log(palabras);

    for (let i = 0; i < palabras.length; i++) {
        const letraActual = palabras.charAt(i);
        textoCifrado += equivalenciaCifrada[letraActual] || letraActual;
    }
    console.log(textoCifrado)
}

const desencriptarTexto = () => {
    palabras = textarea.value;
    console.log(palabras);

    for (let i = 0; i < palabras.length; i++) {
        const letraActual = palabras.charAt(i);
        textoOriginal += equivalenciaOriginal[letraActual] || letraActual;
    }
    console.log(textoOriginal)
}

const habilitarDeshabilitarBtnEncriptar = () => {
    (indicarSiContieneCaracteresEspeciales(textarea.value)) ? 
        (deshabilitarBoton(btnEncriptar),
        btnEncriptar.classList.add("boton-deshabilitado"))
    :
        (habilitarBoton(btnEncriptar),
        btnEncriptar.classList.remove("boton-deshabilitado"))
}


toggleTheme.addEventListener("click", changeTheme); // modo claro y oscuro
textarea.addEventListener("input", habilitarDeshabilitarBtnEncriptar); // habilitar o deshabilitar btn
// btnEncriptar.addEventListener("click", encriptarTexto);
btnEncriptar.addEventListener("click", desencriptarTexto);
// btnDesencriptar.addEventListener("click", desencriptarTexto);