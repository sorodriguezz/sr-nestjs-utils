import { computeCheckDigit } from "./compute-check-digit";
import { validRutFormat } from "./valid-rut-format";

/**
 * @description Valida RUT Chileno teniendo en cuenta su formato y su correcto dígito verificador.
 * @author sorodriguezz
 */
export function validRut(rut: string): boolean {
  const isvalidRutFormat: boolean = validRutFormat(rut);

  if (!isvalidRutFormat) {
    return false;
  }

  const cleanRut = rut.replace(/\./g, '').replace(/-/g, '');
  const body = parseInt(cleanRut.slice(0, -1));
  const checkDigit = cleanRut.slice(-1).toUpperCase();

  return computeCheckDigit(body) === checkDigit;
}