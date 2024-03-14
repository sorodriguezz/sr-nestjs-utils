/**
 * @description Genera una cadena aleatoria dependiendo el largo ingresado.
 * La cadena devuelve números, minúsculas y mayúsculas.
 * @author sorodriguezz
 *
 * @param length Largo de la cadena a generar
 * @returns Cadena aleatoria.
 */
export function generateRandomString(length: number): string {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
