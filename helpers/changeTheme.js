const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

export const changeTheme = () => {
    document.body.classList.toggle("dark");
    (toggleIcon.src.includes("moon.svg")) ?
        (toggleIcon.src = "assets/icons/sun.svg",
        toggleText.textContent = "Modo Claro")
        :
        (toggleIcon.src = "assets/icons/moon.svg",
        toggleText.textContent = "Modo Oscuro")
}