import { changeTheme } from "./helpers/changeTheme.js";

const toggleTheme = document.getElementById("toggle-theme"),
      textarea = document.getElementById("textarea"),
      btnEncriptar = document.getElementById("btnEncriptar"),
      btnDesencriptar = document.getElementById("btnDesencriptar"),
      btnCopiar = document.getElementById("btnCopiar"),
      footerText = document.getElementById("footerText"),
      date = new Date().getFullYear();




const habilitarBoton = (boton) => boton.removeAttribute("disabled");
const deshabilitarBoton = (boton) => boton.setAttribute("disabled", true);

const indicarSiContieneCaracteresEspeciales = (texto) => /[^a-z0-9]/.test(texto);

// const encriptarTexto = () => {
//     (indicarSiContieneCaracteresEspeciales(textarea.value)) ? deshabilitarBoton(btnEncriptar) : habilitarBoton(btnEncriptar)
//     console.log("funcion encriptar")
//     console.log(textarea.value)
// }

const encriptarTexto = () => {
    console.log("click en el boton encriptar")
}

const mostrarTextarea = () => {
    (indicarSiContieneCaracteresEspeciales(textarea.value)) ? 
        (deshabilitarBoton(btnEncriptar),
        btnEncriptar.classList.add("boton-deshabilitado"))
    :
        (habilitarBoton(btnEncriptar),
        btnEncriptar.classList.remove("boton-deshabilitado"),
        console.log(textarea.value))
    // console.log(textarea.value)
}

footerText.innerHTML = `Copyright &copy; ${date}. All rights are reserved`

toggleTheme.addEventListener("click", changeTheme);
textarea.addEventListener("input", mostrarTextarea);
btnEncriptar.addEventListener("click", encriptarTexto);