/**
 * @description Ordena un arreglo de objetos utilizando el algoritmo QuickSort basado en una clave proporcionada.
 * @author sorodriguezz
 *
 * @param arr El arreglo de objetos a ordenar.
 * @param key La clave del objeto por la cual ordenar.
 * @param order La dirección del ordenamiento: 'asc' para ascendente o 'desc' para descendente.
 * @param left El índice inicial desde donde ordenar, por defecto es 0.
 * @param right El índice final hasta donde ordenar.
 * @return El arreglo ordenado.
 */
export function quickSortObjects<T>(
  arr: T[],
  key: string,
  order: "asc" | "desc",
  left: number = 0,
  right: number = arr.length - 1
): T[] {
  if (left < right) {
    const pivotIndex = partition(arr, key, order, left, right);
    quickSortObjects(arr, key, order, left, pivotIndex - 1);
    quickSortObjects(arr, key, order, pivotIndex + 1, right);
  }
  return arr;
}

/**
 * @description Realiza la partición del arreglo de objetos para el algoritmo QuickSort, basado en una clave.
 * @author sorodriguezz
 *
 * @param arr El arreglo a particionar.
 * @param key La clave del objeto utilizada para la comparación.
 * @param left El índice inicial.
 * @param right El índice final.
 * @return El índice del pivote después de la partición.
 */
export function partition<T>(
  arr: T[],
  key: string,
  order: "asc" | "desc",
  left: number,
  right: number
): number {
  const pivot = arr[right][key];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (compare(arr[j][key], pivot, order)) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, right);
  return i + 1;
}

/**
 * @description Intercambia dos elementos en un arreglo.
 * @author sorodriguezz
 *
 * @param arr El arreglo que contiene los elementos a intercambiar.
 * @param i El índice del primer elemento.
 * @param j El índice del segundo elemento.
 */
export function swap<T>(arr: T[], i: number, j: number): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * @description Compara dos elementos tomando en cuenta la dirección del ordenamiento.
 * @author sorodriguezz
 *
 * @param a Primer elemento para comparar.
 * @param b Segundo elemento para comparar.
 * @param order La dirección del ordenamiento: 'asc' para ascendente o 'desc' para descendente.
 * @return Resultado de la comparación acorde a la dirección del ordenamiento.
 */
export function compare(
  a: unknown,
  b: unknown,
  order: "asc" | "desc"
): boolean {
  return order === "asc" ? a <= b : a >= b;
}
