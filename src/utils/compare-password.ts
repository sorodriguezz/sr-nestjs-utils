import { compare } from "bcrypt";

/**
 * @description Compara cadena de contraseña con el hash de la contraseña.
 * @author sorodriguezz
 *
 * @param password Cadena a convetir comparar.
 * @param hash Hash para comprar con cadena.
 * @returns Retornar true si coinciden, en caso contrario false.
 */
export async function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  return compare(password, hash);
}
