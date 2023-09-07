import { DrawContentArgs } from "../types";
import { drawArrow } from "./draw-arrow";

export const drawContent = ({
  coordinates,
  ctx,
  directions,
}: DrawContentArgs) => {
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
  }
};
