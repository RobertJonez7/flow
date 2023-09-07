import { BuildGridArgs } from "../types";

export const buildGrid = (
  { width, height, offsetX, offsetY, ctx }: BuildGridArgs,
  theme: string
) => {
  // Row lines
  for (let y = offsetY; y < height; y += offsetY) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = theme === "dark" ? "#b0b0b0" : "#2C2C2C";
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
    ctx.closePath();
  }

  // Column lines
  for (let x = offsetX; x < width; x += offsetX) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = theme === "dark" ? "#b0b0b0" : "#2C2C2C";
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
    ctx.closePath();
  }
};
