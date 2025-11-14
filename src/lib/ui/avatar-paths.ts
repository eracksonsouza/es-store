/**
 * Gerador de paths SVG para o avatar 3D.
 * Separa a lógica de renderização SVG dos componentes React.
 */

/**
 * Gera o path SVG para o tronco superior (tórax).
 */
export function generateChestPath(chest: number, waist: number): string {
  return `
    M ${100 - chest / 2} 75
    Q ${100 - chest / 2} 85 ${100 - chest / 2.3} 95
    L ${100 - chest / 2.5} 130
    Q ${100 - chest / 2.5} 145 ${100 - waist / 2} 155
    L ${100 + waist / 2} 155
    Q ${100 + chest / 2.5} 145 ${100 + chest / 2.5} 130
    L ${100 + chest / 2.3} 95
    Q ${100 + chest / 2} 85 ${100 + chest / 2} 75
    Z
  `;
}

/**
 * Gera o path SVG para a cintura/abdômen.
 */
export function generateWaistPath(waist: number): string {
  return `
    M ${100 - waist / 2} 155
    Q ${100 - waist / 2.2} 175 ${100 - waist / 2.3} 195
    L ${100 + waist / 2.3} 195
    Q ${100 + waist / 2.2} 175 ${100 + waist / 2} 155
    Z
  `;
}

/**
 * Gera o path SVG para o quadril.
 */
export function generateHipsPath(waist: number, hips: number): string {
  return `
    M ${100 - waist / 2.3} 195
    Q ${100 - hips / 2.1} 205 ${100 - hips / 2} 220
    L ${100 - hips / 2} 270
    Q ${100 - hips / 2.2} 275 ${100 - hips / 3} 280
    L ${100 + hips / 3} 280
    Q ${100 + hips / 2.2} 275 ${100 + hips / 2} 270
    L ${100 + hips / 2} 220
    Q ${100 + hips / 2.1} 205 ${100 + waist / 2.3} 195
    Z
  `;
}

/**
 * Gera o path SVG para um braço.
 * @param isLeft - true para braço esquerdo, false para direito
 */
export function generateArmPath(chest: number, isLeft: boolean): string {
  const direction = isLeft ? -1 : 1;
  const baseX = 100 + direction * (chest / 2.2);

  return `
    M ${baseX + direction * 12} 75
    Q ${baseX + direction * 20} 90 ${baseX + direction * 22} 120
    Q ${baseX + direction * 23} 150 ${baseX + direction * 22} 180
    L ${baseX + direction * 12} 180
    Q ${baseX + direction * 13} 150 ${baseX + direction * 12} 120
    Q ${baseX + direction * 10} 90 ${baseX + direction * 2} 75
    Z
  `;
}

/**
 * Gera o path SVG para uma perna.
 * @param isLeft - true para perna esquerda, false para direita
 */
export function generateLegPath(hips: number, isLeft: boolean): string {
  const direction = isLeft ? -1 : 1;
  const baseX = 100 + direction * (hips / 3);

  return `
    M ${baseX} 280
    Q ${100 + direction * (hips / 4)} 300 ${100 + direction * (hips / 4.5)} 330
    Q ${100 + direction * (hips / 4.8)} 360 ${100 + direction * (hips / 5)} 390
    L ${100 + direction * (hips / 6)} 390
    Q ${100 + direction * (hips / 5.5)} 360 ${
    100 + direction * (hips / 5.2)
  } 330
    Q ${100 + direction * (hips / 5)} 300 ${100 + direction * (hips / 5)} 280
    Z
  `;
}

/**
 * Calcula as posições dos ombros.
 */
export function getShoulderPositions(chest: number) {
  return {
    left: { cx: 100 - chest / 2.2, cy: 70 },
    right: { cx: 100 + chest / 2.2, cy: 70 },
  };
}
