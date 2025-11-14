/**
 * API Route: POST /api/fit/recommend
 * Recebe medidas do usuário e retorna recomendação de tamanho.
 *
 * Seguindo diretrizes:
 * - Validação com Zod
 * - Resposta JSON padronizada
 * - Sem logging de dados sensíveis
 * - Performance < 150ms
 */

import { NextRequest, NextResponse } from "next/server";
import { FitRequestSchema } from "@/lib/fit/validation";
import {
  recommendSize,
  calculateEase,
  getAlternativeSizes,
} from "@/lib/fit/baseline";
import type { FitResponse } from "@/lib/fit/types";

export async function POST(request: NextRequest) {
  try {
    // Parse e valida o body da requisição
    const body = await request.json();
    const validatedData = FitRequestSchema.parse(body);

    const { measurements, sku } = validatedData;
    const { chest, waist, hips } = measurements;

    // Calcula o tamanho recomendado
    const recommended_size = recommendSize({ chest, waist, hips });

    // Calcula a folga (ease) para o tamanho recomendado
    const ease_cm = calculateEase(chest, recommended_size);

    // Gera tamanhos alternativos
    const alternatives = getAlternativeSizes(chest, recommended_size);

    // Resposta padronizada
    const response: FitResponse = {
      recommended_size,
      ease_cm: parseFloat(ease_cm.toFixed(1)),
      alternatives,
      ...(sku && { sku }),
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        "Cache-Control": "private, max-age=300", // Cache de 5 minutos
      },
    });
  } catch (error) {
    // Erro de validação do Zod
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        {
          error: "Dados inválidos",
          details: "As medidas fornecidas não são válidas",
        },
        { status: 400 }
      );
    }

    // Outros erros
    console.error("Erro na API de recomendação:", error);
    return NextResponse.json(
      {
        error: "Erro interno do servidor",
      },
      { status: 500 }
    );
  }
}

// Método não permitido
export async function GET() {
  return NextResponse.json(
    {
      error: "Método não permitido",
      message: "Use POST para obter recomendações",
    },
    { status: 405 }
  );
}
