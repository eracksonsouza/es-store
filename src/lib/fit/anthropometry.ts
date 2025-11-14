/**
 * Funções de estimativa antropométrica.
 * Estima medidas corporais a partir de altura, peso e gênero.
 */

import type { Gender } from "./types";

/**
 * Estima o perímetro do tórax/busto baseado em altura e peso.
 * Usa fórmulas antropométricas simplificadas.
 *
 * @param height - Altura em cm
 * @param weight - Peso em kg
 * @param gender - Gênero
 * @returns Estimativa do tórax em cm
 */
export function estimateChest(
  height: number,
  weight: number,
  gender: Gender
): number {
  // IMC = peso / (altura em metros)^2
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  // Fórmula simplificada baseada em proporções corporais
  let baseChest: number;

  if (gender === "masculino") {
    // Homens: tórax mais largo proporcionalmente
    baseChest = height * 0.52 + bmi * 0.8;
  } else {
    // Mulheres: busto varia mais com peso
    baseChest = height * 0.48 + bmi * 1.2;
  }

  // Limitar entre 60-140cm
  return Math.max(60, Math.min(140, Math.round(baseChest)));
}

/**
 * Estima a cintura baseada em altura e peso.
 *
 * @param height - Altura em cm
 * @param weight - Peso em kg
 * @param gender - Gênero
 * @returns Estimativa da cintura em cm
 */
export function estimateWaist(
  height: number,
  weight: number,
  gender: Gender
): number {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  let baseWaist: number;

  if (gender === "masculino") {
    baseWaist = height * 0.44 + bmi * 0.9;
  } else {
    baseWaist = height * 0.38 + bmi * 1.0;
  }

  // Limitar entre 50-130cm
  return Math.max(50, Math.min(130, Math.round(baseWaist)));
}

/**
 * Estima o quadril baseado em altura e peso.
 *
 * @param height - Altura em cm
 * @param weight - Peso em kg
 * @param gender - Gênero
 * @returns Estimativa do quadril em cm
 */
export function estimateHips(
  height: number,
  weight: number,
  gender: Gender
): number {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  let baseHips: number;

  if (gender === "masculino") {
    // Homens: quadril mais próximo da cintura
    baseHips = height * 0.47 + bmi * 0.85;
  } else {
    // Mulheres: quadril mais largo
    baseHips = height * 0.53 + bmi * 1.1;
  }

  // Limitar entre 60-150cm
  return Math.max(60, Math.min(150, Math.round(baseHips)));
}

/**
 * Estima todas as medidas corporais de uma vez.
 *
 * @param height - Altura em cm
 * @param weight - Peso em kg
 * @param gender - Gênero
 * @returns Objeto com estimativas de chest, waist e hips
 */
export function estimateAllMeasurements(
  height: number,
  weight: number,
  gender: Gender
) {
  return {
    chest: estimateChest(height, weight, gender),
    waist: estimateWaist(height, weight, gender),
    hips: estimateHips(height, weight, gender),
  };
}
