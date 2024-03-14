/**
 * @description Retorna un arreglo de coincidencias de un arreglo según el objetivo.
 * Si se envia un una key buscará en un objeto, si no se envía, se hará como una filtro simple.
 * @author sorodriguezz
 */
export function filterObjectsByTarget<T>(
  arr: T[],
  target: unknown,
  key?: keyof T
): T[] {
  if (!key) {
    return arr.filter((obj: T) => obj === target);
  }
  return arr.filter((obj: T) => obj[key] === target);
}
