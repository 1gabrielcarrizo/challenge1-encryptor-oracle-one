import { changeTheme } from "./helpers/changeTheme.js";
import { habilitarYDeshabilitarBoton } from "./helpers/enableAndDisableButton.js";
import { descencriptarTexto, encriptarTexto } from "./helpers/encryptAndDecryptText.js";
import { copiarTextoCifrado, mostrarTextoCifrado, mostrarTextoDescifrado } from "./helpers/showAndCopyText.js";

export const toggleTheme = document.getElementById("toggle-theme"),
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

footerText.innerHTML = `Copyright &copy; ${date}. All rights are reserved`

toggleTheme.addEventListener("click", changeTheme);
textarea.addEventListener("input", habilitarYDeshabilitarBoton);
btnEncriptar.addEventListener("click", encriptarTexto);
btnEncriptar.addEventListener("click", mostrarTextoCifrado);
btnCopiar.addEventListener("click", copiarTextoCifrado);
btnDesencriptar.addEventListener("click", descencriptarTexto);
btnDesencriptar.addEventListener("click", mostrarTextoDescifrado);