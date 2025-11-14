/**
 * Tipos para o sistema de recomendação de tamanho.
 * Define estruturas de dados sem side effects.
 */

export type Gender = "masculino" | "feminino";

export type Size = "PP" | "P" | "M" | "G" | "GG" | "XGG";

export type Step = "basic" | "measurements" | "recommendation";

export type FitType = "tight" | "perfect" | "loose";

export type BodyShape =
  | "ampulheta"
  | "triângulo invertido"
  | "pêra"
  | "retângulo";

/**
 * Medidas do usuário para cálculo de tamanho.
 * Todas as medidas em centímetros.
 */
export interface UserMeasurements {
  gender: Gender;
  height: number; // 140-220 cm
  weight: number; // 40-200 kg
  age: number; // 16-100 anos
  chest: number; // 60-140 cm (tórax)
  waist: number; // 50-130 cm (cintura)
  hips: number; // 60-150 cm (quadril)
  skinTone: string; // hex color
}

/**
 * Request para recomendação de tamanho via API.
 */
export interface FitRequest {
  measurements: Omit<UserMeasurements, "skinTone">;
  sku?: string;
}

/**
 * Resposta da API de recomendação.
 */
export interface FitResponse {
  sku?: string;
  recommended_size: Size;
  ease_cm: number;
  alternatives: SizeAlternative[];
}

/**
 * Tamanho alternativo com score de adequação.
 */
export interface SizeAlternative {
  size: Size;
  ease_cm: number;
  score: number; // menor é melhor
}

/**
 * Tom de pele disponível no seletor.
 */
export interface SkinTone {
  id: string;
  color: string;
  name: string;
}
