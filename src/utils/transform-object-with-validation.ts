type TransformRule<T, K extends keyof T, U> = {
  value: K | ((source: T) => T[K]);
  default: U;
};

type TransformMap<T, U> = {
  [K in keyof U]:
    | keyof T
    | ((source: T) => U[K])
    | TransformRule<T, keyof T, U[K]>;
};

/**
 * @description Transforma un objeto a un nuevo formato basado en un mapa de transformación, aplicando validaciones
 * y valores por defecto según sea necesario. Utiliza genéricos para tipado de entrada y salida.
 * @author sorodriguezz
 *
 * @param source - El objeto fuente que se va a transformar.
 * @param Un objeto que mapea las claves del objeto fuente a las claves del objeto destino.
 * @return El objeto transformado.
 */
export function transformObjectWithValidation<T, U>(
  source: T,
  map: TransformMap<T, U>
): U {
  const transformed: Partial<U> = {};

  (Object.entries(map) as [keyof U, any][]).forEach(([newKey, rule]) => {
    let value: any;

    if (typeof rule === "function") {
      value = rule(source);
    } else if (typeof rule === "object" && "value" in rule) {
      value =
        typeof rule.value === "function"
          ? rule.value(source)
          : source[rule.value];
      if ((value === null || value === undefined) && "default" in rule) {
        value = rule.default;
      }
    } else {
      value = source[rule as keyof T];
    }

    transformed[newKey] = value;
  });

  return transformed as U;
}
