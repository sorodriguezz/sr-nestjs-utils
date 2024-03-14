/**
 * @description Valida si una cadena es un entero.
 * @author sorodriguezz
 *
 * @param value Cadena a evaluar.
 * @returns Retorna true si es un numero entero, en caso contrario false.
 */
export function isIntValid(value: string): boolean {
  return /^-?\d+$/.test(value);
}