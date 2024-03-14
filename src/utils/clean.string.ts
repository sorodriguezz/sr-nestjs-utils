/**
 * @description Limpia un string quitando espacios a los lados y saltos de linea.
 * @author sorodriguezz
 *
 * @param input Cadena a limpiar.
 * @returns Cadena limpia.
 */
export function cleanString(input: string): string {
  return input.replace(/\s+/g, ' ').trim();
}