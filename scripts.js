import { changeTheme } from "./helpers/changeTheme.js";

const toggleTheme = document.getElementById("toggle-theme"),
      footerText = document.getElementById("footerText"),
      date = new Date().getFullYear();

footerText.innerHTML = `Copyright &copy; ${date}. All rights are reserved`

toggleTheme.addEventListener("click", changeTheme);