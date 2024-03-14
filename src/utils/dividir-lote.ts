/**
 * @description Método que divide un arreglo por lotes, especificando el tamaño del lote.
 * @author X-FORCE
 */
export function dividirArregloEnLotes(
  arreglo: any[],
  tamanoLote: number
): any[][] {
  const lotes: any = [];

  for (let i = 0; i < arreglo.length; i += tamanoLote) {
    lotes.push(arreglo.slice(i, i + tamanoLote));
  }

  return lotes;
}
