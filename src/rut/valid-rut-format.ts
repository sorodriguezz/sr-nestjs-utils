/**
 * @description Valida RUT Chilenos en sus formatos.
 * @author sorodriguez
 *
 * @param rut RUT en los formatos 11.111.111-1 | 11111111-1 | 111111111
 * @returns Retorna true si el formato es correcto, de lo contrario false.
 */
export function validRutFormat(rut: string): boolean {
  return /^(\d{1,3}(\.?\d{3}){2}-?[\dkK])$/.test(rut);
}
