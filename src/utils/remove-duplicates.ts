/**
 * @description Elimina elementos duplicados de un arreglo.
 * @author sorodriguezz
 *
 * @param array El arreglo desde el cual eliminar duplicados.
 * @return Un nuevo arreglo sin elementos duplicados.
 */
export function removeDuplicates<T>(array: T[]): T[] {
  return [...new Set(array)];
}
