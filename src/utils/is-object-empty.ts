/**
 * @description Valida si el objeto esta vacio.
 * @author sorodriguezz
 *
 * @param obj Objeto generíco a validar
 * @returns true si tiene datos, false si esta vacio.
 */
export function isObjectEmpty(obj: Object): boolean {
  return Object.keys(obj).length === 0;
}