export const mostrarBotonDisponible = (boton) => boton.classList.remove("boton-deshabilitado");
export const mostrarBotonBloqueado = (boton) => boton.classList.add("boton-deshabilitado");
export const mostrarElemento = (elemento) => elemento.classList.remove("ocultar");
export const ocultarElemento = (elemento) => elemento.classList.add("ocultar");