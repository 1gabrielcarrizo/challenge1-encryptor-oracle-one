// devuelve true o false de acuerdo si se cumple o no la condicion
export const indicarSiContieneCaracteresEspeciales = (texto) => /[^a-z0-9\s]/.test(texto);