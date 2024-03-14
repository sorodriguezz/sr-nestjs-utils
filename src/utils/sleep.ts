/**
 * @description Espera x milesimas de segundo para continuar.
 * @author sorodriguezz
 *
 * @param ms Milesimas de segundo a esperar.
 * @returns Promesa a resolver.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}