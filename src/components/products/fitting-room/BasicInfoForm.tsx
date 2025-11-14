"use client";

/**
 * Formulário de informações básicas do usuário (step 1).
 */

import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import type { Gender } from "@/lib/fit/types";

interface BasicInfoFormProps {
  gender: Gender;
  height: number;
  weight: number;
  age: number;
  onGenderChange: (gender: Gender) => void;
  onHeightChange: (height: number) => void;
  onWeightChange: (weight: number) => void;
  onAgeChange: (age: number) => void;
}

export function BasicInfoForm({
  gender,
  height,
  weight,
  age,
  onGenderChange,
  onHeightChange,
  onWeightChange,
  onAgeChange,
}: BasicInfoFormProps) {
  return (
    <div className="space-y-6">
      {/* Gender Selection */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Gênero</label>
        <div className="grid grid-cols-2 gap-4">
          <Button
            type="button"
            variant={gender === "feminino" ? "outline" : "default"}
            className={`h-12 ${
              gender === "masculino"
                ? "bg-purple-600 hover:bg-purple-700 text-white border-purple-600"
                : "border-gray-300"
            }`}
            onClick={() => onGenderChange("masculino")}
          >
            Masculino
          </Button>
          <Button
            type="button"
            variant={gender === "masculino" ? "outline" : "default"}
            className={`h-12 ${
              gender === "feminino"
                ? "bg-purple-600 hover:bg-purple-700 text-white border-purple-600"
                : "border-gray-300"
            }`}
            onClick={() => onGenderChange("feminino")}
          >
            Feminino
          </Button>
        </div>
      </div>

      {/* Height */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Altura</label>
        <div className="flex gap-4 items-center">
          <input
            type="number"
            value={height}
            onChange={(e) => onHeightChange(Number(e.target.value))}
            className="w-28 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            min="140"
            max="220"
          />
          <span className="text-sm text-gray-600">cm</span>
        </div>
      </div>

      {/* Weight */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Peso</label>
        <div className="flex gap-4 items-center">
          <input
            type="number"
            value={weight}
            onChange={(e) => onWeightChange(Number(e.target.value))}
            className="w-28 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            min="40"
            max="200"
          />
          <span className="text-sm text-gray-600">kg</span>
        </div>
      </div>

      {/* Age */}
      <div className="space-y-3">
        <label className="text-sm font-medium flex items-center gap-2">
          Idade
          <div className="relative group">
            <Info size={16} className="text-gray-400 cursor-help" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
              Usado para melhor recomendação
            </div>
          </div>
        </label>
        <div className="flex gap-4 items-center">
          <input
            type="number"
            value={age}
            onChange={(e) => onAgeChange(Number(e.target.value))}
            className="w-28 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            min="16"
            max="100"
          />
          <span className="text-sm text-gray-600">anos</span>
        </div>
      </div>
    </div>
  );
}
