import { DrawArrowArgs } from "../types";

export const drawArrow = ({
  ctx,
  fromX,
  fromY,
  toX,
  toY,
  radius,
  color,
}: DrawArrowArgs) => {
  const x_center = toX;
  const y_center = toY;

  let angle;
  let x;
  let y;

  ctx.beginPath();

  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);

  angle = Math.atan2(toY - fromY, toX - fromX);
  x = radius * Math.cos(angle) + x_center;
  y = radius * Math.sin(angle) + y_center;

  ctx.moveTo(x, y);

  angle += (1 / 3) * (2 * Math.PI);
  x = radius * Math.cos(angle) + x_center;
  y = radius * Math.sin(angle) + y_center;

  ctx.lineTo(x, y);

  angle += (1 / 3) * (2 * Math.PI);
  x = radius * Math.cos(angle) + x_center;
  y = radius * Math.sin(angle) + y_center;

  ctx.fillStyle = color;
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
};
