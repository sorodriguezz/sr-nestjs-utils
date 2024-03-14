import { genSalt, hash } from "bcrypt";

/**
 * @description Encripta una cadena con bcrypt.
 * @author sorodriguezz
 *
 * @param password Cadena a encriptar.
 * @param rounds Número de vueltas para el hashing. Por defecto es 10.
 */
export async function generateHashPassword(
  password: string,
  rounds: number = 10
): Promise<string> {
  const salt = await genSalt(rounds);
  return hash(password, salt);
}
