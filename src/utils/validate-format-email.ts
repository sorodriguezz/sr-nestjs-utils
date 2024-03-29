/**
 * @description Valida formato de email.
 * @author sorodriguezz
 *
 * @param email Cadena de email a evaluar
 * @returns Retorna true si esta correcto el formato, en caso contrario false.
 */
export function validateFormatEmail(email: string): boolean {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.toLowerCase());
}
