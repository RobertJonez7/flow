import { DrawContentArgs } from "../types";
import { drawArrow } from "./draw-arrow";

const headers = { "0x0": 0, "0x3": 1, "0x4": 2, "0x40": 3 } as any;

export const drawContent = ({
  coordinates,
  colorPallete,
  directions,
  ctx,
}: DrawContentArgs) => {
  const endCoordinates: any = {};

  Object.entries(directions).forEach(([key, val]: any) => {
    const color = colorPallete[val?.elder_id] ?? "black";
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    const increment = headers[val?.src_node] > headers[val?.tgt_node];

    drawArrow({
      fromX: coordinates[val?.sent_time][`${headers[val?.src_node]}-x`],
      fromY: coordinates[val?.sent_time][`${headers[val?.src_node]}-y`],
      toX:
        coordinates[val?.rcvd_time][`${headers[val?.tgt_node]}-x`] +
        (increment ? +7 : -7),
      toY: coordinates[val?.rcvd_time][`${headers[val?.tgt_node]}-y`] - 5,
      radius: 5,
      color,
      ctx,
    });

    endCoordinates[key] = {
      x: coordinates[val?.rcvd_time][`${headers[val?.tgt_node]}-x`],
      y: coordinates[val?.rcvd_time][`${headers[val?.tgt_node]}-y`],
      description: val?.description,
      increment,
    };
  });

  return endCoordinates;
};
