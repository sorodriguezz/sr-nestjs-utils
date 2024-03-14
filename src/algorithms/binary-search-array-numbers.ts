/**
 * @description Búsqueda binaria para un arreglo de números donde se ingresa un objetivo a buscar
 * arrojando la posición donde esta el número encontrado. En caso que no exista en el arreglo
 * arrojará un -1.
 * @author sorodriguezz
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
