/**
 * @description Calcula el dígito verificador de un RUT Chileno.
 * @author sorodriguezz
 *
 * @param rutWithoutDigit RUT sin digito verificador.
 * @returns Retorna digito verificador para el RUT entregado.
 */
export function computeCheckDigit(rutWithoutDigit: number): string {
  const rutReverse = rutWithoutDigit.toString().split('').reverse().join('');
  let sum = 0;
  let multiplier = 2;

  for (const element of rutReverse) {
    sum += parseInt(element) * multiplier;
    multiplier = multiplier == 7 ? 2 : multiplier + 1;
  }

  const dv = 11 - (sum % 11);
  if (dv === 11) {
    return '0';
  } else if (dv === 10) {
    return 'K';
  } else {
    return dv.toString();
  }
}