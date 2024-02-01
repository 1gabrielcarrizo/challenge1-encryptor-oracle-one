// cambiar el estilo del boton de bloqueado a desbloqueado
export const mostrarBotonDisponible = (boton) => boton.classList.remove("boton-deshabilitado");

// cambiar el estilo del boton de desbloqueado a bloqueado
export const mostrarBotonBloqueado = (boton) => boton.classList.add("boton-deshabilitado");

// mostrar el elemento en la pantalla
export const mostrarElemento = (elemento) => elemento.classList.remove("ocultar");

// ocultar el elemento en la pantalla
export const ocultarElemento = (elemento) => elemento.classList.add("ocultar");