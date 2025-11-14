/**
 * Constantes e tabelas de referência para cálculo de tamanho.
 * Baseado em medidas padrão da indústria têxtil brasileira.
 */

import type { Size } from "./types";

/**
 * Níveis de folga (ease) em centímetros.
 * - justo: roupas ajustadas (ex.: segunda pele)
 * - padrao: conforto moderado (recomendado)
 * - folgado: modelagem ampla (oversized)
 */
export const EASE_IDEAL = {
  justo: 4,
  padrao: 8,
  folgado: 12,
} as const;

/**
 * Tabela de referência de medidas por tamanho (em cm).
 * Valores médios para busto/tórax.
 */
export const SIZE_TABLE: Record<
  Size,
  { min: number; max: number; avg: number }
> = {
  PP: { min: 60, max: 75, avg: 67.5 },
  P: { min: 75, max: 85, avg: 80 },
  M: { min: 85, max: 95, avg: 90 },
  G: { min: 95, max: 105, avg: 100 },
  GG: { min: 105, max: 115, avg: 110 },
  XGG: { min: 115, max: 140, avg: 127.5 },
};

/**
 * Lista ordenada de tamanhos (menor → maior).
 */
export const SIZE_ORDER: Size[] = ["PP", "P", "M", "G", "GG", "XGG"];

/**
 * Pesos para cálculo de score de adequação.
 * Chest tem maior peso pois é a medida mais crítica.
 */
export const FIT_WEIGHTS = {
  chest: 0.5,
  waist: 0.3,
  hips: 0.2,
} as const;

/**
 * Tolerância para considerar um tamanho como "perfeito" (em cm).
 */
export const PERFECT_FIT_TOLERANCE = 2.5;
