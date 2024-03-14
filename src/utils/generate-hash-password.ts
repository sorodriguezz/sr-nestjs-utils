import { genSalt, hash } from "bcrypt";

/**
 * @description Encripta una cadena con bcrypt. El rounds se especifica para la cantidad de
 * rondas de hashing que se usan para generar el hash. Por defecto es 10.
 * @author sorodriguezz
 */
export async function generateHashPassword(
  password: string,
  rounds: number = 10
): Promise<string> {
  const salt = await genSalt(rounds);
  return hash(password, salt);
}
