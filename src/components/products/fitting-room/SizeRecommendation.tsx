"use client";

/**
 * Componente de recomendação de tamanho com seleção interativa (step 3).
 */

import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronRight, Info } from "lucide-react";
import type { Size, FitType } from "@/lib/fit/types";
import { SIZE_ORDER } from "@/lib/fit/constants";

interface SizeRecommendationProps {
  recommendedSize: Size;
  selectedSize: Size;
  fitType: FitType;
  onSizeSelect: (size: Size) => void;
  onEditMeasurements: () => void;
}

const FIT_INFO: Record<
  FitType,
  { label: string; description: string; color: string }
> = {
  perfect: {
    label: "Levemente justo",
    description: "Este tamanho se ajusta perfeitamente às suas medidas.",
    color: "text-green-600",
  },
  tight: {
    label: "Muito justo",
    description: "Este tamanho pode ficar apertado em algumas áreas.",
    color: "text-orange-600",
  },
  loose: {
    label: "Levemente folgado",
    description: "Este tamanho oferece mais conforto e mobilidade.",
    color: "text-blue-600",
  },
};

export function SizeRecommendation({
  recommendedSize,
  selectedSize,
  fitType,
  onSizeSelect,
  onEditMeasurements,
}: SizeRecommendationProps) {
  const selectedIndex = SIZE_ORDER.indexOf(selectedSize);
  const fitInfo = FIT_INFO[fitType];

  const handlePreviousSize = () => {
    if (selectedIndex > 0) {
      onSizeSelect(SIZE_ORDER[selectedIndex - 1]);
    }
  };

  const handleNextSize = () => {
    if (selectedIndex < SIZE_ORDER.length - 1) {
      onSizeSelect(SIZE_ORDER[selectedIndex + 1]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Recommended Size Display */}
      <div className="text-center space-y-4 pb-6 border-b">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-2">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold">MELHOR OPÇÃO</h3>
        <div className="text-6xl font-bold text-purple-600">
          {recommendedSize}
        </div>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          Com base nas suas medidas, este é o tamanho ideal para você. Você
          também pode experimentar outros tamanhos abaixo.
        </p>
      </div>

      {/* Size Selector */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handlePreviousSize}
            disabled={selectedIndex === 0}
            className="h-10 w-10 flex-shrink-0"
            aria-label="Tamanho anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="text-center space-y-2 flex-1 min-w-0">
            <p className="text-sm text-gray-600 font-medium">
              Prove também os tamanhos:
            </p>
            <div className="flex justify-center gap-2 flex-wrap">
              {SIZE_ORDER.map((size) => {
                const isRecommended = size === recommendedSize;
                const isSelected = size === selectedSize;

                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => onSizeSelect(size)}
                    className={`
                      relative w-16 h-16 rounded-lg border-2 font-bold text-lg
                      transition-all duration-200
                      ${
                        isSelected
                          ? "border-purple-600 bg-purple-50 scale-110 shadow-lg"
                          : "border-gray-300 hover:border-gray-400"
                      }
                      ${
                        isRecommended && !isSelected
                          ? "ring-2 ring-green-500 ring-offset-2"
                          : ""
                      }
                    `}
                    aria-label={`Tamanho ${size}${
                      isRecommended ? " (recomendado)" : ""
                    }`}
                    aria-pressed={isSelected}
                  >
                    {size}
                    {isRecommended && (
                      <div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                        aria-label="Recomendado"
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleNextSize}
            disabled={selectedIndex === SIZE_ORDER.length - 1}
            className="h-10 w-10 flex-shrink-0"
            aria-label="Próximo tamanho"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Fit Information */}
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div
            className={`flex items-center justify-center gap-2 ${fitInfo.color}`}
          >
            {fitType === "perfect" ? (
              <Check className="w-5 h-5" />
            ) : (
              <Info className="w-5 h-5" />
            )}
            <span className="font-medium">{fitInfo.label}</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">{fitInfo.description}</p>
        </div>

        {/* Edit Measurements Button */}
        <button
          type="button"
          onClick={onEditMeasurements}
          className="w-full text-sm text-purple-600 hover:text-purple-700 font-medium py-2 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors"
        >
          Editar Medidas
        </button>
      </div>
    </div>
  );
}
