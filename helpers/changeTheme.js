const toggleIcon = document.getElementById("toggle-icon"),
      toggleText = document.getElementById("toggle-text"),
      savedTheme = localStorage.getItem("theme");

const applyDarkTheme = () => {
    document.body.classList.add("dark");
    toggleIcon.classList.replace("fa-moon", "fa-sun");
    toggleText.textContent = "Modo Claro";
};

const applyLightTheme = () => {
    document.body.classList.remove("dark");
    toggleIcon.classList.replace("fa-sun", "fa-moon");
    toggleText.textContent = "Modo Oscuro";
};

export const changeTheme = () => {
    document.body.classList.toggle("dark");

    (document.body.classList.contains("dark")) ? applyDarkTheme() : applyLightTheme();

    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
}

(savedTheme === "dark") ? applyDarkTheme() : applyLightTheme();