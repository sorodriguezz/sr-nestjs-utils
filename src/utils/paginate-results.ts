export interface PaginationOptions {
  page: number;
  limit: number;
}

/**
 * @description Pagína un arreglo pasando el número de página a buscar y la cantidad de registros por página.
 * @author sorodriguezz
 *
 * @param options Describir página y cantidad de registros por página.
 * @param results Arreglo a paginar.
 * @returns Resultado paginado.
 */
export function paginateResults<T>(
  options: PaginationOptions,
  results: T[]
): T[] {
  const { page, limit } = options;
  return results.slice((page - 1) * limit, page * limit);
}
