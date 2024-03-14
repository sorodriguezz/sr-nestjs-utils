/**
 * @description Transforma una cadena separada con - o _ a CamelCase
 * @author sorodriguezz
 *
 * @param str Cadena a transformar
 * @returns Cadena en formato CamelCase
 * @example De 'hola_mundo' a 'holaMundo'
 */
export function toCamelCase(str: string): string {
  return str.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
}