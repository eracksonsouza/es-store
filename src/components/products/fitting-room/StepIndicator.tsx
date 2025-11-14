/**
 * Indicador visual de progresso entre os steps do provador.
 */

import type { Step } from "@/lib/fit/types";

interface StepIndicatorProps {
  currentStep: Step;
}

const STEPS: Array<{ id: Step; number: number; label: string }> = [
  { id: "basic", number: 1, label: "Info Básica" },
  { id: "measurements", number: 2, label: "Medidas" },
  { id: "recommendation", number: 3, label: "Recomendação" },
];

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  const currentIndex = STEPS.findIndex((s) => s.id === currentStep);

  return (
    <div className="flex justify-center mb-6">
      <div className="flex items-center gap-2">
        {STEPS.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = index < currentIndex;

          return (
            <div key={step.id} className="flex items-center gap-2">
              {/* Circle */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-medium transition-colors ${
                  isActive
                    ? "bg-purple-600 text-white"
                    : isCompleted
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
                aria-current={isActive ? "step" : undefined}
              >
                {step.number}
              </div>

              {/* Connector line */}
              {index < STEPS.length - 1 && (
                <div
                  className={`w-16 h-1 transition-colors ${
                    index < currentIndex ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
