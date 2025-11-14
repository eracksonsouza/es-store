"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useFittingRoom } from "@/hooks/useFittingRoom";
import { StepIndicator } from "./fitting-room/StepIndicator";
import { BasicInfoForm } from "./fitting-room/BasicInfoForm";
import { AvatarVisualization } from "./fitting-room/AvatarVisualization";
import { MeasurementsSliders } from "./fitting-room/MeasurementsSliders";
import { SizeRecommendation } from "./fitting-room/SizeRecommendation";
import type { Gender } from "@/lib/fit/types";

interface VirtualFittingRoomProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productTitle: string;
}

export default function VirtualFittingRoom({
  open,
  onOpenChange,
}: VirtualFittingRoomProps) {
  const {
    step,
    measurements,
    recommendedSize,
    selectedSize,
    currentFitType,
    updateMeasurements,
    setSelectedSize,
    handleNext,
    handleBack,
    reset,
    canGoBack,
    canGoNext,
  } = useFittingRoom();

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => reset(), 300);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Provador Virtual
          </DialogTitle>
          <DialogDescription>
            Preencha os dados para experimentar este produto
          </DialogDescription>
        </DialogHeader>

        <StepIndicator currentStep={step} />

        {step === "basic" && (
          <BasicInfoForm
            gender={measurements.gender}
            height={measurements.height}
            weight={measurements.weight}
            age={measurements.age}
            onGenderChange={(gender: Gender) => updateMeasurements({ gender })}
            onHeightChange={(height) => updateMeasurements({ height })}
            onWeightChange={(weight) => updateMeasurements({ weight })}
            onAgeChange={(age) => updateMeasurements({ age })}
          />
        )}

        {step === "measurements" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AvatarVisualization
              chest={measurements.chest}
              waist={measurements.waist}
              hips={measurements.hips}
              skinTone={measurements.skinTone}
            />
            <MeasurementsSliders
              chest={measurements.chest}
              waist={measurements.waist}
              hips={measurements.hips}
              skinTone={measurements.skinTone}
              onChestChange={(chest) => updateMeasurements({ chest })}
              onWaistChange={(waist) => updateMeasurements({ waist })}
              onHipsChange={(hips) => updateMeasurements({ hips })}
              onSkinToneChange={(skinTone) => updateMeasurements({ skinTone })}
            />
          </div>
        )}

        {step === "recommendation" && (
          <SizeRecommendation
            recommendedSize={recommendedSize}
            selectedSize={selectedSize}
            fitType={currentFitType}
            onSizeSelect={setSelectedSize}
            onEditMeasurements={() => handleBack()}
          />
        )}

        <div className="flex justify-between pt-4 border-t">
          {canGoBack && (
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              className="border-gray-300"
            >
              Voltar
            </Button>
          )}
          {canGoNext ? (
            <Button
              type="button"
              onClick={handleNext}
              className="ml-auto bg-purple-600 hover:bg-purple-700 text-white"
            >
              {step === "basic" ? "Próximo" : "Ver Recomendação"}
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleClose}
              className="ml-auto bg-purple-600 hover:bg-purple-700 text-white"
            >
              Fechar
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
