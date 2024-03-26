import { decode } from "jsonwebtoken";

/**
 * @description Decodifica un token JWT y devuelve su payload como un objeto.
 * @author sorodriguezz
 *
 * @param token Token JWT como string.
 * @returns El payload del token o null si el token no es válido o ha expirado.
 */
export function decodeJwt(token: string): unknown | null {
  try {
    const decoded = decode(token);
    return decoded;
  } catch (error) {
    console.error("Error decodificando el token:", error);
    return null;
  }
}
