import { DrawContentArgs, Intersections } from "../types";
import { drawArrow } from "./draw-arrow";

export const drawContent = ({
  coordinates,
  ctx,
  directions,
}: DrawContentArgs) => {
  const endCoordinates: Intersections = {};

  for (const d in directions) {
    const row = coordinates[`row-${d}`];
    const direction = directions[d];

    ctx.strokeStyle = direction?.color ?? "black";
    ctx.lineWidth = 2;

    drawArrow({
      fromX: row[`top-${direction?.src_node}-x`],
      fromY: row[`top-${direction?.src_node}-y`],
      toX: row[`bottom-${direction?.tgt_node}-x`],
      toY: row[`bottom-${direction?.tgt_node}-y`],
      color: direction?.color,
      radius: 5,
      ctx,
    });

    endCoordinates[d] = {
      x: row[`bottom-${direction?.tgt_node}-x`],
      y: row[`bottom-${direction?.tgt_node}-y`],
    };
  }

  return endCoordinates;
};
