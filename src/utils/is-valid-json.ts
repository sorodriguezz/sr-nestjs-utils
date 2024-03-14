/**
 * @description Verifica si una cadena es un JSON válido.
 * @author sorodriguezz
 *
 * @param str La cadena a verificar.
 * @return `true` si la cadena es un JSON válido, `false` de lo contrario.
 */
export function isValidJSON(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
