import { drawArrow } from "./draw-arrow";

export const drawContent = (coordinates, ctx, directions) => {
  for (const d in directions) {
    const row = coordinates[`row-${d}`];
    const direction = directions[d];

    ctx.strokeStyle = direction?.color ?? "black";
    ctx.lineWidth = 2;

    drawArrow(
      ctx,
      row[`top-${direction?.src_node}-x`],
      row[`top-${direction?.src_node}-y`],
      row[`bottom-${direction?.tgt_node}-x`],
      row[`bottom-${direction?.tgt_node}-y`],
      5,
      direction?.color
    );
  }
};
