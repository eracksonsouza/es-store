/**
 * Validação de entrada com Zod para garantir dados corretos.
 * Usado tanto no cliente quanto na API.
 */

import { z } from "zod";

export const GenderSchema = z.enum(["masculino", "feminino"]);

export const SizeSchema = z.enum(["PP", "P", "M", "G", "GG", "XGG"]);

/**
 * Schema de medidas do usuário.
 * Define limites seguros e realistas.
 */
export const UserMeasurementsSchema = z.object({
  gender: GenderSchema,
  height: z.number().min(140).max(220),
  weight: z.number().min(40).max(200),
  age: z.number().int().min(16).max(100),
  chest: z.number().min(60).max(140),
  waist: z.number().min(50).max(130),
  hips: z.number().min(60).max(150),
});

/**
 * Schema para request de recomendação via API.
 */
export const FitRequestSchema = z.object({
  measurements: UserMeasurementsSchema,
  sku: z.string().optional(),
});

/**
 * Valida se uma cor hex é válida.
 */
export const HexColorSchema = z
  .string()
  .regex(/^#[0-9A-Fa-f]{6}$/, "Cor hex inválida");

/**
 * Helper type-safe para validar medidas do usuário.
 * @throws ZodError se a validação falhar
 */
export function validateUserMeasurements(data: unknown) {
  return UserMeasurementsSchema.parse(data);
}

/**
 * Helper type-safe para validar request de fit.
 * @throws ZodError se a validação falhar
 */
export function validateFitRequest(data: unknown) {
  return FitRequestSchema.parse(data);
}
