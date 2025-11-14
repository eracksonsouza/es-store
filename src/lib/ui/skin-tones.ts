/**
 * Constantes de tons de pele dispon\u00edveis.
 */

import type { SkinTone } from "@/lib/fit/types";

export const SKIN_TONES: readonly SkinTone[] = [
  { id: "very-light", color: "#f5d5c4", name: "Muito Claro" },
  { id: "light", color: "#e8cdb8", name: "Claro" },
  { id: "medium-light", color: "#d4b5a0", name: "M\u00e9dio Claro" },
  { id: "medium", color: "#c19a7a", name: "M\u00e9dio" },
  { id: "medium-dark", color: "#9d7a54", name: "M\u00e9dio Escuro" },
  { id: "dark", color: "#6b4423", name: "Escuro" },
] as const;

export const DEFAULT_SKIN_TONE = SKIN_TONES[1].color; // "Claro"
