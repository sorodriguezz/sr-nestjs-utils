/**
 * @description Obtiene una variable de entorno.
 * @author sorodriguezz
 *
 * @param key Variable de entorno a obtener
 * @param defaultValue Varible por defecto en caso de no encontrar.
 * @returns Valor de la variable encontrado, en caso de no encontrar la por defecto.
 */
export function getEnvOrDefault(key: string, defaultValue: string): string {
  return process.env[key] || defaultValue;
}