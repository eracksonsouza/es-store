/**
 * Utilit\u00e1rios para manipula\u00e7\u00e3o de cores.
 * Fun\u00e7\u00f5es puras sem depend\u00eancias externas.
 */

/**
 * Ajusta o brilho de uma cor hexadecimal.
 *
 * @param color - Cor no formato #RRGGBB
 * @param amount - Quantidade a ajustar (-255 a 255)
 *                 Valores positivos clareiam, negativos escurecem
 * @returns Nova cor ajustada no formato #RRGGBB
 *
 * @example
 * adjustColor("#ff0000", 20)  // clareia vermelho
 * adjustColor("#00ff00", -30) // escurece verde
 */
export function adjustColor(color: string, amount: number): string {
  // Remove o # e converte para n\u00famero
  const hex = color.replace("#", "");
  const num = parseInt(hex, 16);

  // Extrai componentes RGB
  const r = (num >> 16) & 0xff;
  const g = (num >> 8) & 0xff;
  const b = num & 0xff;

  // Ajusta cada componente, mantendo entre 0-255
  const newR = Math.max(0, Math.min(255, r + amount));
  const newG = Math.max(0, Math.min(255, g + amount));
  const newB = Math.max(0, Math.min(255, b + amount));

  // Reconstr\u00f3i a cor hex
  const newHex = ((newR << 16) | (newG << 8) | newB)
    .toString(16)
    .padStart(6, "0");

  return `#${newHex}`;
}

/**
 * Valida se uma string \u00e9 uma cor hexadecimal v\u00e1lida.
 *
 * @param color - String a validar
 * @returns true se for um hex v\u00e1lido (#RRGGBB)
 */
export function isValidHexColor(color: string): boolean {
  return /^#[0-9A-Fa-f]{6}$/.test(color);
}

/**
 * Converte RGB para hexadecimal.
 *
 * @param r - Red (0-255)
 * @param g - Green (0-255)
 * @param b - Blue (0-255)
 * @returns Cor no formato #RRGGBB
 */
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const clamped = Math.max(0, Math.min(255, Math.round(n)));
    return clamped.toString(16).padStart(2, "0");
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Converte hexadecimal para RGB.
 *
 * @param color - Cor no formato #RRGGBB
 * @returns Objeto com componentes r, g, b (0-255)
 */
export function hexToRgb(color: string): { r: number; g: number; b: number } {
  const hex = color.replace("#", "");
  const num = parseInt(hex, 16);

  return {
    r: (num >> 16) & 0xff,
    g: (num >> 8) & 0xff,
    b: num & 0xff,
  };
}
