import { InitCanvasArgs } from "../types";

export const initCanvas = ({ canvas, ctx, width, height }: InitCanvasArgs) => {
  canvas.width = width;
  canvas.height = height;
  ctx.lineWidth = 1;
  ctx.translate(0.5, 0.5);
  ctx.beginPath();
};
