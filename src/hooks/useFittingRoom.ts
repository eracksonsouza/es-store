"use client";

/**
 * Hook customizado para gerenciar o estado e lógica do provador virtual.
 * Encapsula toda a navegação entre steps e cálculos.
 */

import { useState, useCallback } from "react";
import type { UserMeasurements, Step, Size } from "@/lib/fit/types";
import { recommendSize, getFitType } from "@/lib/fit/baseline";
import { estimateAllMeasurements } from "@/lib/fit/anthropometry";
import { DEFAULT_SKIN_TONE } from "@/lib/ui/skin-tones";

const INITIAL_MEASUREMENTS: UserMeasurements = {
  gender: "masculino",
  height: 170,
  weight: 70,
  age: 25,
  chest: 90,
  waist: 75,
  hips: 95,
  skinTone: DEFAULT_SKIN_TONE,
};

export function useFittingRoom() {
  const [step, setStep] = useState<Step>("basic");
  const [measurements, setMeasurements] =
    useState<UserMeasurements>(INITIAL_MEASUREMENTS);
  const [recommendedSize, setRecommendedSize] = useState<Size>("M");
  const [selectedSize, setSelectedSize] = useState<Size>("M");

  /**
   * Atualiza medidas e estima valores corporais se necessário.
   */
  const updateMeasurements = useCallback(
    (updates: Partial<UserMeasurements>) => {
      setMeasurements((prev) => ({ ...prev, ...updates }));
    },
    []
  );

  /**
   * Estima medidas corporais baseado em altura, peso e gênero.
   */
  const estimateMeasurements = useCallback(() => {
    const { height, weight, gender } = measurements;
    const estimated = estimateAllMeasurements(height, weight, gender);

    setMeasurements((prev) => ({
      ...prev,
      ...estimated,
    }));
  }, [measurements]);

  /**
   * Navega para o próximo step.
   */
  const handleNext = useCallback(() => {
    if (step === "basic") {
      // Estima medidas ao avançar do step 1 para 2
      estimateMeasurements();
      setStep("measurements");
    } else if (step === "measurements") {
      // Calcula tamanho recomendado
      const size = recommendSize(measurements);
      setRecommendedSize(size);
      setSelectedSize(size);
      setStep("recommendation");
    }
  }, [step, measurements, estimateMeasurements]);

  /**
   * Volta para o step anterior.
   */
  const handleBack = useCallback(() => {
    if (step === "measurements") {
      setStep("basic");
    } else if (step === "recommendation") {
      setStep("measurements");
    }
  }, [step]);

  /**
   * Reseta o provador para o estado inicial.
   */
  const reset = useCallback(() => {
    setStep("basic");
    setMeasurements(INITIAL_MEASUREMENTS);
    setRecommendedSize("M");
    setSelectedSize("M");
  }, []);

  /**
   * Calcula o tipo de ajuste do tamanho selecionado.
   */
  const currentFitType = getFitType(selectedSize, recommendedSize);

  return {
    // State
    step,
    measurements,
    recommendedSize,
    selectedSize,
    currentFitType,

    // Actions
    updateMeasurements,
    setSelectedSize,
    handleNext,
    handleBack,
    reset,

    // Helpers
    canGoBack: step !== "basic",
    canGoNext: step !== "recommendation",
  };
}
