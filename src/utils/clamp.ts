/**
 * @description Limita un número a estar dentro de un rango específico.
 * @author sorodriguezz
 *
 * @param num El número a limitar.
 * @param min El límite inferior del rango.
 * @param max El límite superior del rango.
 * @return El número limitado dentro del rango.
 */
export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}
