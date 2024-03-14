/**
 * @description Divide un arreglo por lotes, especificando el tamaño del lote.
 * @author sorodriguezz
 */
export function splitArrayIntoBatches<T>(array: T[], batchSize: number): T[][] {
  const batches: T[][] = [];

  for (let i = 0; i < array.length; i += batchSize) {
    batches.push(array.slice(i, i + batchSize));
  }

  return batches;
}
