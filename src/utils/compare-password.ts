import { compare } from "bcrypt";

/**
 * @description Compara cadena de contraseña con el hash de la contraseña.
 * @author sorodriguezz
 */
export async function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  return compare(password, hash);
}
