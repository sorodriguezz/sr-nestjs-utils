/**
 * @description Valida RUT Chilenos en sus formatos. Ej:
 * 11.111.111-1 | 11111111-1 | 111111111
 * @author sorodriguez
 */
export function validRutFormat(rut: string): boolean {
  return /^(\d{1,3}(\.?\d{3}){2}-?[\dkK])$/.test(rut);
}
