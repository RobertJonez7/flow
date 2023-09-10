import { BuildGridArgs } from "../types";

export const buildGrid = (
  { width, height, offsetX, offsetY, ctx }: BuildGridArgs,
  theme: string,
  rows: number[] | string[]
) => {
  // Row lines
  for (let y = offsetY, i = 0; y < height + 40; y += offsetY, i++) {
    ctx.beginPath();

    ctx.lineWidth = 1;
    ctx.strokeStyle = theme === "dark" ? "#626262" : "#c1c1c1";
    ctx.fillStyle = theme === "dark" ? "#b0b0b0" : "#2C2C2C";
    ctx.font = "12px Arial";

    ctx.moveTo(0 + 100, y);
    ctx.lineTo(width + 100, y);

    const yPos = i === 0 ? 30 : 34;

    ctx.fillText(rows[i]?.toString(), 0, y - yPos);
    ctx.fillText(rows[i]?.toString(), width + 150, y - yPos);

    ctx.stroke();
    ctx.closePath();
  }

  // Column lines
  for (let x = offsetX + 100; x < width; x += offsetX) {
    ctx.beginPath();

    ctx.lineWidth = 1;
    ctx.strokeStyle = theme === "dark" ? "#b0b0b0" : "#2C2C2C";

    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
    ctx.closePath();
  }
};
