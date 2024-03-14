/**
 * @description Búsqueda binaria para un arreglo de números.
 * @author sorodriguezz
 *
 * @param arr Arreglo de números.
 * @param target Objetivo a encontrar.
 * @returns Retorna -1 si no encontró el objetivo. Si lo encuentra retornará la posición.
 */
export function binarySearchArrayNumbers(
  arr: number[],
  target: number
): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
