import { InitCanvasArgs } from "../types";

export const initCanvas = (
  { canvas, ctx, width, height }: InitCanvasArgs,
  theme: string
) => {
  canvas.width = width + 200;
  canvas.height = height + 10;
  ctx.lineWidth = 1;
  ctx.translate(0.5, 0.5);
  ctx.beginPath();

  ctx.strokeStyle = theme === "dark" ? "#b0b0b0" : "#2C2C2C";
  ctx.rect(100, 0, width, height);
  ctx.stroke();
};
