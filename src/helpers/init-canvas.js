export const initCanvas = ({ canvas, ctx, width, height }) => {
  canvas.width = width;
  canvas.height = height;

  ctx.translate(0.5, 0.5);

  ctx.beginPath();
  ctx.lineWidth = 1;
};
