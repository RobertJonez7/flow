import { CoordinateArgs, Intersections } from "../types";

export const computeIntersectionsCoordinates = (
  { offsetX, offsetY, rows, cols }: CoordinateArgs,
  responseRows: number[]
): Intersections => {
  const intersections: Intersections = {};

  for (let r = 0; r < rows + 1; r++) {
    for (let c = 0; c < cols + 1; c++) {
      intersections[`${responseRows[r]}`] = {
        ...intersections[`${responseRows[r]}`],
        [`${c}-x`]: offsetX * c,
        [`${c}-y`]: offsetY * r,
      };
    }
  }

  return intersections;
};
