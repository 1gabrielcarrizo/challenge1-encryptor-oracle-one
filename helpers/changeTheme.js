// declaracion de constantes
const toggleIcon = document.getElementById("toggle-icon"),
      toggleText = document.getElementById("toggle-text"),
      savedTheme = localStorage.getItem("theme"); // obtener el tema guardado en el localStorage

// funcion para aplicar tema oscuro
const applyDarkTheme = () => {
    document.body.classList.add("dark");
    toggleIcon.classList.replace("fa-moon", "fa-sun");
    toggleText.textContent = "Modo Claro";
};

// funcion para aplicar tema claro
const applyLightTheme = () => {
    document.body.classList.remove("dark");
    toggleIcon.classList.replace("fa-sun", "fa-moon");
    toggleText.textContent = "Modo Oscuro";
};

// funcion para cambiar entre tema oscuro y claro
export const changeTheme = () => {
    document.body.classList.toggle("dark");
    (document.body.classList.contains("dark")) ? applyDarkTheme() : applyLightTheme();
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme); // guardar tema elegido en el localStorage
}

// aplicar el ultimo tema seleccionado cuando se ingresa nuevamente a la pagina
(savedTheme === "dark") ? applyDarkTheme() : applyLightTheme();