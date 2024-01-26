import { changeTheme } from "./helpers/changeTheme.js";
import { deshabilitarBoton, habilitarBoton } from "./helpers/enableAndDisableButton.js";
import { indicarSiContieneCaracteresEspeciales } from "./helpers/regex.js";

const toggleTheme = document.getElementById("toggle-theme"),
      textarea = document.getElementById("textarea"),
      btnEncriptar = document.getElementById("btnEncriptar"),
      btnDesencriptar = document.getElementById("btnDesencriptar"),
      btnCopiar = document.getElementById("btnCopiar"),
      footerText = document.getElementById("footerText"),
      textoOculto = document.getElementById("textoOculto"),
      sinTextoContainer = document.getElementById("sinTexto-container"),
      conTextoContainer = document.getElementById("conTexto-container"),
      textoOcultoContainer = document.getElementById("textoOcultoContainer"),
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
    // equivalenciaActual = "",
    textoDecifrado = "";


footerText.innerHTML = `Copyright &copy; ${date}. All rights are reserved`

const encriptarTexto = () => {
    palabrasEnElTextarea = textarea.value;
    console.log(`texto original: ${palabrasEnElTextarea}`);

    for (let i = 0; i < palabrasEnElTextarea.length; i++) {
        const letraActual = palabrasEnElTextarea.charAt(i);
        textoCifrado += equivalenciaCifrada[letraActual] || letraActual;
    }
    console.log(`texto cifrado: ${textoCifrado}`)
    deshabilitarBoton(btnEncriptar);
    btnEncriptar.classList.add("boton-deshabilitado");
    textarea.setAttribute("readonly", true)
}

const mostrarTextoCifrado = () => {
    textoOculto.textContent = textoCifrado;
    textarea.value = "";
    sinTextoContainer.classList.add("ocultar");
    conTextoContainer.classList.remove("ocultar");
    btnCopiar.classList.remove("ocultar");
}

const desencriptarTexto = () => {
    palabrasEnElTextarea = textarea.value;
    console.log("se hizo click en el boton desencriptar")
    console.log(`texto cifrado: ${palabrasEnElTextarea}`);

    let i = 0;

    while (i < palabrasEnElTextarea.length) {
        let equivalenciaActual = "";

        for (let j = i; j < palabrasEnElTextarea.length; j++) {
            equivalenciaActual += palabrasEnElTextarea[j];

            if (equivalenciaOriginal[equivalenciaActual]) {
                textoDecifrado += equivalenciaOriginal[equivalenciaActual];
                i = j + 1;
                break;
            } else if (j === palabrasEnElTextarea.length - 1) {
                textoDecifrado += palabrasEnElTextarea[i];
                i++;
            }
        }
    }

    deshabilitarBoton(btnDesencriptar);
    btnDesencriptar.classList.add("boton-deshabilitado");
    console.log(`texto decifrado: ${textoDecifrado}`);
}

const habilitarDeshabilitarBtnEncriptar = () => {
    (indicarSiContieneCaracteresEspeciales(textarea.value) || textarea.value.length < 1) ? 
        (deshabilitarBoton(btnEncriptar),
        btnEncriptar.classList.add("boton-deshabilitado"))
    :
        (habilitarBoton(btnEncriptar),
        btnEncriptar.classList.remove("boton-deshabilitado"))
}

const copiarTextoCifrado = () => {
    alert("Se ha copiado con exito el contenido y se lo ha pegado automaticamente en el textarea para descifrarlo")
    // console.log("se hizo click en el boton copiar");
    // console.log(textoOculto.textContent)
    sinTextoContainer.classList.remove("ocultar");
    conTextoContainer.classList.add("ocultar");
    textoOculto.classList.add("ocultar");
    btnCopiar.classList.add("ocultar");
    textoOcultoContainer.classList.add("ocultar");
    textarea.value = textoOculto.textContent; //textarea
    habilitarBoton(btnDesencriptar);
    btnDesencriptar.classList.remove("boton-deshabilitado");
    console.clear()
}

toggleTheme.addEventListener("click", changeTheme); // modo claro y oscuro
textarea.addEventListener("input", habilitarDeshabilitarBtnEncriptar); // habilitar o deshabilitar btn
btnEncriptar.addEventListener("click", encriptarTexto);
btnEncriptar.addEventListener("click", mostrarTextoCifrado);
btnCopiar.addEventListener("click", copiarTextoCifrado);
btnDesencriptar.addEventListener("click", desencriptarTexto);