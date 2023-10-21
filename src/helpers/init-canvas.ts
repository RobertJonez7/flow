import { InitCanvasArgs } from "../types";
import { CANVAS_HEIGHT_OFFSET, CANVAS_OFFSET, ROW_WIDTH } from "./constants";

export const initCanvas = (
  { canvas, ctx, width, height }: InitCanvasArgs,
  theme: string
) => {
  canvas.width = width + ROW_WIDTH;
  canvas.height = height + CANVAS_HEIGHT_OFFSET;
  ctx.lineWidth = 1;
  ctx.translate(0.5, 0.5);
  ctx.beginPath();

  ctx.strokeStyle = theme === "dark" ? "#b0b0b0" : "#2C2C2C";
  ctx.rect(CANVAS_OFFSET, 0, width, height);
  ctx.stroke();
};
