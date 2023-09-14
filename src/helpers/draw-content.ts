import { DrawContentArgs, TooltipCoordinates } from "../types";
import { drawArrow } from "./draw-arrow";

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
      toX: toX + (increment ? +7 : -7) + 100,
      fromX: fromX + 100,
      toY: toY - 5,
      radius: 5,
      color,
      fromY,
      ctx,
    });

    if (descriptions) {
      ctx.font = "14px Arial";
      ctx.fillText(
        val?.description,
        increment ? (fromX + toX + 125) / 2 : (toX + fromX + 125) / 2,
        increment ? (toY + fromY - 20) / 2 : (toY + fromY - 20) / 2
      );
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
