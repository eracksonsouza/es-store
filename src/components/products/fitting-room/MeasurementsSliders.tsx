"use client";

/**
 * Formulário de ajuste de medidas corporais com sliders (step 2).
 */

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { SKIN_TONES } from "@/lib/ui/skin-tones";

interface MeasurementsSlidersProps {
  chest: number;
  waist: number;
  hips: number;
  skinTone: string;
  onChestChange: (value: number) => void;
  onWaistChange: (value: number) => void;
  onHipsChange: (value: number) => void;
  onSkinToneChange: (value: string) => void;
}

export function MeasurementsSliders({
  chest,
  waist,
  hips,
  skinTone,
  onChestChange,
  onWaistChange,
  onHipsChange,
  onSkinToneChange,
}: MeasurementsSlidersProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Ajuste o formato do corpo</h3>
      <p className="text-sm text-gray-600">
        Este é o formato aproximado do corpo que geramos com suas medidas.
        Ajuste somente se for necessário.
      </p>

      {/* Skin Tone Selector */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Tom de Pele</label>
        <div className="flex gap-2 items-center flex-wrap">
          {SKIN_TONES.map((tone) => (
            <button
              key={tone.id}
              type="button"
              onClick={() => onSkinToneChange(tone.color)}
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                skinTone === tone.color
                  ? "border-purple-600 ring-2 ring-purple-200 scale-110"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              style={{ backgroundColor: tone.color }}
              title={tone.name}
              aria-label={tone.name}
            />
          ))}
        </div>
      </div>

      {/* Chest Slider */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Tórax</label>
          <span className="text-sm text-gray-600">{chest} cm</span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => onChestChange(Math.max(60, chest - 5))}
            className="h-10 w-10 p-0"
          >
            −
          </Button>
          <Slider
            value={[chest]}
            onValueChange={([value]) => onChestChange(value)}
            min={60}
            max={140}
            step={1}
            className="flex-1"
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => onChestChange(Math.min(140, chest + 5))}
            className="h-10 w-10 p-0"
          >
            +
          </Button>
        </div>
      </div>

      {/* Waist Slider */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Cintura</label>
          <span className="text-sm text-gray-600">{waist} cm</span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => onWaistChange(Math.max(50, waist - 5))}
            className="h-10 w-10 p-0"
          >
            −
          </Button>
          <Slider
            value={[waist]}
            onValueChange={([value]) => onWaistChange(value)}
            min={50}
            max={130}
            step={1}
            className="flex-1"
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => onWaistChange(Math.min(130, waist + 5))}
            className="h-10 w-10 p-0"
          >
            +
          </Button>
        </div>
      </div>

      {/* Hips Slider */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Quadril</label>
          <span className="text-sm text-gray-600">{hips} cm</span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => onHipsChange(Math.max(60, hips - 5))}
            className="h-10 w-10 p-0"
          >
            −
          </Button>
          <Slider
            value={[hips]}
            onValueChange={([value]) => onHipsChange(value)}
            min={60}
            max={150}
            step={1}
            className="flex-1"
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => onHipsChange(Math.min(150, hips + 5))}
            className="h-10 w-10 p-0"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
}
