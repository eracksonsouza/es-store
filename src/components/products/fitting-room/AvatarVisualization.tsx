"use client";

/**
 * Visualização do avatar 3D realista baseado nas medidas.
 * Usa formas elípticas suaves para um visual mais natural.
 */

import { adjustColor } from "@/lib/ui/colors";
import { getBodyShape } from "@/lib/fit/baseline";

interface AvatarVisualizationProps {
  chest: number;
  waist: number;
  hips: number;
  skinTone: string;
}

export function AvatarVisualization({
  chest,
  waist,
  hips,
  skinTone,
}: AvatarVisualizationProps) {
  const bodyShape = getBodyShape(chest, waist, hips);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-lg p-6">
      <div className="relative">
        <div className="w-64 h-[450px] relative">
          <svg
            viewBox="0 0 200 500"
            className="w-full h-full drop-shadow-2xl"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Gradiente principal do corpo - mais realista */}
              <radialGradient id="bodyGradient" cx="45%" cy="35%">
                <stop
                  offset="0%"
                  stopColor={adjustColor(skinTone, 12)}
                  stopOpacity={1}
                />
                <stop offset="50%" stopColor={skinTone} stopOpacity={1} />
                <stop
                  offset="100%"
                  stopColor={adjustColor(skinTone, -18)}
                  stopOpacity={1}
                />
              </radialGradient>

              {/* Gradiente para cabeça */}
              <radialGradient id="headGradient" cx="40%" cy="25%">
                <stop
                  offset="0%"
                  stopColor={adjustColor(skinTone, 18)}
                  stopOpacity={1}
                />
                <stop offset="70%" stopColor={skinTone} stopOpacity={1} />
                <stop
                  offset="100%"
                  stopColor={adjustColor(skinTone, -12)}
                  stopOpacity={1}
                />
              </radialGradient>

              {/* Gradiente para braços */}
              <linearGradient
                id="armGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor={adjustColor(skinTone, -15)}
                  stopOpacity={1}
                />
                <stop offset="50%" stopColor={skinTone} stopOpacity={1} />
                <stop
                  offset="100%"
                  stopColor={adjustColor(skinTone, -8)}
                  stopOpacity={1}
                />
              </linearGradient>

              {/* Sombreamento lateral */}
              <linearGradient
                id="sideShading"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#000" stopOpacity={0.08} />
                <stop offset="15%" stopColor="#000" stopOpacity={0} />
                <stop offset="85%" stopColor="#000" stopOpacity={0} />
                <stop offset="100%" stopColor="#000" stopOpacity={0.08} />
              </linearGradient>

              {/* Filtro de suavização */}
              <filter id="softBlur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
              </filter>
            </defs>

            {/* Sombra no chão */}
            <ellipse
              cx="100"
              cy="495"
              rx="45"
              ry="4"
              fill="#000"
              opacity="0.12"
            />

            {/* === PERNAS === */}
            {/* Perna Esquerda */}
            <ellipse
              cx={100 - hips / 6}
              cy="385"
              rx={hips / 12}
              ry="105"
              fill="url(#bodyGradient)"
              filter="url(#softBlur)"
            />
            {/* Perna Direita */}
            <ellipse
              cx={100 + hips / 6}
              cy="385"
              rx={hips / 12}
              ry="105"
              fill="url(#bodyGradient)"
              filter="url(#softBlur)"
            />

            {/* === QUADRIL === */}
            <ellipse
              cx="100"
              cy="285"
              rx={hips / 2.1}
              ry="45"
              fill="url(#bodyGradient)"
              filter="url(#softBlur)"
            />

            {/* === CINTURA === */}
            <ellipse
              cx="100"
              cy="225"
              rx={waist / 2.15}
              ry="40"
              fill="url(#bodyGradient)"
              filter="url(#softBlur)"
            />

            {/* === TÓRAX/BUSTO === */}
            <ellipse
              cx="100"
              cy="165"
              rx={chest / 2.1}
              ry="48"
              fill="url(#bodyGradient)"
              filter="url(#softBlur)"
            />

            {/* Definição do busto (sutil) */}
            <ellipse
              cx={100 - chest / 6}
              cy="160"
              rx={chest / 8}
              ry={chest / 9}
              fill={adjustColor(skinTone, -5)}
              opacity="0.15"
              filter="url(#softBlur)"
            />
            <ellipse
              cx={100 + chest / 6}
              cy="160"
              rx={chest / 8}
              ry={chest / 9}
              fill={adjustColor(skinTone, -5)}
              opacity="0.15"
              filter="url(#softBlur)"
            />

            {/* === OMBROS === */}
            <ellipse
              cx={100 - chest / 2.3}
              cy="130"
              rx="20"
              ry="16"
              fill="url(#bodyGradient)"
              filter="url(#softBlur)"
            />
            <ellipse
              cx={100 + chest / 2.3}
              cy="130"
              rx="20"
              ry="16"
              fill="url(#bodyGradient)"
              filter="url(#softBlur)"
            />

            {/* === BRAÇOS === */}
            {/* Braço Esquerdo Superior */}
            <ellipse
              cx={100 - chest / 2.2 - 12}
              cy="185"
              rx="9"
              ry="55"
              fill="url(#armGradient)"
              filter="url(#softBlur)"
            />
            {/* Braço Direito Superior */}
            <ellipse
              cx={100 + chest / 2.2 + 12}
              cy="185"
              rx="9"
              ry="55"
              fill="url(#armGradient)"
              filter="url(#softBlur)"
            />

            {/* Antebraço Esquerdo */}
            <ellipse
              cx={100 - chest / 2.2 - 15}
              cy="255"
              rx="7"
              ry="45"
              fill="url(#armGradient)"
              filter="url(#softBlur)"
            />
            {/* Antebraço Direito */}
            <ellipse
              cx={100 + chest / 2.2 + 15}
              cy="255"
              rx="7"
              ry="45"
              fill="url(#armGradient)"
              filter="url(#softBlur)"
            />

            {/* === PESCOÇO === */}
            <ellipse
              cx="100"
              cy="110"
              rx="12"
              ry="20"
              fill="url(#headGradient)"
              filter="url(#softBlur)"
            />

            {/* === CABEÇA === */}
            <ellipse
              cx="100"
              cy="70"
              rx="24"
              ry="30"
              fill="url(#headGradient)"
              filter="url(#softBlur)"
            />

            {/* === SOMBREAMENTO LATERAL === */}
            <rect
              x="0"
              y="100"
              width="200"
              height="390"
              fill="url(#sideShading)"
              pointerEvents="none"
            />

            {/* === LINHAS DE DEFINIÇÃO SUTIS === */}
            {/* Linha central do corpo */}
            <line
              x1="100"
              y1="140"
              x2="100"
              y2="310"
              stroke={adjustColor(skinTone, -12)}
              strokeWidth="0.5"
              opacity="0.1"
            />

            {/* Linha da cintura */}
            <ellipse
              cx="100"
              cy="225"
              rx={waist / 2.5}
              ry="2"
              fill={adjustColor(skinTone, -15)}
              opacity="0.12"
            />

            {/* Linha do quadril */}
            <ellipse
              cx="100"
              cy="285"
              rx={hips / 2.5}
              ry="2"
              fill={adjustColor(skinTone, -15)}
              opacity="0.12"
            />
          </svg>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600 text-center">
        Formato do corpo: <strong className="capitalize">{bodyShape}</strong>
      </p>
    </div>
  );
}
