import { CoordinateArgs, Intersections } from "../types";

export const computeIntersectionsCoordinates = ({
  offsetX,
  offsetY,
  rows,
  cols,
}: CoordinateArgs): Intersections => {
  const intersections: Intersections = {};

  for (let r = 0; r < rows + 1; r++) {
    for (let c = 0; c < cols + 1; c++) {
      intersections[`row-${r}`] = {
        ...intersections[`row-${r}`],
        [`top-${c}-x`]: offsetX * c,
        [`top-${c}-y`]: offsetY * r,
        [`bottom-${c}-x`]: offsetX * c,
        [`bottom-${c}-y`]: offsetY * (r + 1),
      };
    }
  }

  return intersections;
};
