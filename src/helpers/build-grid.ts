import { BuildGridArgs } from "../types";
import {
  GRID_COLUMN_OFFSET,
  GRID_ROW_LINE,
  GRID_ROW_OFFSET,
  GRID_TEXT_OFFSET,
  GRID_TEXT_OFFSET_START,
  GRID_TEXT_RIGHT_OFFSET,
} from "./constants";

export const buildGrid = (
  { width, height, offsetX, offsetY, ctx }: BuildGridArgs,
  theme: string,
  rows: number[] | string[]
) => {
  // Row lines
  for (
    let y = offsetY, i = 0;
    y < height + GRID_ROW_OFFSET;
    y += offsetY, i++
  ) {
    ctx.beginPath();

    ctx.lineWidth = 1;
    ctx.strokeStyle = theme === "dark" ? "#626262" : "#c1c1c1";
    ctx.fillStyle = theme === "dark" ? "#b0b0b0" : "#2C2C2C";
    ctx.font = "12px Arial";

    ctx.moveTo(0 + GRID_ROW_LINE, y);
    ctx.lineTo(width + GRID_ROW_LINE, y);

    const yPos = i === 0 ? GRID_TEXT_OFFSET_START : GRID_TEXT_OFFSET;

    ctx.fillText(rows[i]?.toString(), 0, y - yPos);
    ctx.fillText(rows[i]?.toString(), width + GRID_TEXT_RIGHT_OFFSET, y - yPos);

    ctx.stroke();
    ctx.closePath();
  }

  // Column lines
  for (let x = offsetX + GRID_COLUMN_OFFSET; x < width; x += offsetX) {
    ctx.beginPath();

    ctx.lineWidth = 1;
    ctx.strokeStyle = theme === "dark" ? "#b0b0b0" : "#2C2C2C";

    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
    ctx.closePath();
  }
};
