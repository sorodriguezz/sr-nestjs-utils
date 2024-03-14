import { v1 as uuidv1, v3 as uuidv3, v4 as uuidv4, v5 as uuidv5 } from "uuid";

/**
 * @description Genera un UUID basado en la versión especificada.
 * @author sorodriguezz
 *
 * @param version La versión de UUID deseada ('1', '3', '4', '5').
 * @param name Para versiones '3' y '5', es necesario un nombre y un namespace.
 * @param namespace Para versiones '3' y '5', es necesario un namespace UUID.
 * @returns UUID generado o null si los parámetros son inválidos.
 */
export function generateUUID(
  version: "1" | "3" | "4" | "5",
  name?: string,
  namespace?: string
): string | null {
  switch (version) {
    case "1":
      return uuidv1();
    case "3":
      if (name && namespace) {
        return uuidv3(name, namespace);
      }
      break;
    case "4":
      return uuidv4();
    case "5":
      if (name && namespace) {
        return uuidv5(name, namespace);
      }
      break;
    default:
      return null;
  }
  return null;
}
