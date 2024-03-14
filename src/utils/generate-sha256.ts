import { createHash } from 'crypto';

/**
 * @description Genera una cadena SHA256.
 * @author sorodriguezz
 *
 * @param input Cadena a convertir.
 * @returns Nueva cadena encriptada.
 */
export function generateSHA256(input: string): string {
  return createHash('sha256').update(input).digest('hex');
}
