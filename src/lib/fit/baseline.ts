/**
 * Lógica de recomendação de tamanho (fit).
 * Funções puras sem side effects para cálculo de tamanho ideal.
 */

import type { Size, FitType, BodyShape } from "./types";
import { SIZE_TABLE, SIZE_ORDER, EASE_IDEAL, FIT_WEIGHTS } from "./constants";

/**
 * Calcula o tamanho recomendado baseado nas medidas do usuário.
 * Usa média ponderada com ênfase no tórax.
 *
 * @param measurements - Medidas do usuário
 * @returns Tamanho recomendado
 */
export function recommendSize(measurements: {
  chest: number;
  waist: number;
  hips: number;
}): Size {
  const { chest, waist, hips } = measurements;

  // Média ponderada (tórax tem mais peso)
  const avgMeasurement =
    chest * FIT_WEIGHTS.chest +
    waist * FIT_WEIGHTS.waist +
    hips * FIT_WEIGHTS.hips;

  // Encontra o tamanho mais próximo
  let bestSize: Size = "M";
  let minDiff = Infinity;

  SIZE_ORDER.forEach((size) => {
    const sizeData = SIZE_TABLE[size];
    const diff = Math.abs(avgMeasurement - sizeData.avg);

    if (diff < minDiff) {
      minDiff = diff;
      bestSize = size;
    }
  });

  return bestSize;
}

/**
 * Calcula o tipo de ajuste comparando tamanho selecionado vs recomendado.
 *
 * @param selectedSize - Tamanho selecionado pelo usuário
 * @param recommendedSize - Tamanho recomendado pelo sistema
 * @returns Tipo de ajuste: tight, perfect ou loose
 */
export function getFitType(selectedSize: Size, recommendedSize: Size): FitType {
  const selectedIndex = SIZE_ORDER.indexOf(selectedSize);
  const recommendedIndex = SIZE_ORDER.indexOf(recommendedSize);

  if (selectedIndex === recommendedIndex) return "perfect";
  if (selectedIndex < recommendedIndex) return "tight";
  return "loose";
}

/**
 * Calcula a folga (ease) em centímetros para um tamanho específico.
 *
 * @param userChest - Medida do tórax do usuário
 * @param size - Tamanho da roupa
 * @returns Folga em cm (positivo = folgado, negativo = apertado)
 */
export function calculateEase(userChest: number, size: Size): number {
  const sizeData = SIZE_TABLE[size];
  return sizeData.avg - userChest;
}

/**
 * Determina o formato corporal baseado nas proporções.
 *
 * @param chest - Medida do tórax
 * @param waist - Medida da cintura
 * @param hips - Medida do quadril
 * @returns Formato corporal identificado
 */
export function getBodyShape(
  chest: number,
  waist: number,
  hips: number
): BodyShape {
  const chestHipDiff = Math.abs(chest - hips);
  const isBalanced = chestHipDiff < 5;

  // Ampulheta: busto e quadril similares, cintura menor
  if (isBalanced && chest > waist && hips > waist) {
    return "ampulheta";
  }

  // Triângulo invertido: busto maior que quadril
  if (chest > hips + 5) {
    return "triângulo invertido";
  }

  // Pêra: quadril maior que busto
  if (hips > chest + 5) {
    return "pêra";
  }

  // Retângulo: proporções similares
  return "retângulo";
}

/**
 * Gera tamanhos alternativos com score de adequação.
 *
 * @param userChest - Medida do tórax do usuário
 * @param recommendedSize - Tamanho recomendado
 * @returns Array de tamanhos alternativos ordenados por score
 */
export function getAlternativeSizes(userChest: number, recommendedSize: Size) {
  return SIZE_ORDER.filter((size) => size !== recommendedSize)
    .map((size) => {
      const ease = calculateEase(userChest, size);
      // Score: diferença absoluta do ease ideal
      const score = Math.abs(ease - EASE_IDEAL.padrao);

      return {
        size,
        ease_cm: ease,
        score: parseFloat(score.toFixed(1)),
      };
    })
    .sort((a, b) => a.score - b.score)
    .slice(0, 2); // Retorna apenas os 2 melhores
}

/**
 * Valida se as medidas são consistentes (sem valores absurdos).
 *
 * @param measurements - Medidas a validar
 * @returns true se as medidas são consistentes
 */
export function areValidMeasurements(measurements: {
  chest: number;
  waist: number;
  hips: number;
}): boolean {
  const { chest, waist, hips } = measurements;

  // Cintura não pode ser maior que tórax e quadril ao mesmo tempo
  if (waist > chest && waist > hips) return false;

  // Diferenças muito grandes são suspeitas
  if (Math.abs(chest - waist) > 50) return false;
  if (Math.abs(hips - waist) > 50) return false;

  return true;
}
