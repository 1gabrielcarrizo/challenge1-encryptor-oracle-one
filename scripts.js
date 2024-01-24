import { changeTheme } from "./helpers/changeTheme.js";

const toggleTheme = document.getElementById("toggle-theme");

toggleTheme.addEventListener("click", changeTheme);