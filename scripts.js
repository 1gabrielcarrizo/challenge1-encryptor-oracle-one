import { changeTheme } from "./helpers/changeTheme.js";

const toggleTheme = document.getElementById("toggle-theme");
const footerText = document.getElementById("footerText");
const date = new Date().getFullYear();

footerText.innerHTML = `Copyright &copy; ${date} all rights reserved by <a href="https://www.linkedin.com/in/1gabrielcarrizo/" target="_blank">Gabriel Carrizo</a>`

toggleTheme.addEventListener("click", changeTheme);