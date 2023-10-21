import { DrawContentArgs, TooltipCoordinates } from "../types";
import { drawArrow } from "./draw-arrow";
import {
  ARROW_OFFSET,
  ARROW_X_OFFSET,
  ARROW_Y_OFFSET,
  DESCRIPTIONS_X_OFFSET,
  DESCRIPTIONS_Y_OFFSET,
} from "./constants";

export const drawContent = (
  descriptions: boolean,
  { colorPallete, coordinates, headers, data, ctx }: DrawContentArgs
): TooltipCoordinates[] => {
  return Object.entries(data).reduce((obj: any, [key, val]: any) => {
    const color = colorPallete?.[val?.elder_id] ?? "black";
    const increment = headers[val?.src_node] > headers[val?.tgt_node];

    const fromX = coordinates?.[val?.sent_time][`${headers[val?.src_node]}-x`];
    const fromY = coordinates?.[val?.sent_time][`${headers[val?.src_node]}-y`];
    const toX = coordinates?.[val?.rcvd_time][`${headers[val?.tgt_node]}-x`];
    const toY = coordinates?.[val?.rcvd_time][`${headers[val?.tgt_node]}-y`];

    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;

    drawArrow({
      toX: toX + (increment ? +ARROW_X_OFFSET : -ARROW_X_OFFSET) + ARROW_OFFSET,
      fromX: fromX + ARROW_OFFSET,
      toY: toY - ARROW_Y_OFFSET,
      radius: 5,
      color,
      fromY,
      ctx,
    });

    if (descriptions) {
      const textPositionX = (toX + fromX + DESCRIPTIONS_X_OFFSET) / 2;
      const textPosistionY = (toY + fromY - DESCRIPTIONS_Y_OFFSET) / 2;
      ctx.font = "14px Arial";

      ctx.fillText(val?.description, textPositionX, textPosistionY);
    }

    obj[key] = {
      description: val?.description,
      increment,
      x: toX,
      y: toY,
    };

    return obj;
  }, {} as TooltipCoordinates);
};
